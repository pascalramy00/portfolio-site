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
			className={`py-10 lg:py-20 ${className} min-h-screen w-full lg:w-[94%]`}
		>
			{children}
		</section>
	);
};
export default Section;
