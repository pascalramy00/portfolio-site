const Section = ({
	children,
	id,
	className,
}: {
	children: React.ReactNode;
	id: string;
	className?: string;
}) => {
	return (
		<section
			id={id}
			className={`${className} min-h-screen mb-20 lg:py-20 w-full`}
		>
			{children}
		</section>
	);
};
export default Section;
