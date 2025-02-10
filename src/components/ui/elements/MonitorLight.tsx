export const MonitorLight = ({
	isOn,
	theme,
}: {
	isOn: boolean;
	theme: string;
}) => {
	return (
		<svg
			width='100%'
			height='100%'
			viewBox='0 0 100 60'
			className={`${
				isOn && theme === 'dark' ? 'block' : 'hidden'
			} absolute z-1`}
		>
			<defs>
				<filter
					id='monitorIntenseFilter'
					x='-50%'
					y='-50%'
					width='220%'
					height='220%'
				>
					<feGaussianBlur in='SourceGraphic' stdDeviation='2' />
				</filter>
				<linearGradient
					id='lighting-gradient-monitor'
					x1='0%'
					y1='50%'
					x2='100%'
					y2='50%'
				>
					<stop offset='0%' stopColor='#ABEAEC' opacity='1' />
					<stop offset='80%' stopColor='#ABEAEC' opacity='0.7' />
					<stop offset='100%' stopColor='transparent' opacity='0' />
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

			<g filter='url(#blurFilter)'>
				<polygon
					points='40,15 68,8 68,42 50,41 41.5,35'
					fill='url(#lighting-gradient-monitor)'
					className='opacity-90'
				/>
			</g>

			<g filter='url(#blurFilter)'>
				<polygon
					points='40,15 40,12 36,41 41.5,34'
					fill='url(#white-gradient-monitor)'
				/>
			</g>
			<g>
				<polygon
					filter='url(#monitorIntenseFilter)'
					points='40,25 43,13 45,36 41.5,30'
					fill='white'
				/>
			</g>
		</svg>
	);
};
