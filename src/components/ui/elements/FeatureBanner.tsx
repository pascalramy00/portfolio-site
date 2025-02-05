const FeatureBanner = ({
	features,
	className,
}: {
	features: string[];
	className?: string;
}) => {
	return (
		<div className={`${className} relative flex overflow-x-hidden`}>
			{/* Two copies of the list for smooth looping */}
			<div className="animate-marquee whitespace-nowrap">
				{features.map((feature, index) => (
					<span key={index} className="mx-4 font-semibold">
						{feature}
					</span>
				))}
			</div>
			<div className="absolute top-0 animate-marquee2 whitespace-nowrap">
				{features.map((feature, index) => (
					<span key={index} className="mx-4 font-semibold">
						{feature}
					</span>
				))}
			</div>
		</div>
	);
};

export default FeatureBanner;
