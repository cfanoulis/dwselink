import { MetaTags } from '@redwoodjs/web';
import { useState, useEffect } from 'react';
import { useInterval } from 'src/util/hooks/useInterval';

const NowStudyingPage = () => {
	let time = 0;
	// should set remaining time @ load here, in seconds
	const [timeRemaining, setTimeRemaining] = useState(15);

	useInterval(() => {
		time++;
		setTimeRemaining(timeRemaining - time);
	}, 1000);

	useEffect(() => {
		if (timeRemaining === 0) window.location.reload(false);
	});

	return (
		<>
			<MetaTags
				title="NowStudying"
				// description="NowStudying description"
				/* you should un-comment description and add a unique description, 155 characters or less
				You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
			/>
			<div className="flex-grow flex flex-col items-center justify-center">
				<h5 className="text-base font-bold">ΤΩΡΑ ΕΧΕΙΣ:</h5>
				<h1 className="font-techno text-4xl mt-4  underline hover:bg-blue-700 hover:text-white hover:no-underline p-2">
					<a href="https://minedu-secondary2.webex.com/meet/tpalaio" target="calllinks">
						ΝΕΟΕΛΛΗΝΙΚΗ ΛΟΓΟΤΕΧΝΙΑ
					</a>
				</h1>
				<h5 className="text-base mb-4">με την κ. ΠΑΛΑΙΟΛΟΓΟΥ</h5>
				<h5 className="text-xs">(ΚΑΝΕ ΚΛΙΚ ΣΤΟΝ ΤΙΤΛΟ ΓΙΑ ΝΑ ΣΥΝΔΕΘΕΙΣ)</h5>
				<p className="text-lg mt-12">Το μάθημα τελειώνει σε {timeRemaining}. Μετά, έχεις διάλειμμα (13:00 - 13:05)</p>
			</div>
			<footer className="align-end">
				<span className="text-xs">
					ΦΑΝΟΥΛΗΣ ΧΑΡΑΛΑΜΠΟΣ - Β4 - ΘΕΤΙΚΕΣ ΣΠΟΥΔΕΣ -{' '}
					<a href="/logout" className="underline">
						{/*This needs to become a Redwood link or a button*/}
						Αποσυνδέσου ↗
					</a>
				</span>
			</footer>
		</>
	);
};

export default NowStudyingPage;
