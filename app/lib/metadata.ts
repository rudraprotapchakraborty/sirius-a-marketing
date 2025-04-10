import type { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function generateMetadata({ title, description, image, path }: MetadataProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://siriusamarketing.com";
  const fullTitle = title ? `${title} | Sirius A Marketing` : "Sirius A Marketing";
  const fullDescription = description || "Empowering businesses with cutting-edge digital marketing strategies.";
  const ogImage = image || `${baseUrl}/og-default.jpg`;

  return {
    title: fullTitle,
    description: fullDescription,
    viewport: "width=device-width, initial-scale=1", // ✅ Add this line
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: path ? `${baseUrl}${path}` : baseUrl,
      siteName: "Sirius A Marketing",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: "@SiriusAMarketing",
    },
  };
}
