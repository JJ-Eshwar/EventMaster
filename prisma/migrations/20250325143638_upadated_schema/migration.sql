/*
  Warnings:

  - Changed the type of `fee` on the `event_Data` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "event_Data" DROP COLUMN "fee",
ADD COLUMN     "fee" INTEGER NOT NULL;
