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
			className={`${className} min-h-screen lg:py-20 w-full lg:w-[94%]`}
		>
			{children}
		</section>
	);
};
export default Section;
