import { siteDetails } from '@/data/siteDetails';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteDetails.siteName,
    "url": siteDetails.siteUrl,
    "logo": `${siteDetails.siteUrl}/images/logo.png`,
    "description": siteDetails.metadata.description,
    "sameAs": [
      "https://twitter.com/overlap",
      "https://linkedin.com/company/overlap"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Bulgarian"]
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Ivaylo Nedev",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person", 
        "name": "Daniel Todorov",
        "jobTitle": "CTO & Developer"
      },
      {
        "@type": "Person",
        "name": "Kaloyan Stefanov", 
        "jobTitle": "CTO & Developer"
      }
    ],
    "offers": {
      "@type": "Offer",
      "name": "Racing Telemetry Analytics",
      "description": "Professional-grade telemetry and analytics for motorsports enthusiasts",
      "price": "0",
      "priceCurrency": "USD",
      "availability": ""
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
