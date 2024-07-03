/*
  Warnings:

  - Made the column `active` on table `Session` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "active" SET NOT NULL;
