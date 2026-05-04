import type { Metadata, Viewport } from "next"
import { generateMetadata } from "./lib/metadata"
import ClientPage from "./ClientPage"

export const metadata: Metadata = generateMetadata({
  title: "Home",
  description: "Empower your business with cutting-edge digital marketing strategies.",
  path: "/",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Page() {
  return <ClientPage />
}

