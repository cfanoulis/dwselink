/*
  Warnings:

  - You are about to drop the column `start` on the `classes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[day,period]` on the table `classes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[schname]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `period` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" DROP COLUMN "start",
ADD COLUMN     "period" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "One_Class_Per_Period" ON "classes"("day", "period");

-- CreateIndex
CREATE UNIQUE INDEX "teachers.schname_unique" ON "teachers"("schname");
