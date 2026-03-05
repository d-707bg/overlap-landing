import React from 'react';
import Image from 'next/image';

import CarBackground from './backgrounds/CarBackground';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <CarBackground />

            <div className="absolute left-0 right-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-[#FCFDFF] z-20 pointer-events-none"> </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    {/* <AppStoreButton dark /> */}
                    {/* <PlayStoreButton dark /> */}
                    <a
                        href="https://discord.com/invite/d8fsfjCu" target="_blank"
                        className="flex items-center justify-center min-w-[205px] px-6 h-14 rounded-full bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-colors duration-200 w-full sm:w-fit z-20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-discord mr-4" viewBox="0 0 16 16">
                            <path
                                d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                        </svg>
                        Join our Discord
                    </a>
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-2 md:mt-16 mx-auto z-10'
                />
            </div>
        </section>
    );
};

export default Hero;
