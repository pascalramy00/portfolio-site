'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return <div></div>;

	let switchSrc = '/images/artwork_light_switch_on.png';
	const lightbulbSrc = '/images/artwork_lightbulb_off.png';

	if (theme === 'dark') {
		switchSrc = '/images/artwork_light_switch_off.png';
	}

	return (
		<div
			className='relative lg:fixed flex items-end top-0 right-0 
		w-[100px] h-[150px] 
		md:w-[140px] md:h-[210px]
		smallDesktop:w-[150px] smallDesktop:h-[225px]
		lg:w-[200px] lg:h-[300px]'
		>
			<button
				onClick={() =>
					setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
				}
				className='absolute left-[28%] bottom-[-6px] md:left-[34%] md:bottom-2 smallDesktop:left-[36%] smallDesktop:bottom-3 lg:left-[40%] lg:bottom-8 2xl:left-[40%] 2xl:bottom-8 z-10 '
			>
				<Image
					src={switchSrc}
					alt='light switch'
					width={40}
					height={48}
					className=''
					priority
				/>
			</button>

			<div className='animate-sway transform origin-top h-full w-full'>
				<Image
					src={lightbulbSrc}
					alt='lightbulb'
					fill
					sizes='(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px'
					className='object-contain'
					priority
				/>

				<svg
					width='100%'
					height='100%'
					viewBox='0 0 200 200'
					className={`${
						theme === 'dark' ? 'block' : 'hidden'
					} absolute bottom-0 z-[-10]`}
				>
					<defs>
						<radialGradient
							id='light-glow'
							cx='50%'
							cy='50%'
							r='50%'
						>
							<stop offset='0%' stopColor='#FFFFF2' opacity='1' />
							<stop
								offset='15%'
								stopColor='#FDF0ac'
								opacity='0.7'
							/>
							<stop
								offset='100%'
								stopColor='transparent'
								opacity='0'
							/>
						</radialGradient>
					</defs>
					<circle cx='100' cy='145' r='80' fill='url(#light-glow)' />
				</svg>
			</div>
		</div>
	);
};
export default ThemeSwitch;
