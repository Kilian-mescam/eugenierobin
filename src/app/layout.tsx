import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { neulisAlt } from "./neulisAltFont";

const archivo = localFont({
  src: "./fonts/Archivo-Regular.ttf",
  variable: "--font-archivo",
  weight: "500 900",
});

const archivoMedium = localFont({
  src: "./fonts/Archivo-Medium.ttf",
  variable: "--font-archivo-medium",
  weight: "500 900",
});

const gotham = localFont({
  src: "./fonts/Gotham-Rounded-Bold-Italic.otf",
  variable: "--font-gotham",
  weight: "500 900",
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
        className={`${archivo.variable} ${neulisAlt.variable} ${archivoMedium.variable} ${gotham.variable} antialiased bg-primary`}
      >
        <div className="mx-auto width-full">
            {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
