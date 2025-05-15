"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export async function getRecentIdeas(page: number = 1, pageSize: number = 10) {
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

		const skip = (page - 1) * pageSize;

		const [ideas, total] = await Promise.all([
			prisma.projectIdea.findMany({
				where: { userId: findUser.id },
				orderBy: { createdAt: "desc" },
				skip,
				take: pageSize,
				select: {
					id: true,
					publicId: true,
					title: true,
					description: true,
					createdAt: true,
				},
			}),
			prisma.projectIdea.count({
				where: { userId: findUser.id },
			}),
		]);

		return {
			ideas,
			page,
			pageSize,
			totalPages: Math.ceil(total / pageSize),
			totalItems: total,
		};
	} catch (error) {
		console.error("Error fetching recent ideas:", error);
		throw error;
	}
}
