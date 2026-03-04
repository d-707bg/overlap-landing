import React from 'react';

const CarBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Subtle grid pattern like track markings */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full bg-[linear-gradient(to_right,#2D6EB8_1px,transparent_1px),linear-gradient(to_bottom,#2D6EB8_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            {/* Racing line curves - positioned at bottom */}
            <svg
                className="absolute bottom-0 left-0 w-full h-full opacity-8"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMax slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="racingLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2D6EB8" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#2563D6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#2D6EB8" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                
                {/* Racing line curves - positioned at bottom */}
                <path
                    d="M -100 250 Q 400 150, 800 250 T 1700 250"
                    stroke="url(#racingLine)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="30 15"
                    className="racing-line-animate"
                />
                
                <path
                    d="M -100 450 Q 350 350, 750 450 T 1700 450"
                    stroke="url(#racingLine)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="25 12"
                    opacity="0.7"
                    className="racing-line-animate"
                    style={{ animationDelay: '2.5s' }}
                />

                <path
                    d="M -100 650 Q 450 550, 850 650 T 1700 650"
                    stroke="url(#racingLine)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="20 10"
                    opacity="0.5"
                    className="racing-line-animate"
                    style={{ animationDelay: '4s' }}
                />
            </svg>
            
            {/* Checkered flag pattern corners */}
            <div className="absolute top-0 left-0 w-32 h-32 checkered-flag-animate">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 8) % 2 === i % 8 % 2 ? 'bg-white' : 'bg-[#2D6EB8]'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 checkered-flag-animate" style={{ animationDelay: '1s' }}>
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 8) % 2 === i % 8 % 2 ? 'bg-white' : 'bg-[#2D6EB8]'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Speed blur effects */}
            <div className="absolute left-0 top-1/4 w-64 h-2 bg-gradient-to-r from-[#2D6EB8] to-transparent opacity-10 blur-xl speed-blur-animate" />
            <div className="absolute right-0 top-1/3 w-48 h-1 bg-gradient-to-l from-[#2563D6] to-transparent opacity-8 blur-lg speed-blur-animate" style={{ animationDelay: '1.5s' }} />
            <div className="absolute left-1/4 bottom-1/4 w-32 h-1 bg-gradient-to-r from-[#1E4A80] to-transparent opacity-6 blur-md speed-blur-animate" style={{ animationDelay: '0.5s' }} />
        </div>
    );
};

export default CarBackground;
