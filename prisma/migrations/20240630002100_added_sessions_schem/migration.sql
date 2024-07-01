/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Setup` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Setup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Setup" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "screenNo" INTEGER NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3) NOT NULL,
    "totalAmount" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_screenNo_fkey" FOREIGN KEY ("screenNo") REFERENCES "Setup"("screenNo") ON DELETE RESTRICT ON UPDATE CASCADE;
