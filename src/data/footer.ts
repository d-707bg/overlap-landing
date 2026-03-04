import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Precision time tracking for racing enthusiasts and professional drivers worldwide.",
  quickLinks: [
    {
      text: "Terms of Use",
      url: "/terms-of-use",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy",
    },
  ],
  email: "support@overlap.app",
  telephone: "+1 (555) 123-4567",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    twitter: "https://twitter.com/overlapapp",
    facebook: "https://facebook.com/overlapapp",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com/company/overlapapp",
    // threads: 'https://www.threads.net',
    instagram: "https://www.instagram.com/overlapapp",
  },
};
