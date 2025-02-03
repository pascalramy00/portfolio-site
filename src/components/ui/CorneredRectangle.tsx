import React from "react";

interface CorneredRectangleProps {
	borderColor?: string;
	cornerSize?: string;
	children?: React.ReactNode;
	className?: string;
}

const CorneredRectangle: React.FC<CorneredRectangleProps> = ({
	borderColor = "border-foreground",
	cornerSize = "w-6 h-6",
	className,
	children,
}) => {
	return (
		<div className="relative h-full p-6 border-none">
			{/* Corners */}
			<div
				className={`${className} absolute top-0 left-0 ${cornerSize} border-t-2 border-l-2 ${borderColor}`}
			></div>
			<div
				className={`${className} absolute top-0 right-0 ${cornerSize} border-t-2 border-r-2 ${borderColor}`}
			></div>
			<div
				className={`${className} absolute bottom-0 left-0 ${cornerSize} border-b-2 border-l-2 ${borderColor}`}
			></div>
			<div
				className={`${className} absolute bottom-0 right-0 ${cornerSize} border-b-2 border-r-2 ${borderColor}`}
			></div>

			{/* Content */}
			<div className="relative">{children}</div>
		</div>
	);
};

export default CorneredRectangle;
