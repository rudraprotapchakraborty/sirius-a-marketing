"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/home/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { TopLoadingBar } from "./components/TopLoadingBar";
import { ThemeProvider } from "./components/theme-provider";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import ScrollToTopLayout from "./components/ScrollToTopLayout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBlur(Math.min(scrollY / 50, 10)); // Smooth blur up to 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden flex flex-col min-h-screen relative`}>
        {/* Background Video — Visible on all devices */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="fixed top-0 left-0 w-full h-full object-cover z-0 transition-all duration-300"
          style={{ filter: `blur(${blur}px)` }}
        >
          <source
            src="/cosmos.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Page Content */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col min-h-screen relative z-10">
            <GoogleAnalytics />
            <TopLoadingBar />
            <Header />
            <ScrollToTopLayout>
              <main className="flex-grow">{children}</main>
            </ScrollToTopLayout>
            <Footer />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
