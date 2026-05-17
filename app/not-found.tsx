import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center px-4 py-24">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="eyebrow">Lost in orbit</span>
        <h1 className="mt-8 font-display text-[clamp(5rem,18vw,12rem)] leading-none tracking-[-0.04em]">
          <span className="text-cobalt-grad">404</span>
        </h1>
        <p className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
          <span className="text-stellar">This star isn&apos;t on the map.</span>
        </p>
        <p className="mx-auto mt-5 max-w-md text-text-dim">
          The page you&apos;re looking for has drifted out of frame — or never was.
        </p>
        <Link href="/" className="btn-stellar group mt-10 inline-flex">
          Back to home
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
        </Link>
      </div>
    </div>
  );
}
