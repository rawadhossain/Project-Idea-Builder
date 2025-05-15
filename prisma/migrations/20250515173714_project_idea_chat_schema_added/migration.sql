-- AlterTable
ALTER TABLE "ProjectIdea" ALTER COLUMN "publicId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProjectIdeaChat" (
    "id" TEXT NOT NULL,
    "ideaId" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectIdeaChat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectIdeaChat" ADD CONSTRAINT "ProjectIdeaChat_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "ProjectIdea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
