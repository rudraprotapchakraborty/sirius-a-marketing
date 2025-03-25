"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { TopLoadingBar } from "./components/TopLoadingBar";
import { ThemeProvider } from "./components/theme-provider";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import ScrollToTopLayout from "./components/ScrollToTopLayout";
import "@/styles/globals.css";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBlur(Math.min(scrollY / 50, 10)); // Adjust scroll sensitivity and max blur
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden flex flex-col min-h-screen relative`} style={{ cursor: "none" }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-0 transition-all duration-300"
          style={{ filter: `blur(${blur}px)` }}
        >
          <source src="https://media-hosting.imagekit.io//b9316ab06c7543a3/CosmosR4.mp4?Expires=1837116088&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hyYm1G0Ia-bl9H4zBf60O51IhphrGOrw9Xb~6ttKOo-o07DIWKzKltvFMQQL8XI~0PdPLxDdhBI8rurkLtVsUEm1ZLhguQ1Uw4uJxeZRsxn8wPrMCKAkMTSD8BQQtT1bRrcl2eeR0s6WY55zj6X0c08GTNnudk-lY1VdDLVZm-QnCX11KOp4T-c6Y5CyxIph-qL3PhkT081jxvXmYL4VmXrBLMlyB39BqoMjpO15~yFjIACkheh~LiLqg4ZblaPqXSEHZhddOy2MGpjF9uT8~IHz4c6El-WT-UIBIVQCRhWRPTyn2WGq~iVVzRN-wg5Hc7tYlWBHNr2-dHPk61sVMg__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Wrapper */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-col min-h-screen relative z-10">
            <CustomCursor></CustomCursor>
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
