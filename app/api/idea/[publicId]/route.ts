import { NextResponse } from "next/server";
import prisma from "@/lib/db";

type params = {
	publicId: string;
};

export async function GET(req: Request, { params }: { params: params }) {
	const { publicId } = params;

	if (!publicId) {
		return NextResponse.json({ error: "Public ID is required." }, { status: 400 });
	}

	try {
		const idea = await prisma.projectIdea.findFirst({
			where: { publicId, isPublic: true },
			select: {
				title: true,
				description: true,
				publicId: true,
				createdAt: true,
			},
		});

		if (!idea) {
			return NextResponse.json({ error: "Idea not found or not public." }, { status: 404 });
		}

		return NextResponse.json({ idea, status: 200 });
	} catch (error) {
		console.error("Error fetching idea:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
