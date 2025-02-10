const Tooltip = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span
			className={`${className} text-gray-200 pointer-events-none transition-opacity duration-300 ease-in-out z-[60] px-2 rounded-sm text-sm dark:bg-gray-600 bg-gray-400`}
		>
			{children}
		</span>
	);
};
export default Tooltip;
