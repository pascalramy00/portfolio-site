import Link from "next/link";
import Image from "next/image";

const ExternalLink = ({ href, label }: { href: string; label: string }) => {
	return (
		<div className="bg-gray-200 dark:bg-gray-400 rounded py-1 px-2 my-2 mr-2 inline-block">
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center"
			>
				<span>{label}</span>{" "}
				<Image
					src="/external_link_icon.png"
					width={16}
					height={16}
					alt="External link icon"
					className="block dark:hidden ml-2"
				/>
				<Image
					src="/external_link_icon_white.png"
					width={16}
					height={16}
					alt="External link icon"
					className="hidden dark:inline-block ml-2"
				/>
			</Link>
		</div>
	);
};
export default ExternalLink;
