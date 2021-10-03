import { render } from '@redwoodjs/testing/web';

import NowStudyingPage from './NowStudyingPage';

describe('NowStudyingPage', () => {
	it('renders successfully', () => {
		expect(() => {
			render(<NowStudyingPage />);
		}).not.toThrow();
	});
});
