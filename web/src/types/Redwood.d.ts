import { User } from '@prisma/client';
import '@redwood/auth';
import '@redwoodjs/auth';

declare module '@redwoodjs/auth' {
	export interface CurrentUser extends User {}
}
