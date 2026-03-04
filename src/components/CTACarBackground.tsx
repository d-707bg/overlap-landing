import React from 'react';

const CTACarBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Racing track grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            
            {/* Dynamic racing lines */}
            <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="ctaRacingLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                
                <path
                    d="M -100 200 Q 300 100, 600 200 T 1200 150 Q 1500 100, 1800 200"
                    stroke="url(#ctaRacingLine)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="25 15"
                    className="racing-line-animate"
                />
                
                <path
                    d="M -100 400 Q 400 300, 700 400 T 1300 350 Q 1600 300, 1900 400"
                    stroke="url(#ctaRacingLine)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="20 10"
                    className="racing-line-animate"
                    style={{ animationDelay: '2s' }}
                />
            </svg>
            
            {/* Checkered flag patterns */}
            <div className="absolute top-0 left-0 w-40 h-40 opacity-15 checkered-flag-animate">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 8) % 2 === i % 8 % 2 ? 'bg-white' : 'bg-transparent'}`}
                        />
                    ))}
                </div>
            </div>
            
            <div className="absolute top-0 right-0 w-40 h-40 opacity-15 checkered-flag-animate" style={{ animationDelay: '1s' }}>
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 8) % 2 === i % 8 % 2 ? 'bg-white' : 'bg-transparent'}`}
                        />
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 checkered-flag-animate" style={{ animationDelay: '2.5s' }}>
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 6) % 2 === i % 6 % 2 ? 'bg-white' : 'bg-transparent'}`}
                        />
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 checkered-flag-animate" style={{ animationDelay: '3.5s' }}>
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 6) % 2 === i % 6 % 2 ? 'bg-white' : 'bg-transparent'}`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Speed blur effects */}
            <div className="absolute left-0 top-1/4 w-48 h-2 bg-gradient-to-r from-white to-transparent opacity-20 blur-xl speed-blur-animate" />
            <div className="absolute right-0 top-1/3 w-64 h-1 bg-gradient-to-l from-white to-transparent opacity-15 blur-lg speed-blur-animate" style={{ animationDelay: '1s' }} />
            <div className="absolute left-1/3 bottom-1/4 w-40 h-1 bg-gradient-to-r from-white to-transparent opacity-10 blur-md speed-blur-animate" style={{ animationDelay: '2s' }} />
        </div>
    );
};

export default CTACarBackground;
