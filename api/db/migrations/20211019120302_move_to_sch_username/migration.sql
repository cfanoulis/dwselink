/*
  Warnings:

  - You are about to drop the column `firstName` on the `authorized_users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `authorized_users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `authorized_users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `authorized_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `authorized_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "authorized_users" DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "authorized_users.username_unique" ON "authorized_users"("username");
