/*
  Warnings:

  - Made the column `startAt` on table `Session` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endAt` on table `Session` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "startAt" SET NOT NULL,
ALTER COLUMN "startAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "endAt" SET NOT NULL;
