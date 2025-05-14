// Handles POST request to generate project ideas
import { generateProjectIdea, ProjectIdea } from "@/lib/generateIdea";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import z from "zod";
import prisma from "@/lib/db";

// Input schema validation
const generateSchema = z.object({
	skills: z
		.array(z.string())
		.min(1, "Skills array cannot be empty")
		.max(10, "Too many skills provided (max 10)")
		.nonempty("Skills array cannot be empty"),
	interests: z
		.array(z.string())
		.min(1, "Interests array cannot be empty")
		.max(10, "Too many interests provided (max 10)")
		.nonempty("Interests array cannot be empty"),
});

export async function POST(req: Request) {
	try {
		const session = await getServerSession();

		if (!session?.user?.email) {
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

		// Fetch user to get their ID
		const user = await prisma.user.findUnique({
			where: { email: session.user.email },
		});

		if (!user) {
			console.error(`User not found: ${session.user.email}`);
			return NextResponse.json({ error: "User not found." }, { status: 404 });
		}

		// Generate project ideas via AI
		const aiResponse: ProjectIdea[] = await generateProjectIdea({ skills, interests });

		if (!aiResponse?.length) {
			return NextResponse.json(
				{ message: "No ideas were generated from the given input." },
				{ status: 200 }
			);
		}

		// Prepare ideas for insertion
		const ideasToCreate = aiResponse.map((idea) => ({
			title: idea.name,
			description: `Problem: ${idea.problem}\nSolution: ${idea.solution}`,
			userId: user.id,
			inputSkills: skills,
			inputInterests: interests,
			isFavorite: false,
			isPublic: false,
		}));

		// Store them in DB
		const createdIdeas = await Promise.all(
			ideasToCreate.map((ideaData) => prisma.projectIdea.create({ data: ideaData }))
		);

		return NextResponse.json({ ideas: createdIdeas }, { status: 200 });
	} catch (error) {
		console.error("Error generating or saving project ideas:", error);
		return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
	}
}
