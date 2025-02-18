"use client"

import "../globals.css";
import { ClientFooter } from "@/components/ClientFooter";
import { ClientHeader } from "@/components/ClientHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <ClientHeader />
          {children}
        <ClientFooter />
      </div>
  );
}
