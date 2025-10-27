# Public Assets Structure

This folder contains all static assets for the VoiceMate Chess landing page.

## Folder Structure

```
public/
├── logos/              # VoiceMate Chess logos
│   ├── Logo-Background.jpg       # Logo with background
│   ├── Logo-NoBackground.jpg     # Logo without background (JPG)
│   └── Logo-NoBackground.png     # Logo without background (PNG)
│
├── mockups/            # App screenshots and mockups
│   ├── mockup1.png               # Welcome/Login screen
│   ├── mockup2.jpg               # User progress screen
│   └── mockup3.jpg               # Chess game screen
│
└── robots.txt          # Search engine crawler instructions
```

## Usage in Code

### Logos
Used in:
- `components/LandingPage/Navbar.tsx` - Header logo
- `components/LandingPage/Footer.tsx` - Footer branding
- `app/layout.tsx` - Favicon and metadata
- `app/manifest.ts` - PWA icon
- `components/StructuredData.tsx` - SEO structured data

Path: `/logos/Logo-NoBackground.png`

### Mockups
Used in:
- `components/LandingPage/HeroSection.tsx` - 3 phone mockups on desktop, 1 background on mobile
- `app/layout.tsx` - Open Graph and Twitter Card images
- `components/StructuredData.tsx` - App screenshot for SEO

Paths:
- `/mockups/mockup1.png` - Welcome screen (center phone, mobile background)
- `/mockups/mockup2.jpg` - Progress screen (left phone)
- `/mockups/mockup3.jpg` - Game screen (right phone)

## File Formats

- **Logos**: JPG and PNG formats available
  - Use PNG for transparent backgrounds
  - Use JPG for smaller file sizes

- **Mockups**: PNG and JPG formats
  - High resolution for better display quality
  - Optimized by Next.js Image component

## Notes

- All images are automatically optimized by Next.js
- Use Next.js `<Image>` component for best performance
- Images are served from root `/` path (e.g., `/logos/Logo-NoBackground.png`)
