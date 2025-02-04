import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const ExternalLink = ({
	href,
	label,
	className,
}: {
	href: string;
	label: string;
	className?: string;
}) => {
	return (
		<div
			className={`${className} bg-gray-200 dark:bg-gray-400 rounded py-1 px-2 my-2 mr-2 inline-block`}
		>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center"
			>
				<span>{label}</span>
				<ArrowTopRightOnSquareIcon className="w-5 h-5 ml-1 " />
			</Link>
		</div>
	);
};
export default ExternalLink;
