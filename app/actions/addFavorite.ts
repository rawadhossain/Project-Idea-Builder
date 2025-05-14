"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";

const FavSchema = z.object({
	ideaId: z.string(),
});

export async function addFavorite(ideaId: string) {
	const session = await getServerSession();

	if (!session) {
		throw new Error("You must be signed in to add a favorite.");
	}

	const userEmail = session.user?.email;

	try {
		const findUser = await prisma.user.findUnique({
			where: { email: userEmail as string },
		});

		if (!findUser) {
			throw new Error("User not found");
		}

		const parsed = FavSchema.safeParse({ ideaId });

		if (!parsed.success) {
			throw new Error("Invalid idea ID");
		}

		// Check if already favorited (optional safeguard)
		const existing = await prisma.favorite.findFirst({
			where: {
				ideaId: parsed.data.ideaId,
				userId: findUser.id,
			},
		});

		if (existing) {
			throw new Error("Already added to favorites.");
		}

		const favorite = await prisma.favorite.create({
			data: {
				ideaId: parsed.data.ideaId,
				userId: findUser.id,
			},
		});

		return favorite;
	} catch (error) {
		console.error("Error adding favorite:", error);
		throw error;
	}
}
