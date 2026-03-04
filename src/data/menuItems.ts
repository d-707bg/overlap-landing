import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Features",
    url: "/features",
    hasDropdown: true,
    dropdownItems: [
      { text: "Time Tracking", url: "/features/time-tracking" },
      { text: "Analytics", url: "/features/analytics" },
      { text: "Telemetry", url: "/features/telemetry" },
      { text: "Multi-Device", url: "/features/multi-device" },
    ],
  },
  {
    text: "About",
    url: "/about",
    hasDropdown: true,
    dropdownItems: [
      { text: "About Us", url: "/about" },
      { text: "Technology", url: "/about/technology" },
    ],
  },
  {
    text: "Resources",
    url: "/resources",
    hasDropdown: true,
    dropdownItems: [
      { text: "Stories", url: "/stories" },
      { text: "Blog", url: "/resources/blog" },
      { text: "Tutorials", url: "/resources/tutorials" },
      { text: "Support", url: "/resources/support" },
    ],
  },
];
