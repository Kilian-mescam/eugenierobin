"use client"

import "../globals.css";
import { ClientFooter } from "@/components/ClientFooter";
import { ClientHeader } from "@/components/ClientHeader";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [scrolling, setScrolling] = useState(false);
  
    const handleScroll = () => {
        const projectsSection = document.getElementById("form");
        if (projectsSection) {
          setScrolling(true); // Set state to indicate scrolling is in progress
          projectsSection.scrollIntoView({
            behavior: "smooth",  // Smooth scroll
            block: "start",      // Align at the top of the section
          });
          // Optionally reset the state after the scroll
          setTimeout(() => setScrolling(false), 1000); // Assuming 1s duration for scroll
        }
      };
  return (
      <div className="mx-auto width-full">
        <ClientHeader />
          {children}
        <ClientFooter />
      </div>
  );
}
