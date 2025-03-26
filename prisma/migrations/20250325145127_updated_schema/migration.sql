/*
  Warnings:

  - You are about to drop the `Contact_Data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Contact_Data";

-- CreateTable
CREATE TABLE "contact_Data" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_Data_pkey" PRIMARY KEY ("id")
);
