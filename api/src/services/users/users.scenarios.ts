import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.UserCreateArgs>({
	user: {
		one: {
			data: {
				loginhash: 'String',
				firstName: 'String',
				lastName: 'String',
				alati: 'String',
				track: 'GENERAL'
			}
		},
		two: {
			data: {
				loginhash: 'String',
				firstName: 'String',
				lastName: 'String',
				alati: 'String',
				track: 'GENERAL'
			}
		}
	}
});

export type StandardScenario = typeof standard;
