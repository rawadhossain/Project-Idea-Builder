"use server";

import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";

const UnfavSchema = z.object({
	ideaId: z.string(),
});

export async function removeFavorite(ideaId: string) {
	const session = await getServerSession();

	if (!session) {
		throw new Error("You must be signed in to remove a favorite.");
	}

	const userEmail = session.user?.email;

	try {
		const findUser = await prisma.user.findUnique({
			where: { email: userEmail as string },
		});

		if (!findUser) {
			throw new Error("User not found");
		}

		const parsed = UnfavSchema.safeParse({ ideaId });

		if (!parsed.success) {
			throw new Error("Invalid idea ID");
		}

		const deleted = await prisma.favorite.deleteMany({
			where: {
				ideaId: parsed.data.ideaId,
				userId: findUser.id,
			},
		});

		if (deleted.count === 0) {
			throw new Error("Favorite not found or already removed.");
		}

		return { success: true };
	} catch (error) {
		console.error("Error removing favorite:", error);
		throw error;
	}
}
