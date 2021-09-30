import { MetaTags } from '@redwoodjs/web';

const LandingPage = () => {
	return (
		<>
			<MetaTags
				title="dwse.link"
				description="Το έξυπνο ημερολόγιο πρόγραμμα για το 3ο ΓΕ.Λ. Ευόσμου"
				/* you should un-comment description and add a unique description, 155 characters or less
				You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
			/>
			<div className="flex flex-col items-center justify-center w-screen h-screen bg-blue-50 p-2 text-center">
				<h1 className="text-2xl font-extrabold">
					Ωπ, γειά σου!{' '}
					<span role="img" aria-label="Waving Emoji">
						👋
					</span>
				</h1>
				<p className="mt-2">Είμαι το dwse.link - το έξυπνο ημερολόγιο πρόγραμμα σου για το 3ο ΓΕ.Λ. Ευόσμου.</p>
				<p>Δεν είμαι έτοιμο ακόμα - μείνε συντονισμένος για περισσότερες πληροφορίες</p>
				<p className="text-xs mt-8">Ξέρεις από TypeScript και θές να βοηθήσεις;</p>
				<br />
				<p className="text-xs">
					Βρές μας στο{' '}
					<a href="https://github.com/cfanoulis/dwselink" className="underline">
						GitHub
					</a>{' '}
					- συμμετέχουμε και στο Hacktoberfest!
				</p>
			</div>
		</>
	);
};

export default LandingPage;
