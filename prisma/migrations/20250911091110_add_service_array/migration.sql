/*
  Warnings:

  - The `service` column on the `bookingService` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "bookingService" DROP COLUMN "service",
ADD COLUMN     "service" TEXT[];
