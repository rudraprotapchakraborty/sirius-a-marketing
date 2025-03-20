import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    title: "AI-Powered Customer Service Transformation",
    company: "TechCorp Solutions",
    description: "How TechCorp Solutions improved customer satisfaction by 40% using our AI chatbot integration.",
    image: "/placeholder.svg",
    slug: "techcorp-solutions",
  },
  {
    title: "Streamlining Operations with Machine Learning",
    company: "Global Manufacturing Inc.",
    description: "Global Manufacturing Inc. reduced operational costs by 25% through our predictive maintenance AI.",
    image: "/placeholder.svg",
    slug: "global-manufacturing",
  },
  {
    title: "Revolutionizing Healthcare Diagnostics",
    company: "MedTech Innovations",
    description: "MedTech Innovations achieved 99% accuracy in early disease detection using our AI imaging analysis.",
    image: "/placeholder.svg",
    slug: "medtech-innovations",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Case Studies</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="border-purple-800/20 bg-purple-900/10 transition-colors hover:bg-purple-800/20"
            >
              <Link href={`/case-studies/${study.slug}`} className="block h-full">
                <CardHeader>
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                  <p className="text-purple-400 mb-2">{study.company}</p>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

