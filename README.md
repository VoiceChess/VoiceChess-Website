# Samsung Web - Next.js Professional Website

Website polos yang dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS dengan struktur yang rapi dan profesional.

## Struktur Project

```
samsungweb/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── Button/
│   │   └── index.tsx            # Button component
│   ├── Card/
│   │   └── index.tsx            # Card component
│   ├── Container/
│   │   └── index.tsx            # Container component
│   ├── Header/
│   │   └── index.tsx            # Header component
│   ├── Footer/
│   │   └── index.tsx            # Footer component
│   └── Layout/
│       └── index.tsx            # Layout wrapper component
├── public/                       # Static files
├── .eslintrc.json               # ESLint config
├── .gitignore                   # Git ignore file
├── next.config.js               # Next.js config
├── package.json                 # Dependencies
├── postcss.config.js            # PostCSS config
├── tailwind.config.ts           # Tailwind config
└── tsconfig.json                # TypeScript config
```

## Fitur

- ✅ Next.js 15 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ Component-based Architecture
- ✅ Clean Folder Structure
- ✅ Professional Code Quality

## Cara Menggunakan

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk Production

```bash
npm run build
npm start
```

## Komponen yang Tersedia

### Layout Components
- **Header**: Navigation bar dengan logo dan menu
- **Footer**: Footer dengan links dan informasi kontak
- **Layout**: Wrapper yang menggabungkan Header dan Footer

### UI Components
- **Button**: Tombol dengan berbagai variant (primary, secondary, outline) dan size (sm, md, lg)
- **Card**: Card component dengan optional title dan hover effect
- **Container**: Container dengan responsive max-width

## Cara Menambahkan Komponen Baru

1. Buat folder baru di `components/`
2. Buat file `index.tsx` di dalam folder tersebut
3. Export komponen sebagai default export

Contoh:

```typescript
// components/MyComponent/index.tsx
import React from 'react';

interface MyComponentProps {
  // ... props
}

export default function MyComponent({ }: MyComponentProps) {
  return (
    <div>
      {/* ... */}
    </div>
  );
}
```

4. Import komponen di halaman atau komponen lain:

```typescript
import MyComponent from '@/components/MyComponent';
```

## Customization

### Colors
Edit `tailwind.config.ts` untuk mengubah color scheme.

### Fonts
Edit `app/layout.tsx` untuk menambahkan custom fonts.

### Global Styles
Edit `app/globals.css` untuk menambahkan global styles.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## License

MIT
