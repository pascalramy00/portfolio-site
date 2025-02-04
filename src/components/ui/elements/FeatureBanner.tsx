const FeatureBanner = ({ features }: { features: string[] }) => {
	return (
		<div className="relative overflow-hidden w-full h-10">
			<div className="flex min-w-full whitespace-nowrap animate-marquee">
				{/* Two copies of the list for smooth looping */}
				{[...features, ...features].map((feature, index) => (
					<span key={index} className="mr-8 font-semibold">
						{feature}
					</span>
				))}
			</div>
		</div>
	);
};

export default FeatureBanner;
