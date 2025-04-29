/*
  Warnings:

  - You are about to drop the column `services` on the `bookingService` table. All the data in the column will be lost.
  - Added the required column `service` to the `bookingService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookingService" DROP COLUMN "services",
ADD COLUMN     "service" TEXT NOT NULL;
