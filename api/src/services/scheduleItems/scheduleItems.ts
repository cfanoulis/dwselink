import type { Prisma } from '@prisma/client';
import type { ResolverArgs } from '@redwoodjs/graphql-server';
import { db } from 'src/lib/db';

export const scheduleItems = () => {
	return db.scheduleItem.findMany();
};

export const scheduleItem = ({ id }: Prisma.ScheduleItemWhereUniqueInput) => {
	return db.scheduleItem.findUnique({
		where: { id }
	});
};

interface CreateScheduleItemArgs {
	input: Prisma.ScheduleItemCreateInput;
}

export const createScheduleItem = ({ input }: CreateScheduleItemArgs) => {
	return db.scheduleItem.create({
		data: input
	});
};

interface UpdateScheduleItemArgs extends Prisma.ScheduleItemWhereUniqueInput {
	input: Prisma.ScheduleItemUpdateInput;
}

export const updateScheduleItem = ({ id, input }: UpdateScheduleItemArgs) => {
	return db.scheduleItem.update({
		data: input,
		where: { id }
	});
};

export const deleteScheduleItem = ({ id }: Prisma.ScheduleItemWhereUniqueInput) => {
	return db.scheduleItem.delete({
		where: { id }
	});
};

export const ScheduleItem = {
	teacher: (_obj, { root }: ResolverArgs<ReturnType<typeof scheduleItem>>) => db.scheduleItem.findUnique({ where: { id: root.id } }).teacher()
};
