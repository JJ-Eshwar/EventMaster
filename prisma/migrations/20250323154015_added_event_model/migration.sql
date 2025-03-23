/*
  Warnings:

  - You are about to drop the column `event` on the `Contact_Data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact_Data" DROP COLUMN "event";

-- CreateTable
CREATE TABLE "event_Data" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" VARCHAR(255),
    "event" TEXT,
    "organization" TEXT NOT NULL,
    "shortnote" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_Data_pkey" PRIMARY KEY ("id")
);
