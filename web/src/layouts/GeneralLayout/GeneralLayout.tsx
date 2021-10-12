type GeneralLayoutProps = {
	children?: React.ReactNode;
};

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen bg-blue-50 p-2">
			<div className="flex flex-col items-start">{children}</div>
		</main>
	);
};

export default GeneralLayout;
