import type { Prisma } from '@prisma/client';
import type { ResolverArgs } from '@redwoodjs/graphql-server';
import { db } from 'src/lib/db';

export const teachers = () => {
	return db.teacher.findMany();
};

export const teacher = ({ id }: Prisma.TeacherWhereUniqueInput) => {
	return db.teacher.findUnique({
		where: { id }
	});
};

interface CreateTeacherArgs {
	input: Prisma.TeacherCreateInput;
}

export const createTeacher = ({ input }: CreateTeacherArgs) => {
	return db.teacher.create({
		data: input
	});
};

interface UpdateTeacherArgs extends Prisma.TeacherWhereUniqueInput {
	input: Prisma.TeacherUpdateInput;
}

export const updateTeacher = ({ id, input }: UpdateTeacherArgs) => {
	return db.teacher.update({
		data: input,
		where: { id }
	});
};

export const deleteTeacher = ({ id }: Prisma.TeacherWhereUniqueInput) => {
	return db.teacher.delete({
		where: { id }
	});
};

export const Teacher = {
	ScheduleItem: (_obj, { root }: ResolverArgs<ReturnType<typeof teacher>>) => db.teacher.findUnique({ where: { id: root.id } }).ScheduleItem()
};
