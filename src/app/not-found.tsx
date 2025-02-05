import Link from "next/link";

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
			<div className="absolute top-0 bottom-0 "></div>
			<h1 className="text-3xl font-bold">404 - Page Not Found</h1>
			<p className="mt-4">
				Could not find that page! Return to{" "}
				<Link href="/" className="underline">
					Home
				</Link>
			</p>
		</div>
	);
};
export default NotFound;
