/*
  Warnings:

  - A unique constraint covering the columns `[setupId]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "startAt" DROP NOT NULL,
ALTER COLUMN "startAt" DROP DEFAULT,
ALTER COLUMN "endAt" DROP NOT NULL,
ALTER COLUMN "active" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Session_setupId_key" ON "Session"("setupId");
