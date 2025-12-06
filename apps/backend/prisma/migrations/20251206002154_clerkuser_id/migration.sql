/*
  Warnings:

  - A unique constraint covering the columns `[clerUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_clerUserId_key" ON "User"("clerUserId");
