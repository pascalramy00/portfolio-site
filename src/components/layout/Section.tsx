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
			className={`min-h-screen py-4 lg:py-20 w-full ${className}`}
		>
			{children}
		</section>
	);
};
export default Section;
