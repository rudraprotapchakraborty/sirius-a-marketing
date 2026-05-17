"use client";

import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { MobileNav } from "./MobileNav";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Sirius A Visual", href: "/sirius-a-visual" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-[9999] w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline/40 bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 16 }}
            className="relative h-9 w-9"
          >
            <div className="absolute inset-0 rounded-full bg-cobalt/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Image src="/logo.png" alt="Sirius A" fill className="relative object-contain" priority />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight text-foreground">Sirius A</span>
            <span className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-text-dim">
              Marketing
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map(({ name, href }) => {
            const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <Link
                key={name}
                href={href}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  active ? "text-foreground" : "text-text-dim hover:text-foreground"
                }`}
              >
                {name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-cobalt-glow to-ice transition-all duration-500 ease-out-expo ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Link href="/contact" className="btn-stellar group text-sm">
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
          </Link>
        </div>

        <div className="md:hidden">
          <MobileNav items={navItems} />
        </div>
      </div>
    </motion.header>
  );
}
