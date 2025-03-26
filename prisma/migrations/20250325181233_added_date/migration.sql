/*
  Warnings:

  - Added the required column `eventdate` to the `event_Data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event_Data" ADD COLUMN     "eventdate" TIMESTAMP(3) NOT NULL;
