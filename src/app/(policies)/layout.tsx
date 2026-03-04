import React from "react";
import TableOfContents from "@/components/TableOfContents";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          {/* Main Content Area */}
          <main className="flex-1 w-full relative z-10 min-w-0">
            <div className="prose prose-lg dark:prose-invert text-black prose-headings:text-black prose-p:text-black prose-strong:text-black prose-ul:text-black prose-li:text-black prose-a:text-primary hover:prose-a:text-primary-accent max-w-none prose-h2:scroll-mt-24 prose-h3:scroll-mt-24">
              {children}
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="backdrop-blur-sm bg-background/50 border border-white/10 p-6 rounded-2xl shadow-xl">
                <TableOfContents />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
