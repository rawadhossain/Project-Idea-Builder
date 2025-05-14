"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export async function getRecentIdeas() {
	const session = await getServerSession();

	if (!session) {
		throw new Error("You must be signed in to get recent ideas.");
	}

	const userEmail = session.user?.email;

	try {
		const findUser = await prisma.user.findUnique({
			where: { email: userEmail as string },
		});

		if (!findUser) {
			throw new Error("User not found");
		}

		const recentIdeas = await prisma.projectIdea.findMany({
			where: {
				userId: findUser.id,
			},
			orderBy: {
				createdAt: "desc",
			},
			select: {
				id: true,
				publicId: true,
				title: true,
				description: true,
				createdAt: true,
			},
		});

		return recentIdeas;
	} catch (error) {
		console.error("Error fetching recent ideas:", error);
		throw error;
	}
}
