import React from 'react';

const TestimonialCarBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Racing line accents - these are the dotted lines you like */}
            <svg
                className="absolute inset-0 w-full h-full opacity-6"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="testimonialRacingLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2D6EB8" stopOpacity="0" />
                        <stop offset="30%" stopColor="#2563D6" stopOpacity="0.4" />
                        <stop offset="70%" stopColor="#2563D6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2D6EB8" stopOpacity="0" />
                    </linearGradient>
                </defs>
                
                <path
                    d="M 0 100 Q 400 50, 800 100 T 1600 100"
                    stroke="url(#testimonialRacingLine)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10 5"
                    className="racing-line-animate"
                />
                
                <path
                    d="M 0 400 Q 400 350, 800 400 T 1600 400"
                    stroke="url(#testimonialRacingLine)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="8 4"
                    className="racing-line-animate"
                    style={{ animationDelay: '3s' }}
                />
            </svg>
            
            {/* Corner checkered accents */}
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-[0.03]">
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 6) % 2 === i % 6 % 2 ? 'bg-white' : 'bg-[#2D6EB8]'}`}
                        />
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.03]">
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 6) % 2 === i % 6 % 2 ? 'bg-white' : 'bg-[#2D6EB8]'}`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Speed line effects */}
            <div className="absolute top-1/3 right-0 w-32 h-1 bg-gradient-to-l from-[#2563D6] to-transparent opacity-[0.06] blur-lg" />
            <div className="absolute bottom-1/3 left-0 w-40 h-1 bg-gradient-to-r from-[#1E4A80] to-transparent opacity-[0.05] blur-md" />
        </div>
    );
};

export default TestimonialCarBackground;
