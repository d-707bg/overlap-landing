import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Marcus Chen',
        role: 'Professional Racing Driver',
        message: `Overlap has revolutionized my training regimen. The millisecond precision helps me identify exactly where I'm losing time and how to optimize my racing line. Essential for any serious driver.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Sarah Martinez',
        role: 'Track Day Enthusiast',
        message: `I use ${siteDetails.siteName} with just my smartphone and the accuracy is incredible. Being able to compare my lap times and see detailed speed analysis has taken my track days to the next level.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Alex Thompson',
        role: 'Motorsport Coach',
        message: `${siteDetails.siteName} is a game-changer for driver development. The section-by-section analysis and performance metrics help my students understand their driving patterns and improve faster than ever before.`,
        avatar: '/images/testimonial-3.webp',
    },
];