type GeneralLayoutProps = {
	children?: React.ReactNode;
};

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
	return <div className="flex flex-col items-center justify-center w-screen h-screen bg-blue-50 p-2 text-center">{children}</div>;
};

export default GeneralLayout;
