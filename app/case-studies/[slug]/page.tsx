import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or API
const caseStudies = [
  {
    title: "AI-Powered Customer Service Transformation",
    company: "TechCorp Solutions",
    description: "How TechCorp Solutions improved customer satisfaction by 40% using our AI chatbot integration.",
    fullDescription:
      "TechCorp Solutions, a leading software company, faced challenges in managing high volumes of customer inquiries. By implementing our AI-powered chatbot, they were able to handle 70% of customer queries automatically, reducing response times from hours to seconds. This led to a 40% increase in customer satisfaction scores and a 30% reduction in support costs.",
    image: "/placeholder.svg",
    slug: "techcorp-solutions",
    results: [
      "40% increase in customer satisfaction",
      "70% of queries handled automatically",
      "30% reduction in support costs",
      "Response times reduced from hours to seconds",
    ],
  },
  {
    title: "Streamlining Operations with Machine Learning",
    company: "Global Manufacturing Inc.",
    description: "Global Manufacturing Inc. reduced operational costs by 25% through our predictive maintenance AI.",
    fullDescription:
      "Global Manufacturing Inc., a multinational manufacturing company, was struggling with unexpected equipment failures that led to costly downtime. Our predictive maintenance AI solution analyzed sensor data from their machinery to predict potential failures before they occurred. This allowed for proactive maintenance, resulting in a 25% reduction in operational costs and a 50% decrease in unplanned downtime.",
    image: "/placeholder.svg",
    slug: "global-manufacturing",
    results: [
      "25% reduction in operational costs",
      "50% decrease in unplanned downtime",
      "20% increase in overall equipment effectiveness",
      "ROI achieved within 6 months of implementation",
    ],
  },
  {
    title: "Revolutionizing Healthcare Diagnostics",
    company: "MedTech Innovations",
    description: "MedTech Innovations achieved 99% accuracy in early disease detection using our AI imaging analysis.",
    fullDescription:
      "MedTech Innovations, a healthcare technology company, wanted to improve the accuracy and speed of disease detection in medical imaging. Our AI imaging analysis solution was trained on millions of medical images and achieved a 99% accuracy rate in detecting early signs of diseases. This led to faster diagnoses, reduced false positives, and ultimately, better patient outcomes.",
    image: "/placeholder.svg",
    slug: "medtech-innovations",
    results: [
      "99% accuracy in disease detection",
      "30% reduction in false positives",
      "50% faster diagnosis times",
      "15% improvement in patient outcomes",
    ],
  },
]

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <Link href="/case-studies" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
          ← Back to Case Studies
        </Link>
        <Card className="border-purple-800/20 bg-purple-900/10 mb-8">
          <CardHeader>
            <Image
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-3xl mb-2">{caseStudy.title}</CardTitle>
            <p className="text-purple-400 mb-4 text-xl">{caseStudy.company}</p>
            <div className="prose prose-invert max-w-none">
              <p className="mb-6">{caseStudy.fullDescription}</p>
              <h3 className="text-2xl font-semibold mb-4">Key Results:</h3>
              <ul className="list-disc pl-6 mb-6">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="mb-2">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your business?</h3>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

