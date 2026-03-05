import { FiBarChart2, FiTarget, FiTrendingUp, FiSmartphone, FiActivity, FiClock, FiMapPin, FiZap, FiShield } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Precision Timing",
        description: "Capture your speed and time through any section with millisecond accuracy. Perfect for racing enthusiasts who demand precision.",
        bullets: [
            {
                title: "Millisecond Accuracy",
                description: "Track your performance with precision timing down to the millisecond.",
                icon: <FiClock size={26} />
            },
            {
                title: "Section Splitting",
                description: "Divide any track or route into custom sections for detailed analysis.",
                icon: <FiMapPin size={26} />
            },
            {
                title: "Speed Tracking",
                description: "Monitor your velocity through every corner and straightaway.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.png"
    },
    {
        title: "Performance Analytics",
        description: "Analyze your runs with comprehensive data visualization. Compare laps, identify improvements, and track your progress over time.",
        bullets: [
            {
                title: "Detailed Metrics",
                description: "Access comprehensive performance data with intuitive charts and graphs.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Lap Comparison",
                description: "Compare different runs to find your optimal racing line and speed.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Progress Tracking",
                description: "Monitor your improvement over time with historical data analysis.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.png"
    },
]