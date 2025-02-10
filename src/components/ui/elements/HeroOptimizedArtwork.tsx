'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Tooltip from './Tooltip';
import LampLight from './LampLight';
import { MonitorLight } from './MonitorLight';

const HeroOptimizedArtwork = () => {
	const { theme } = useTheme();
	const [lamp, setLamp] = useState(true);
	const [monitor, setMonitor] = useState(true);
	const [mounted, setMounted] = useState(false);

	const currentTheme = theme || 'light';

	useEffect(() => setMounted(true), []);

	if (!mounted) return <div></div>;

	return (
		<div className='relative z-30'>
			<div className='relative w-[360px] h-[212px] md:w-[500px] md:h-[295px] lg:w-[700px] lg:h-[413px] 2xl:w-[900px] 2xl:h-[531px]'>
				<LampLight isOn={lamp} theme={currentTheme} />
				<MonitorLight isOn={monitor} theme={currentTheme} />
				<Image
					src='/images/artwork_light.png'
					alt='artwork of myself'
					fill
					sizes='(max-width: 768px) 100vw, 50vw'
					className='relative object-contain'
					priority
				/>
			</div>
			<div className='group'>
				<button
					onClick={() => setLamp((prev) => !prev)}
					className=' absolute top-[16%] right-[12%] p-4 md:p-6 rounded-full lg:top-[16%] lg:right-[12%] lg:p-8 z-20 2xl:p-10'
					aria-label='Toggle Lamp Light'
				></button>
				<Tooltip className='hidden dark:md:block opacity-0 group-hover:opacity-100 absolute top-[12%] right-[12%]'>
					Click me
				</Tooltip>
			</div>

			<div className='group'>
				<button
					onClick={() => setMonitor((prev) => !prev)}
					className='absolute px-12 py-8 left-[14%] top-[26%] md:px-16 md:py-11 md:left-[16%] lg:top-[26%] lg:left-[16%] lg:px-24 lg:py-16 2xl:py-20 2xl:px-28 2xl:left-[17%] z-20'
					aria-label='Toggle Monitor Light'
				></button>
				<Tooltip className='hidden dark:md:block opacity-0 group-hover:opacity-100 absolute top-[28%] left-[18%]'>
					Click me
				</Tooltip>
			</div>
			<p className='absolute bottom-1 md:bottom-2 lg:bottom-4 text-sm lg:text-base right-2 2xl:text-xl z-30'>
				Me, by{' '}
				<Link
					href='https://www.instagram.com/dr.peabrain/'
					target='_blank'
				>
					dr.peabrain
				</Link>
			</p>
		</div>
	);
};
export default HeroOptimizedArtwork;
