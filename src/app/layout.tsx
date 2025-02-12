import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { clashDisplay } from "./fonts/clashDisplayFont";
import { archivo } from "./fonts/archivoFont";

const gotham = localFont({
  src: "./fonts/Gotham-Rounded-Bold-Italic.otf",
  variable: "--font-gotham",
  weight: "500 900",
});

const neulis = localFont({
  src: "./fonts/neulisAlt/NeulisAlt-SemiBolditalic.ttf",
  variable: "--font-neulis",
  weight: "400 900",
});


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
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={`${neulis.variable} ${clashDisplay.variable} ${archivo.variable} ${gotham.variable} antialiased bg-primary`}
      >
        <div className="mx-auto width-full">
            {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
