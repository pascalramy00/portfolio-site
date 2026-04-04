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
      className={`${className} bg-gray-200 text-black rounded py-0.5 px-2 my-2 mr-2 inline-block hover:bg-gray-300 transition-all`}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <span>{label}</span>
        <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1 " />
      </Link>
    </div>
  );
};
export default ExternalLink;
