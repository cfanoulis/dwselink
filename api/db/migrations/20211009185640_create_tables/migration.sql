-- CreateEnum
CREATE TYPE "class_type" AS ENUM ('GENERAL', 'STEM', 'HUMANITIES');

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    "track" "class_type" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "schname" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authorized_users" (
    "id" SERIAL NOT NULL,
    "loginhash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "track" "class_type" NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes" ADD FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
