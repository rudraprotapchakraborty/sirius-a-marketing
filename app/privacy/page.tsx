import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read AI Tool's privacy policy to understand how we collect, use, and protect your data",
  openGraph: {
    title: "AI Tool - Privacy Policy",
    description: "Read AI Tool's privacy policy to understand how we collect, use, and protect your data",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        <Card className="border-purple-800/20 bg-purple-900/10 mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or communicate with us. This may include your name, email address, and usage data.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and
              to protect AI Tool and our users.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
            <p className="text-gray-300 mb-6">
              We do not share personal information with companies, organizations, or individuals outside of AI Tool
              except in the following cases: with your consent, for legal reasons, or to protect rights, property, or
              safety.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-300 mb-6">
              We work hard to protect AI Tool and our users from unauthorized access to or unauthorized alteration,
              disclosure, or destruction of information we hold.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may revise this Privacy Policy from time to time. The most current version will always be posted on our
              website.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-300 mb-6">If you have any questions about this Privacy Policy, please contact us.</p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

