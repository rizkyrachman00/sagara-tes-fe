import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
// import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// const dmSans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Study Case FE MSIB - Sagara Tech",
  description: "For test purposing only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      {/* <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}> */}
      <body className={twMerge(inter.className, "antialiased bg-[#ffffff]")}>
        {children}
      </body>
    </html>
  );
}
