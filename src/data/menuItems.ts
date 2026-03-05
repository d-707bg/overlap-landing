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
      { text: "Support", url: "/resources/support" },
    ],
  },
];
