# TruthLens 🔍

**100% Private On-Device AI-Powered Deepfake & AI Image Detection for iOS**

A beautiful, Apple-themed landing page for TruthLens - the world's first privacy-first, on-device dual-model system for detecting both deepfake manipulations and AI-generated images.

![Dark Mode](https://img.shields.io/badge/theme-dark%20mode-black)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Features

- 🎨 **Apple Design Language** - Authentic dark mode design inspired by Apple's product pages
- 📱 **SF Pro Font** - Uses Apple's system font stack for perfect typography
- ⚡ **Next.js 14** - Modern React framework with App Router
- 🎭 **TypeScript** - Fully typed for better development experience
- 🌊 **Tailwind CSS** - Utility-first CSS for rapid styling
- 🔄 **Smooth Animations** - Glassmorphism, gradients, and hover effects
- 📱 **Fully Responsive** - Works beautifully on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GruheshKurra/Deepguard.git
   cd Deepguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Deepguard/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Fixed navigation bar
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── Features.tsx      # Features grid
│   │   ├── Privacy.tsx       # Privacy-first messaging
│   │   ├── Detection.tsx     # Detection capabilities
│   │   └── Footer.tsx        # Footer section
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🎨 Design System

### Colors (Dark Mode)
- **Background**: `#000000` (Pure black)
- **Surface**: `#1d1d1f` to `#2d2d2f` (Dark grays)
- **Text Primary**: `#f5f5f7` (Off-white)
- **Text Secondary**: `#86868b` (Gray)
- **Accent**: `#007AFF` (Apple blue) to `#5ac8fa` (Light blue)
- **Success**: `#34C759` (Green)

### Typography
- **Font Family**: SF Pro Display, SF Pro Text (Apple system fonts)
- **Headings**: Bold, 48-96px
- **Body**: Regular, 16-20px
- **Small**: Regular, 12-14px

## 🔧 Customization

### Update App Store Link

In `app/components/Hero.tsx`, update the download button:
```tsx
<a href="YOUR_APP_STORE_URL" className="...">
```

### Add QR Code

Replace the placeholder in `app/components/Hero.tsx`:
```tsx
<div className="w-48 h-48 bg-white rounded-2xl">
  <img src="/qr-code.png" alt="Download QR Code" />
</div>
```

### Add Screenshots

Replace the placeholder in `app/components/Detection.tsx`:
```tsx
<img src="/screenshot.png" alt="App Screenshot" />
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GruheshKurra/Deepguard)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

### Deploy to Netlify

```bash
npm run build
# Upload the 'out' folder to Netlify
```

### Deploy to GitHub Pages

Add to `next.config.js`:
```js
output: 'export',
images: { unoptimized: true },
```

Then:
```bash
npm run build
# Push the 'out' folder to gh-pages branch
```

## 🎯 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Unicode Emoji (can be replaced with SF Symbols or custom icons)

## 📱 About TruthLens

TruthLens is an iOS app that uses advanced AI to detect:
- Deepfake manipulations (face swaps, reenactment, etc.)
- AI-generated images (DALL-E, Midjourney, Stable Diffusion, etc.)

### Key Features:
- ✅ 100% on-device processing
- ✅ Zero data transmission
- ✅ >95% accuracy
- ✅ <200ms inference time
- ✅ Dual specialized models
- ✅ Batch processing (up to 500 images)
- ✅ Free & no tracking

## 📄 License

Copyright © 2025 TruthLens. All rights reserved.

## 🤝 Contributing

This is the landing page for TruthLens. For the iOS app or research papers, please contact the developer.

## 📞 Contact

- **Email**: support@truthlens.app (coming soon)
- **GitHub**: [GruheshKurra](https://github.com/GruheshKurra)

---

**Made with ❤️ using Apple design principles**
