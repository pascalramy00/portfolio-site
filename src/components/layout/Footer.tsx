import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline, IoCodeSlash } from "react-icons/io5";

const Footer = () => {
	return (
		<footer className="w-full pb-12 pt-0 md:pt-6 px-4 md:px-20">
			<div className="border-t flex flex-col gap-8 md:h-full items-center justify-between md:flex-row pt-10">
				<div className="flex gap-4">
					<Link
						href="https://www.linkedin.com/in/pascal-ramy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin className="w-5 h-5" />
					</Link>
					<Link
						href="https://github.com/pascalramy00"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="w-5 h-5" />
					</Link>
					<Link
						href="/docs/Pascal_Ramy_CV.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoDocumentTextOutline className="w-5 h-5" />
					</Link>
					<Link
						href="https://github.com/pascalramy00/portfolio-site"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoCodeSlash className="w-5 h-5" />
					</Link>
				</div>
				<p className="text-sm">&copy; 2025 Pascal Ramy</p>
				<p className="text-sm">Created with Next.js & Tailwind CSS</p>
			</div>
		</footer>
	);
};
export default Footer;
