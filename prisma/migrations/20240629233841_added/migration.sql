/*
  Warnings:

  - You are about to drop the column `hourlyRate` on the `Setup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Setup" DROP COLUMN "hourlyRate";

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "systemType" TEXT NOT NULL,
    "baseRate" INTEGER NOT NULL,
    "addRate" INTEGER NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Price_systemType_key" ON "Price"("systemType");

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_systemType_fkey" FOREIGN KEY ("systemType") REFERENCES "Price"("systemType") ON DELETE RESTRICT ON UPDATE CASCADE;
