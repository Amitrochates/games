-- CreateTable
CREATE TABLE "Setup" (
    "id" SERIAL NOT NULL,
    "screenNo" INTEGER NOT NULL,
    "systemType" TEXT NOT NULL,
    "hourlyRate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Setup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "screenNo" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Setup_screenNo_key" ON "Setup"("screenNo");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_screenNo_fkey" FOREIGN KEY ("screenNo") REFERENCES "Setup"("screenNo") ON DELETE RESTRICT ON UPDATE CASCADE;
