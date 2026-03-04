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
      { text: "Our Story", url: "/about#story" },
      { text: "Team", url: "/about#team" },
      { text: "Mission", url: "/about#mission" },
      { text: "Technology", url: "/about#about-overlap" },
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
