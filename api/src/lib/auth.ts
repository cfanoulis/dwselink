import { AuthenticationError } from '@redwoodjs/graphql-server';
import { db } from './db';

// The session object sent in as the first arugment to getCurrentUser() will
// have a single key `id` containing the unique ID of the logged in user
// (whatever field you set as `authFields.id` in your auth function config).
// You'll need to update the call to `db` below if you use a different model
// name or unique field name:
//
//   return await db.profile.findUnique({ where: { email: session.id } })
//                   ───┬───                       ──┬──
//      model accessor ─┘      unique id field name ─┘

export const getCurrentUser = async (session) => {
	return await db.user.findUnique({ where: { id: session.id } });
};

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = () => {
	return !!context.currentUser;
};

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param {string= | string[]=} roles - A single role or list of roles to check if the user belongs to
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {AuthenticationError} - If the currentUser is not authenticated
 * @throws {ForbiddenError} If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = () => {
	if (!isAuthenticated()) {
		throw new AuthenticationError("You don't have permission to do that.");
	}
};
