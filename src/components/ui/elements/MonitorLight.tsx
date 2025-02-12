export const MonitorLight = ({
	isOn,
	theme,
}: {
	isOn: boolean;
	theme: string;
}) => {
	return (
		<div className={`${theme === 'dark' ? 'block' : 'hidden'}`}>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 100 60'
				className={`absolute z-10 pointer-events-none`}
				transform='rotate()'
			>
				<polygon points='30,17 40,15.5 41,34.5 30,33' fill='#0a0a0a' />
			</svg>

			<svg
				width='100%'
				height='100%'
				viewBox='0 0 100 60'
				className={`${
					isOn ? 'block' : 'hidden'
				} absolute z-0 pointer-events-none`}
			>
				{/* <g>
					<polygon
						points='34,18 41,16 42,34 31,32'
						fill='#0a0a0a'
						className='z-10'
						fillOpacity='1'
					/>
				</g> */}
				<defs>
					<filter
						id='monitorIntenseFilter'
						x='-50%'
						y='-50%'
						width='220%'
						height='220%'
					>
						<feGaussianBlur in='SourceGraphic' stdDeviation='2.5' />
					</filter>

					<linearGradient
						id='lighting-gradient-monitor'
						x1='0%'
						y1='50%'
						x2='100%'
						y2='50%'
					>
						<stop offset='0%' stopColor='#ABEAEC' opacity='1' />
						<stop offset='70%' stopColor='#ABEAEC' opacity='1' />
						<stop
							offset='100%'
							stopColor='transparent'
							opacity='1'
						/>
						<stop
							offset='100%'
							stopColor='transparent'
							opacity='0'
						/>
					</linearGradient>

					<linearGradient
						id='white-gradient-monitor'
						x1='0%'
						y1='50%'
						x2='100%'
						y2='50%'
					>
						<stop offset='0%' stopColor='white' />
						<stop offset='10%' stopColor='transparent' />

						<stop offset='100%' stopColor='transparent' />
					</linearGradient>
				</defs>

				<g filter='url(#monitorIntenseFilter)'>
					{/* <g> */}
					<polygon
						points='40,17 68,8 72,20 72,35 68,42 55,41 41.5,33'
						fill='url(#lighting-gradient-monitor)'
						className='opacity-90 z-0'
					/>
				</g>
				<g filter='url(#monitorIntenseFilter)'>
					<polygon
						points='40,18 45,18 45,32 40,32'
						fill='white'
						className='z-0'
					/>
				</g>
			</svg>
		</div>
	);
};
