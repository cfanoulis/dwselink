import { useAuth } from '@redwoodjs/auth';
import { FieldError, Form, Label, PasswordField, Submit, TextField } from '@redwoodjs/forms';
import { Link, navigate, routes } from '@redwoodjs/router';
import { toast, Toaster } from '@redwoodjs/web/toast';
import { useEffect, useRef } from 'react';

const SignupPage = () => {
	const { isAuthenticated, signUp } = useAuth();

	useEffect(() => {
		if (isAuthenticated) {
			navigate(routes.landing());
		}
	}, [isAuthenticated]);

	// focus on email box on page load
	const usernameRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (!usernameRef.current) return;
		usernameRef.current.focus();
	}, []);

	// TODO: Figure out typings for this
	const onSubmit = async (data: Record<string, unknown>) => {
		const response = await signUp({ ...data });

		if (response.message) {
			toast(response.message);
		} else if (response.error) {
			toast.error(response.error);
		} else {
			// user is signed in automatically
			toast.success('Welcome!');
		}
	};

	return (
		<main className="rw-main">
			<Toaster />
			<div className="rw-scaffold rw-login-container">
				<div className="rw-segment">
					<header className="rw-segment-header">
						<h2 className="rw-heading rw-heading-secondary">Signup</h2>
					</header>

					<div className="rw-segment-main">
						<div className="rw-form-wrapper">
							<Form onSubmit={onSubmit} className="rw-form-wrapper">
								<div className="text-left">
									<Label name="username" className="rw-label" errorClassName="rw-label rw-label-error">
										Username
									</Label>
									<TextField
										name="username"
										className="rw-input"
										errorClassName="rw-input rw-input-error"
										ref={usernameRef}
										validation={{
											required: {
												value: true,
												message: 'Username is required'
											}
										}}
									/>
									<FieldError name="username" className="rw-field-error" />
								</div>

								<div className="text-left">
									<Label name="password" className="rw-label" errorClassName="rw-label rw-label-error">
										Password
									</Label>
									<PasswordField
										name="password"
										className="rw-input"
										errorClassName="rw-input rw-input-error"
										autoComplete="current-password"
										validation={{
											required: {
												value: true,
												message: 'Password is required'
											}
										}}
									/>
									<FieldError name="password" className="rw-field-error" />
								</div>

								<div className="rw-button-group">
									<Submit className="rw-button rw-button-blue">Sign Up</Submit>
								</div>
							</Form>
						</div>
					</div>
				</div>
				<div className="rw-login-link">
					<span>Already have an account?</span>{' '}
					<Link to={routes.login()} className="rw-link">
						Log in!
					</Link>
				</div>
			</div>
		</main>
	);
};

export default SignupPage;
