"use client";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/home/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { TopLoadingBar } from "./components/TopLoadingBar";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import ScrollToTopLayout from "./components/ScrollToTopLayout";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <html lang="en" className="dark">
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-ink text-foreground antialiased">
        {/* ── Stellar backdrop ── */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {/* base */}
          <div className="absolute inset-0 bg-ink" />
          {/* nebula glows */}
          <div className="absolute inset-0 bg-nebula opacity-90" />
          {/* parallax starfield */}
          <div
            className="starfield animate-twinkle"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          />
          {/* deep gradient at base for content legibility */}
          <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-ink via-ink/60 to-transparent" />
          {/* soft noise */}
          <div className="absolute inset-0 bg-stellar-noise opacity-50" />
          {/* vignette */}
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,hsl(var(--ink))_120%)]" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <GoogleAnalytics />
          <TopLoadingBar />
          <Header />
          <ScrollToTopLayout>
            <main className="flex-grow">{children}</main>
          </ScrollToTopLayout>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
