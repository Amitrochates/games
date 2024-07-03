/*
  Warnings:

  - You are about to drop the column `screenNo` on the `Session` table. All the data in the column will be lost.
  - Added the required column `setupId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_screenNo_fkey";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "screenNo",
ADD COLUMN     "setupId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_setupId_fkey" FOREIGN KEY ("setupId") REFERENCES "Setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
