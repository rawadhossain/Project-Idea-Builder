// handles POST request to generate idea
import { generateProjectIdea } from "@/lib/generateIdea";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import z from "zod";

const generateSchema = z.object({
	skills: z.array(z.string()).min(1).max(10), // Limit to max 10 skills
	interests: z.array(z.string()).min(1).max(10), // Limit to max 10 interests
});

export async function POST(req: Request) {
	try {
		const session = await getServerSession();

		if (!session) {
			return NextResponse.json({ error: "Unauthorized. Please sign in." }, { status: 401 });
		}

		const body = await req.json();
		const parsed = generateSchema.safeParse(body);

		if (!parsed.success) {
			return NextResponse.json(
				{ error: "Invalid input", details: parsed.error.flatten() },
				{ status: 400 }
			);
		}

		const { skills, interests } = parsed.data;

		const aiResponse = await generateProjectIdea({ skills, interests });

		if (!aiResponse) {
			return new Response("No response from AI", { status: 500 });
		}

		return NextResponse.json({ result: aiResponse }, { status: 200 });
	} catch (error) {
		console.error("Error generating project idea:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
