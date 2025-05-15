import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { z } from "zod";
import { ChatMessage, chatWithGemini } from "@/lib/chatWithAi";

type Params = {
	ideaId: string;
};

const messageSchema = z.object({
	message: z.string().min(1, "Message cannot be empty"),
});

export async function POST(req: Request, { params }: { params: Params }) {
	try {
		const session = await getServerSession();

		if (!session) {
			return NextResponse.json({ error: "Unauthorized. Please sign in." }, { status: 401 });
		}

		const { ideaId } = params;

		if (!ideaId) {
			return NextResponse.json({ error: "Idea ID is required." }, { status: 400 });
		}

		// Validate body
		const body = await req.json();
		const { message } = messageSchema.parse(body);

		// Check if idea belongs to the user
		const idea = await prisma.projectIdea.findFirst({
			where: {
				id: params.ideaId,
				user: {
					email: session.user?.email || "",
				},
			},
		});

		if (!idea) {
			return NextResponse.json(
				{ error: "Idea not found or not authorized." },
				{ status: 404 }
			);
		}

		// Get last 10 messages for context (ordered oldest -> newest)
		const recentMessages = await prisma.projectIdeaChat.findMany({
			where: { ideaId },
			orderBy: { createdAt: "asc" },
			take: 10,
		});

		// Prepare chat history for Gemini
		const geminiChat: ChatMessage[] = [
			...(recentMessages.map((msg) => ({
				role: msg.sender === "user" ? "user" : "assistant",
				content: msg.message,
			})) satisfies ChatMessage[]),
			{ role: "user", content: message },
		];

		// Get AI response
		const aiReply = await chatWithGemini(geminiChat);

		// Save user message and AI reply
		await prisma.projectIdeaChat.createMany({
			data: [
				{
					ideaId,
					sender: "user",
					message,
				},
				{
					ideaId,
					sender: "assistant",
					message: aiReply,
				},
			],
		});

		return NextResponse.json({ reply: aiReply }, { status: 200 });
	} catch (error) {
		console.error("Error in chat route:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
