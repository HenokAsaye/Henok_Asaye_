import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "../components/logo-component";
import { TooltipProvider } from "@/components/ui/tooltip";
import FollowingCursor from "@/components/following-cursor";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const AzeretMono = localFont(
  {
    src: [
      {
        path: "./fonts/azeret_mono/AzeretMono-Regular.ttf",
        weight: "400"
      },
      {
        path: "./fonts/azeret_mono/AzeretMono-Bold.ttf",
        weight: "700"
      }
    ],
    variable: "--font-azeret-mono",
  }
)

export const metadata: Metadata = {
  title: "Henok Asaye Portfolio",
  generator: "Henok Asaye",
  description: "Henok Asaye's Portfolio Website",
  metadataBase: new URL('https://henokasaye.vercel.app/'),
  keywords: [
    "Software Engineer", "fullstack developer", "web developer", "programmer", "problem solver",
    "nathnael dereje", "freelancer"
  ],
  authors: [
    {
      name: "Henok Asaye",
      url: "https://henokasaye.vercel.app/"
    }
  ],
  creator: "Henok Asaye",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Henok Asaye",
    description: "Henok Asaye, Software Engineer",
    siteName: "Henok Asaye Portfolio",
    images: [
      {
        url: "/logo.png",
        alt: "Henok Asaye",
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://henok-asaye.vercel.app/",
  },
  robots: {
    index: true,
    follow: true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${AzeretMono.variable}
        font-azeretMono
        antialiased`}
      >

        {/* cursor animation */}
        <FollowingCursor />

        {/* analytics collector for vercel */}
        <Analytics />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={50} >
            <Logo />
            <ModeToggle />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
