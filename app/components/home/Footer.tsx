"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import SubscriptionForm from "../SubscriptionForm";

const socialLinks = [
  { name: "facebook", url: "https://www.facebook.com/share/1CG8CPCm9s/", icon: <FaFacebookF /> },
  { name: "linkedin", url: "https://linkedin.com", icon: <FaLinkedinIn /> },
  { name: "instagram", url: "https://www.instagram.com/sirius_a_marketing", icon: <FaInstagram /> },
  { name: "x", url: "https://twitter.com", icon: <FaXTwitter /> },
];

const StickyIcons = () => (
  <motion.div
    className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
    initial={{ x: 60, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 90, delay: 0.8 }}
  >
    {socialLinks.map((s) => (
      <motion.a
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline/60 bg-surface/70 text-text-dim backdrop-blur-md transition-colors duration-500 hover:border-cobalt-glow/60 hover:text-foreground"
        aria-label={s.name}
      >
        {s.icon}
      </motion.a>
    ))}
  </motion.div>
);

export function Footer() {
  return (
    <footer className="relative z-20 mt-24 border-t border-hairline/40 bg-ink/90 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt-glow/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid gap-16 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image src="/logo.png" alt="Sirius A" width={44} height={44} />
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl tracking-tight">Sirius A</span>
                <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-text-dim">
                  Marketing
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm font-display text-2xl leading-[1.25] text-foreground/85">
              The brightest signal in your category — engineered, not improvised.
            </p>
            <div className="mt-8 max-w-sm">
              <SubscriptionForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-2">
            {[
              { title: "Explore", links: [
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Reviews", href: "/reviews" },
                { label: "Careers", href: "/careers" },
              ]},
              { title: "Company", links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
                { label: "Sirius A Visual", href: "/sirius-a-visual" },
              ]},
            ].map((section) => (
              <div key={section.title}>
                <h4 className="eyebrow mb-5">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-2 text-text-dim transition-colors duration-300 hover:text-foreground"
                      >
                        <span>{label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5">Reach us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">UK</span>
                <a
                  href="mailto:contact@siriusamarketing.com"
                  className="mt-1 block text-text-dim transition-colors hover:text-foreground"
                >
                  contact@siriusamarketing.com
                </a>
              </div>
              <div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">BD</span>
                <a
                  href="mailto:contact@siriusamarketing.com"
                  className="mt-1 block text-text-dim transition-colors hover:text-foreground"
                >
                  contact@siriusamarketing.com
                </a>
              </div>
              <Link href="/careers">
                <Button
                  variant="outline"
                  className="mt-5 rounded-full border-hairline bg-transparent text-text-dim hover:border-cobalt-glow/60 hover:bg-surface-2/60 hover:text-foreground"
                >
                  We're Hiring
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* mobile social */}
        <div className="mt-14 flex justify-center gap-3 md:hidden">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline/60 bg-surface/70 text-text-dim transition-colors hover:border-cobalt-glow/60 hover:text-foreground"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline/40 pt-6 text-center text-sm text-text-dim md:flex-row md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} · Sirius A Marketing · All rights reserved
          </p>
          <div className="flex gap-6 font-mono text-[0.7rem] uppercase tracking-[0.18em]">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </motion.div>
      </div>

      <StickyIcons />

      {/* WhatsApp */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 110 }}
      >
        <Link href="https://wa.me/447362622636" target="_blank">
          <button className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cobalt-glow to-cobalt text-white shadow-[0_8px_32px_-6px_hsl(var(--cobalt)/0.7)] transition-transform duration-500 hover:scale-110">
            <span className="absolute inset-0 rounded-full bg-cobalt/40 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
            <MessageCircle className="relative h-5 w-5" />
            <span className="sr-only">Chat on WhatsApp</span>
          </button>
        </Link>
      </motion.div>
    </footer>
  );
}
