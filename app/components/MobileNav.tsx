"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

export function MobileNav({ items }: { items?: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  const navLinks: NavItem[] =
    items || [
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Sirius A Visual", href: "/sirius-a-visual" },
      { name: "About", href: "/about" },
    ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-surface-2/60"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[320px] border-l border-hairline/50 bg-ink/95 text-foreground backdrop-blur-xl"
      >
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center gap-3" onClick={close}>
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="Sirius A" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-display text-lg text-foreground">Sirius A</span>
                <span className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-text-dim">
                  Marketing
                </span>
              </div>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-12 flex flex-col gap-1">
          {navLinks.map(({ name, href }, i) => {
            const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={href}
                  onClick={close}
                  className={`flex items-center justify-between border-b border-hairline/30 py-4 text-lg font-medium transition-colors ${
                    active ? "text-foreground" : "text-text-dim hover:text-foreground"
                  }`}
                >
                  <span>{name}</span>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-all duration-500 ${
                      active ? "text-cobalt-glow" : "opacity-40"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <Link href="/contact" onClick={close} className="btn-stellar w-full justify-center">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-6 right-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="space-y-2 text-sm">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-text-muted">
              Direct line
            </p>
            <a
              href="tel:+4407362622636"
              className="text-foreground transition-colors hover:text-cobalt-glow"
            >
              +44 07362 622636
            </a>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
