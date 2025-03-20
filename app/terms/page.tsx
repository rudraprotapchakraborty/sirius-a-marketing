import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read AI Tool's terms and conditions to understand your rights and responsibilities when using our service",
  openGraph: {
    title: "AI Tool - Terms and Conditions",
    description:
      "Read AI Tool's terms and conditions to understand your rights and responsibilities when using our service",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

        <Card className="border-purple-800/20 bg-purple-900/10 mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using AI Tool's services, you agree to be bound by these Terms and Conditions. If you do
              not agree with any part of these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
            <p className="text-gray-300 mb-6">
              You agree to use AI Tool's services only for lawful purposes and in accordance with these Terms and
              Conditions. You are prohibited from violating or attempting to violate the security of the Service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300 mb-6">
              All content included on this site, such as text, graphics, logos, button icons, images, audio clips,
              digital downloads, data compilations, and software, is the property of AI Tool or its content suppliers
              and protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              AI Tool shall not be liable for any indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
              from your access to or use of or inability to access or use the services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
            <p className="text-gray-300 mb-6">
              AI Tool reserves the right to modify these Terms and Conditions at any time. We will notify users of any
              changes by updating the date at the bottom of this page. Continued use of the Service after any such
              changes shall constitute your consent to such changes.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms and Conditions, please contact us.
          </p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

