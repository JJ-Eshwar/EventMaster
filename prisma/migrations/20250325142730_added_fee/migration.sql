/*
  Warnings:

  - Added the required column `fee` to the `event_Data` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `event_Data` required. This step will fail if there are existing NULL values in that column.
  - Made the column `event` on table `event_Data` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "event_Data" ADD COLUMN     "fee" TEXT NOT NULL,
ADD COLUMN     "typeofEvent" TEXT,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "event" SET NOT NULL;
