import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const neulisAlt = localFont({
src: "./fonts/NeulisAlt-Regular.woff",
  variable: "--font-neulisAlt",
  weight: "100 900",
});

const neulisAltSemiBold = localFont({
  src: "./fonts/NeulisAlt-SemiBold.woff",
    variable: "--font-neulisAlt-semiBold",
    weight: "100 900",
  });

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
  src: "./fonts/Gotham-Rounded-Medium-Italic.otf",
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
        className={`${archivo.variable} ${neulisAlt.variable} ${neulisAltSemiBold.variable} ${archivoMedium.variable} ${gotham.variable} antialiased bg-primary`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
