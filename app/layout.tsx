import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title:
    "VoiceMate Chess - Voice-Controlled Chess for Visually Impaired Players",
  description:
    "Experience chess like never before with VoiceMate Chess. Voice-controlled gameplay designed for visually impaired players with real-time audio feedback and intelligent assistance. Play chess with your voice - accessible for everyone.",
  keywords: [
    "voice chess",
    "accessible chess",
    "visually impaired chess",
    "voice controlled chess",
    "chess for blind",
    "audio chess",
    "VoiceMate Chess",
    "accessible gaming",
    "voice recognition chess",
    "chess app for visually impaired",
    "blind chess",
    "audio feedback chess",
  ],
  authors: [{ name: "VoiceMate Chess Team" }],
  creator: "VoiceMate Chess",
  publisher: "VoiceMate Chess",
  applicationName: "VoiceMate Chess",
  icons: {
    icon: "/logos/Logo-Background.jpg",
    apple: "/logos/Logo-Background.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voicematechess.com",
    siteName: "VoiceMate Chess",
    title: "VoiceMate Chess - Voice-Controlled Chess for Everyone",
    description:
      "Play chess with your voice. VoiceMate Chess is designed for visually impaired players with real-time audio feedback and intelligent assistance. Experience chess accessibility redefined.",
    images: [
      {
        url: "/mockups/mockup1.png",
        width: 1200,
        height: 630,
        alt: "VoiceMate Chess App - Voice-Controlled Chess",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceMate Chess - Voice-Controlled Chess for Everyone",
    description:
      "Play chess with your voice. Accessible for visually impaired players with real-time audio feedback.",
    images: ["/mockups/mockup1.png"],
    creator: "@VoiceMateChess",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Gaming & Accessibility",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F5A623" />
        <link rel="canonical" href="https://voicematechess.com" />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
