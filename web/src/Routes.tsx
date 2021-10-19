// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router';
import GeneralLayout from './layouts/GeneralLayout/GeneralLayout';

const Routes = () => {
	return (
		<Router>
			<Set wrap={GeneralLayout}>
				<Route path="/login" page={LoginPage} name="login" />
				<Route path="/signup" page={SignupPage} name="signup" />
				<Route path="/now" page={NowStudyingPage} name="nowStudying" />
				<Route path="/" page={LandingPage} name="landing" />
			</Set>
			<Route notfound page={NotFoundPage} />
		</Router>
	);
};

export default Routes;
