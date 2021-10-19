import { useAuth } from '@redwoodjs/auth';
import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const LandingPage = () => {
	const { currentUser, isAuthenticated } = useAuth();

	return (
		<>
			<MetaTags
				title="dwse.link"
				description="Το έξυπνο ημερολόγιο πρόγραμμα για το 3ο ΓΕ.Λ. Ευόσμου"
				/* you should un-comment description and add a unique description, 155 characters or less
				You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
			/>
			<h1 className="text-2xl font-extrabold">
				Ωπ, γειά σου!{' '}
				<span role="img" aria-label="Waving Emoji">
					👋
				</span>
			</h1>
			<p className="m-2">Είμαι το dwse.link - το έξυπνο ημερολόγιο πρόγραμμα σου για το 3ο ΓΕ.Λ. Ευόσμου.</p>
			{isAuthenticated && currentUser ? (
				<>
					<p>
						Αν δεν κάνω λάθος, είσαι ο <strong>{currentUser.name}</strong> ({currentUser.username})
					</p>
					<br />
					<Link to={routes.nowStudying()} className="underline">
						Πάμε στο πρόγραμμα ↗
					</Link>
				</>
			) : (
				<>
					<p>Δεν είμαι έτοιμο ακόμα - μείνε συντονισμένος για περισσότερες πληροφορίες</p>
				</>
			)}
			<p className="text-xs mt-8">Ξέρεις από TypeScript και θές να βοηθήσεις;</p>
			<br />
			<p className="text-xs">
				Βρές μας στο{' '}
				<a href="https://github.com/cfanoulis/dwselink" className="underline">
					GitHub
				</a>{' '}
				- συμμετέχουμε και στο Hacktoberfest!
			</p>
		</>
	);
};

export default LandingPage;
