import { ctaDetails } from "@/data/cta"

import CTACarBackground from "./backgrounds/CTACarBackground"
import React from "react";

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#2D6EB8] via-[#2563D6] to-[#1E4A80]">
                        <CTACarBackground />
                        
                        {/* Additional gradient overlay for depth */}
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-[#1E4A80]/50 via-transparent to-[#2563D6]/30"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5 relative z-20">
                        <div className="max-w-4xl mx-auto">
                            {/* Decorative racing line above title */}
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6 speed-blur-animate"></div>
                            
                            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl mx-auto">
                                {ctaDetails.heading}
                            </h2>

                            <p className="mx-auto max-w-xl md:px-5 mb-6 text-white/90">
                                {ctaDetails.subheading}
                            </p>

                            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center sm:gap-4">
                                {/* <div className="transform hover:scale-105 transition-transform duration-200">
                                    <AppStoreButton />
                                </div> */}
                                {/* <div className="transform hover:scale-105 transition-transform duration-200">
                                    <PlayStoreButton />
                                </div> */}
                                <div className="transform hover:scale-105 transition-transform duration-200">
                                    <a
                                        href="https://discord.com/invite/d8fsfjCu" target="_blank"
                                        className="flex items-center justify-center min-w-[205px] px-6 h-14 rounded-full bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-colors duration-200 w-full sm:w-fit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                             className="bi bi-discord mr-4" viewBox="0 0 16 16">
                                            <path
                                                d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                        </svg>
                                        Join our Discord
                                    </a>
                                </div>
                            </div>

                            {/* Decorative racing line below buttons */}
                            <div
                                className="w-32 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-8 speed-blur-animate"
                                style={{animationDelay: '1s'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA