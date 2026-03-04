import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `How accurate is ${siteDetails.siteName}'s timing?`,
        answer: 'Overlap provides millisecond precision timing accuracy. When used with our dedicated device, accuracy is within ±0.001 seconds. With smartphones, accuracy is typically within ±0.01 seconds depending on GPS conditions.',
    },
    {
        question: `Do I need the dedicated device to use ${siteDetails.siteName}?`,
        answer: 'Not at all! Overlap works perfectly with just your smartphone. The dedicated device (coming soon) will offer enhanced accuracy and additional features, but the core functionality is available to all users immediately.',
    },
    {
        question: 'What types of vehicles can I track with Overlap?',
        answer: `${siteDetails.siteName} works with any vehicle - cars, motorcycles, go-karts, bicycles, and more. As long as you can carry your smartphone or mount our device, you can track your performance.`
    },
    {
        question: 'Can I create custom track sections?',
        answer: 'Yes! Overlap allows you to define unlimited custom sections on any track or route. Split corners, straights, or create complex multi-section analysis zones to focus on specific areas of improvement.',
    },
    {
        question: 'Does Overlap work without internet connection?',
        answer: 'Yes! Overlap can record data offline and sync when you regain connection. All timing and tracking features work perfectly without internet, ensuring you never miss a session regardless of track location.'
    }
];