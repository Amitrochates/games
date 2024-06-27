/*
  Warnings:

  - You are about to drop the column `screenNo` on the `Menu` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_screenNo_fkey";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "screenNo";
