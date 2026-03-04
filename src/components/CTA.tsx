import { ctaDetails } from "@/data/cta"

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"
import CTACarBackground from "./CTACarBackground"

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
                                <div className="transform hover:scale-105 transition-transform duration-200">
                                    <AppStoreButton />
                                </div>
                                <div className="transform hover:scale-105 transition-transform duration-200">
                                    <PlayStoreButton />
                                </div>
                            </div>
                            
                            {/* Decorative racing line below buttons */}
                            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-8 speed-blur-animate" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA