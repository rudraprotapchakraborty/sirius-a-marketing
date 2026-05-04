import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { generateMetadata } from "./lib/metadata";
import RootLayout from "./RootLayout";

export const metadata: Metadata = generateMetadata({});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Layout({ children }: { children: ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
