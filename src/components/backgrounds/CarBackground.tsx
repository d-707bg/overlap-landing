import React from 'react';

const CarBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Asphalt texture gradient */}
                    <radialGradient id="asphaltGlow" cx="50%" cy="35%" r="60%">
                        <stop offset="0%" stopColor="#e8eef5" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>

                    {/* Road surface gradient for the main road */}
                    <linearGradient id="roadSurface" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d0d8e3" stopOpacity="0.12" />
                        <stop offset="40%" stopColor="#b8c5d6" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#c8d3e0" stopOpacity="0.08" />
                    </linearGradient>

                    {/* Lane marking gradient - center dashes */}
                    <linearGradient id="laneDash" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2D6EB8" stopOpacity="0" />
                        <stop offset="20%" stopColor="#2D6EB8" stopOpacity="0.25" />
                        <stop offset="80%" stopColor="#2D6EB8" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#2D6EB8" stopOpacity="0" />
                    </linearGradient>

                    {/* Road edge solid line gradient */}
                    <linearGradient id="roadEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2D6EB8" stopOpacity="0" />
                        <stop offset="15%" stopColor="#2D6EB8" stopOpacity="0.12" />
                        <stop offset="85%" stopColor="#2D6EB8" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#2D6EB8" stopOpacity="0" />
                    </linearGradient>

                    {/* Perspective road gradient (fading to horizon) */}
                    <linearGradient id="perspectiveFade" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="25%" stopColor="white" stopOpacity="0" />
                        <stop offset="85%" stopColor="white" stopOpacity="0" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.8" />
                    </linearGradient>

                    <mask id="roadFadeMask">
                        <rect x="0" y="0" width="1920" height="1080" fill="white" />
                        <rect x="0" y="0" width="1920" height="1080" fill="url(#perspectiveFade)" />
                    </mask>

                    {/* Speed particles */}
                    <linearGradient id="speedParticle" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2D6EB8" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#2D6EB8" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Soft ambient glow behind road area */}
                <rect x="0" y="0" width="1920" height="1080" fill="url(#asphaltGlow)" />

                {/* === MAIN ROAD (perspective, going from bottom to center-top) === */}
                <g mask="url(#roadFadeMask)">
                    {/* Road surface - wide trapezoid shape with perspective */}
                    <path
                        d="M 560 100, L 380 1080, L 1540 1080, L 1360 100 Z"
                        fill="url(#roadSurface)"
                    />

                    {/* Left road edge - solid white line */}
                    <line x1="560" y1="100" x2="380" y2="1080"
                        stroke="url(#roadEdge)" strokeWidth="3" />

                    {/* Right road edge - solid white line */}
                    <line x1="1360" y1="100" x2="1540" y2="1080"
                        stroke="url(#roadEdge)" strokeWidth="3" />

                    {/* Center dashed lane marking */}
                    <line x1="960" y1="100" x2="960" y2="1080"
                        stroke="url(#laneDash)" strokeWidth="3"
                        strokeDasharray="40 30"
                        className="road-dash-animate"
                    />

                    {/* Secondary lane markings (left lane) */}
                    <line x1="760" y1="100" x2="670" y2="1080"
                        stroke="url(#laneDash)" strokeWidth="2"
                        strokeDasharray="30 40"
                        opacity="0.5"
                        className="road-dash-animate"
                    />

                    {/* Secondary lane markings (right lane) */}
                    <line x1="1160" y1="100" x2="1250" y2="1080"
                        stroke="url(#laneDash)" strokeWidth="2"
                        strokeDasharray="30 40"
                        opacity="0.5"
                        className="road-dash-animate"
                    />
                </g>

                {/* === CURVED SIDE ROADS (left) === */}
                <path
                    d="M -50 350 Q 200 320, 420 400 Q 500 430, 520 500"
                    stroke="#2D6EB8"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="16 12"
                    opacity="0.1"
                    className="road-dash-animate-slow"
                />

                <path
                    d="M -50 380 Q 200 350, 420 430 Q 500 460, 520 530"
                    stroke="#2D6EB8"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.07"
                />

                {/* === CURVED SIDE ROADS (right) === */}
                <path
                    d="M 1970 300 Q 1720 280, 1500 360 Q 1420 390, 1400 460"
                    stroke="#2D6EB8"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="16 12"
                    opacity="0.1"
                    className="road-dash-animate-slow"
                />

                <path
                    d="M 1970 330 Q 1720 310, 1500 390 Q 1420 420, 1400 490"
                    stroke="#2D6EB8"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.07"
                />

                {/* === SPEED PARTICLES (small horizontal streaks) === */}
                <rect x="100" y="280" width="80" height="1.5" fill="url(#speedParticle)" opacity="0.6" rx="1" className="speed-streak-animate" />
                <rect x="1700" y="350" width="120" height="1.5" fill="url(#speedParticle)" opacity="0.5" rx="1" className="speed-streak-animate" style={{ animationDelay: '1.2s' }} />
                <rect x="200" y="520" width="60" height="1" fill="url(#speedParticle)" opacity="0.4" rx="1" className="speed-streak-animate" style={{ animationDelay: '2.4s' }} />
                <rect x="1600" y="600" width="100" height="1" fill="url(#speedParticle)" opacity="0.4" rx="1" className="speed-streak-animate" style={{ animationDelay: '0.8s' }} />
                <rect x="150" y="700" width="70" height="1" fill="url(#speedParticle)" opacity="0.3" rx="1" className="speed-streak-animate" style={{ animationDelay: '3s' }} />
                <rect x="1750" y="480" width="90" height="1" fill="url(#speedParticle)" opacity="0.35" rx="1" className="speed-streak-animate" style={{ animationDelay: '1.8s' }} />

                {/* === DISTANCE MARKERS (like a real road/GPS app) === */}
                {/* Small tick marks along the road edges */}
                {[200, 350, 500, 650, 800].map((y, i) => {
                    const progress = (y - 100) / 980;
                    const leftX = 560 + (380 - 560) * progress;
                    const rightX = 1360 + (1540 - 1360) * progress;
                    const opacity = 0.06 + progress * 0.06;
                    return (
                        <g key={i} opacity={opacity}>
                            {/* Left tick */}
                            <line x1={leftX - 15} y1={y} x2={leftX + 10} y2={y}
                                stroke="#2D6EB8" strokeWidth="1.5" />
                            {/* Right tick */}
                            <line x1={rightX - 10} y1={y} x2={rightX + 15} y2={y}
                                stroke="#2D6EB8" strokeWidth="1.5" />
                        </g>
                    );
                })}

                {/* Subtle circular "pin" markers like a GPS app */}
                <circle cx="960" cy="180" r="4" fill="none" stroke="#2D6EB8" strokeWidth="1" opacity="0.12" />
                <circle cx="960" cy="180" r="8" fill="none" stroke="#2D6EB8" strokeWidth="0.5" opacity="0.06" />
            </svg>

            {/* Soft gradient overlays for depth */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/60 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
        </div>
    );
};

export default CarBackground;
