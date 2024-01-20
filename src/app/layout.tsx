import "./globals.css";
import type { Metadata } from "next";
import { Gudea, Passion_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const passionOne = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-passion",
});

const gudea = Gudea({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gudea",
});

export const metadata: Metadata = {
  title: "лёня рофлс сайт",
  icons: "./icon.png",
  applicationName: "лёня рофлс сайт",
  description:
    "leotred is cool 3d modeler with very heavy and big dick",
  twitter: {
    card: "summary_large_image",
    title: "лёня рофлс сайт",
    description:
      "leotred is cool 3d modeler with very heavy and big dick",
    images: "./matin-hd.pngs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${passionOne.variable} ${gudea.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
