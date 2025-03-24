import type { Metadata } from "next";
import { generateMetadata } from "./lib/metadata";
import RootLayout from "./RootLayout"; // Import RootLayout

export const metadata: Metadata = generateMetadata({});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
