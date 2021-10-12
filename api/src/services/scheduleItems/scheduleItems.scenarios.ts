import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.ScheduleItemCreateArgs>({
	scheduleItem: {
		one: {
			data: {
				class: 'String',
				day: 5456312,
				start: 3608160,
				track: 'GENERAL',
				teacher: { create: { name: 'String', schname: 'String' } }
			}
		},
		two: {
			data: {
				class: 'String',
				day: 6324795,
				start: 3710914,
				track: 'GENERAL',
				teacher: { create: { name: 'String', schname: 'String' } }
			}
		}
	}
});

export type StandardScenario = typeof standard;
