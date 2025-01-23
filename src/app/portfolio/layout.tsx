import type { Metadata } from "next";
import "../globals.css";
import { ClientFooter } from "@/components/ClientFooter";
import { ClientHeader } from "@/components/ClientHeader";

export const metadata: Metadata = {
  title: {
    template: '%s | Youjine Portfolio',
    default: "Youjine Portfolio"
  },
  description: "Youjine Portfolio",
  applicationName: "Youjine Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="mx-auto width-full">
        <ClientHeader />
          {children}
        <ClientFooter />
      </div>
  );
}
