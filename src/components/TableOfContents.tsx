"use client";

import React, { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 1. Find all h2, h3 inside the prose container
    const elements = Array.from(
      document.querySelectorAll(".prose h2, .prose h3"),
    ) as HTMLHeadingElement[];

    // 2. Add id to elements if they don't have one
    const newHeadings = elements.map((element) => {
      if (!element.id) {
        element.id = element.innerText
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }
      return {
        id: element.id,
        text: element.innerText,
        level: parseInt(element.tagName.charAt(1)),
      };
    });

    setHeadings(newHeadings);

    // 3. Setup IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px", // Trigger when heading is near the top
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky headers if needed, adjust 100 as per your design
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto w-64 text-sm hidden lg:block">
      <h4 className="font-semibold text-black mb-4 uppercase tracking-wider text-xs">
        On this page
      </h4>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block hover:text-primary transition-colors duration-200 ${
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-gray-800"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
