import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.TeacherCreateArgs>({
	teacher: {
		one: { data: { name: 'String', schname: 'String' } },
		two: { data: { name: 'String', schname: 'String' } }
	}
});

export type StandardScenario = typeof standard;
