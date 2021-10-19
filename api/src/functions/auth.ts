import { Classtype, User } from '@prisma/client';
import { DbAuthHandler } from '@redwoodjs/api';
import { db } from 'src/lib/db';
interface SignupHandlerContext {
	username: string;
	hashedPassword: string;
	salt: string;

	userAttributes: Omit<User, 'loginhash' | 'alati' | 'username'>;
}
export const handler = async (event, context) => {
	const loginOptions = {
		// login.handler() is called after finding the user that matches the
		// username/password provided at login, but before actually considering them
		// logged in. The `user` argument will be the user in the database that
		// matched the username/password.
		//
		// If you want to allow this user to log in simply return the user.
		//
		// If you want to prevent someone logging in for another reason (maybe they
		// didn't validate their email yet), throw an error and it will be returned
		// by the `logIn()` function from `useAuth()` in the form of:
		// `{ message: 'Error message' }`
		handler: (user) => {
			return user;
		},

		errors: {
			usernameOrPasswordMissing: 'Πρέπει να καταχωρήσεις και το επώνυμο και τον αριθμό μητρώου σου!',
			usernameNotFound: 'Λάθος χρήστης ή αριθμός μητρώου',
			incorrectPassword: 'Λάθος χρήστης ή αριθμός μητρώου'
		},

		// How long a user will remain logged in, in seconds
		expires: 60 * 60 * 24 * 120 // 120 days - same as a school term, ish
	};

	const signupOptions = {
		// Whatever you want to happen to your data on new user signup. Redwood will
		// check for duplicate usernames before calling this handler. At a minimum
		// you need to save the `username`, `hashedPassword` and `salt` to your
		// user table. `userAttributes` contains any additional object members that
		// were included in the object given to the `signUp()` function you got
		// from `useAuth()`.
		//
		// If you want the user to be immediately logged in, return the user that
		// was created.
		//
		// If this handler throws an error, it will be returned by the `signUp()`
		// function in the form of: `{ error: 'Error message' }`.
		//
		// If this returns anything else, it will be returned by the
		// `signUp()` function in the form of: `{ message: 'String here' }`.
		handler: ({ username, hashedPassword, salt }: SignupHandlerContext) => {
			return db.user.create({
				data: {
					username,
					loginhash: hashedPassword,
					alati: salt,
					name: 'ΟΝΟΜΑ',
					track: Classtype.STEM
				}
			});
		},

		errors: {
			// `field` will be either "username" or "password"
			fieldMissing: 'Δεν καταχώρισες κάτι, βλάκα.', // I'm literally the only one seeing these messages so some swearing is fine
			usernameTaken: 'Άτομο ήδη στη βάση δεδομένων'
		}
	};

	const authHandler = new DbAuthHandler(event, context, {
		// Provide prisma db client
		db: db,

		// The name of the property you'd call on `db` to access your user table.
		// ie. if your Prisma model is named `User` this value would be `user`, as in `db.user`
		authModelAccessor: 'user',

		// A map of what dbAuth calls a field to what your database calls it.
		// `id` is whatever column you use to uniquely identify a user (probably
		// something like `id` or `userId` or even `email`)
		authFields: {
			id: 'id',
			username: 'username',
			hashedPassword: 'loginhash',
			salt: 'alati'
		},

		login: loginOptions,
		signup: signupOptions
	});

	return await authHandler.invoke();
};
