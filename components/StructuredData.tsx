"use client";

import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "VoiceMate Chess",
        "applicationCategory": "GameApplication",
        "operatingSystem": ["Android", "iOS"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "10000"
        },
        "description": "Voice-controlled chess app designed for visually impaired players with real-time audio feedback and intelligent assistance.",
        "screenshot": "https://voicematechess.com/mockups/mockup1.png",
        "featureList": [
          "Voice-controlled gameplay",
          "Real-time audio feedback",
          "Accessibility for visually impaired",
          "AI opponent",
          "Chess puzzles and learning"
        ],
        "accessibilityFeature": [
          "screenReader",
          "voiceControl",
          "audioDescription",
          "fullKeyboardControl"
        ],
        "accessibilityHazard": "none",
        "accessMode": ["auditory", "textual"]
      },
      {
        "@type": "WebSite",
        "name": "VoiceMate Chess",
        "url": "https://voicematechess.com",
        "description": "Official website for VoiceMate Chess - Voice-controlled chess for visually impaired players",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://voicematechess.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "VoiceMate Chess",
        "url": "https://voicematechess.com",
        "logo": "https://voicematechess.com/logos/Logo-NoBackground.jpg",
        "sameAs": [
          "https://twitter.com/VoiceMateChess",
          "https://facebook.com/VoiceMateChess",
          "https://instagram.com/VoiceMateChess"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "support@voicematechess.com"
        }
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
