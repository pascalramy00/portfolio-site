const LampLight = ({ isOn, theme }: { isOn: boolean; theme: string }) => {
	return (
		<div className={`${isOn && theme === 'dark' ? 'block' : 'hidden'}`}>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 100 60'
				className={`absolute z-10 pointer-events-none`}
			>
				<polygon
					points='79.5,13.5 81,12.5 85,12 87,10 88,11 86.5,14 87.5,17 86,18.5 85,18 84,17.5, 83,17'
					fill='#0a0a0a'
				/>
			</svg>

			<svg
				width='100%'
				height='100%'
				viewBox='0 0 100 60'
				className={`${
					isOn ? 'block' : 'hidden'
				} absolute z-0 pointer-events-none`}
			>
				<defs>
					<filter
						id='blurFilter'
						x='-50%'
						y='-50%'
						width='200%'
						height='300%'
					>
						<feGaussianBlur in='SourceGraphic' stdDeviation='2.5' />
					</filter>
					<linearGradient
						id='lighting-gradient'
						x1='100%'
						y1='0%'
						x2='20%'
						y2='100%'
					>
						<stop offset='0%' stopColor='#fdcd19' />
						<stop offset='50%' stopColor='#fdcd19' />
						<stop offset='100%' stopColor='transparent' />
					</linearGradient>

					<linearGradient
						id='white-overlay-gradient'
						x1='90%'
						y1='0%'
						x2='20%'
						y2='100%'
					>
						<stop offset='0%' stopColor='white' />
						<stop offset='100%' stopColor='transparent' />
					</linearGradient>
				</defs>

				<g filter='url(#blurFilter)'>
					<polygon
						points='44,26 76,12 90,22 80,40 70,42 45,40'
						fill='url(#lighting-gradient)'
						className='opacity-90 z-0'
					/>
				</g>

				<g filter='url(#blurFilter)'>
					<polygon
						points='60,30 80,15 85,18 70,34'
						fill='#ffe58a'
						className='opacity-70 z-0'
					/>
				</g>
				<g filter='url(#blurFilter)'>
					<polygon
						points='70,24 81,15.5 84,18 74,28'
						fill='white'
						className='opacity-100 z-0'
					/>
				</g>
			</svg>
		</div>
	);
};
export default LampLight;
