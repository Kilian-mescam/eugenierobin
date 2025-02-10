import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: [
    {
      path: './fonts/clashDisplay/ClashDisplay-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/clashDisplay/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/clashDisplay/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/clashDisplay/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/clashDisplay/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/clashDisplay/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/clashDisplay/ClashDisplay-Variable.ttf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display', // Optional: Use this variable to control the font in CSS
});
