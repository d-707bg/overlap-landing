import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "0.001s",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Millisecond precision timing accuracy with our dedicated tracking device."
    },
    {
        title: "4.9",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating from racing enthusiasts and professional drivers worldwide."
    },
    {
        title: "50+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Tracks and racing circuits supported globally for time attack sessions."
    }
];