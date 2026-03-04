import React from 'react';

const SectionCarBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Corner checkered accents */}
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-3 checkered-flag-animate">
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${Math.floor(i / 6) % 2 === i % 6 % 2 ? 'bg-white' : 'bg-[#2D6EB8]'}`}
                        />
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-3 checkered-flag-animate" style={{ animationDelay: '2s' }}>
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
            <div className="absolute top-1/3 right-0 w-32 h-1 bg-gradient-to-l from-[#2563D6] to-transparent opacity-6 blur-lg speed-blur-animate" />
            <div className="absolute bottom-1/3 left-0 w-40 h-1 bg-gradient-to-r from-[#1E4A80] to-transparent opacity-5 blur-md speed-blur-animate" style={{ animationDelay: '1s' }} />
        </div>
    );
};

export default SectionCarBackground;
