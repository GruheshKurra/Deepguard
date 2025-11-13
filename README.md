# TruthLens - Landing Page

A Next.js landing page for TruthLens iOS app with Apple-style dark mode design.

## Overview

TruthLens is an iOS application that detects deepfakes and AI-generated images with 100% on-device privacy. This repository contains the landing page built with Next.js, TypeScript, and Tailwind CSS, featuring Apple's San Francisco font and a beautiful dark mode interface inspired by Apple's design language.

## Features

- **Next.js 15** - Latest Next.js with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS v4** - Utility-first styling
- **Apple San Francisco Font** - Using the -apple-system font stack
- **Dark Mode** - Apple-inspired dark theme with authentic colors
- **Responsive Design** - Works perfectly on all devices
- **Performance Optimized** - Fast loading and smooth animations

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Apple San Francisco Font Family

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Deepguard
```

2. Navigate to the Next.js project:
```bash
cd truthlens-landing
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
truthlens-landing/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles with Apple dark theme
├── public/              # Static assets
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

## Design System

### Colors (Apple Dark Mode)

- **Background**: Pure black (#000000)
- **Surface**: Dark gray (#1c1c1e, #2c2c2e, #3a3a3c)
- **Text**: White (#ffffff), Gray (#98989d, #636366)
- **Primary**: iOS Blue (#0a84ff)
- **Success**: iOS Green (#30d158)

### Typography

Using Apple's San Francisco font family via the -apple-system font stack, which provides:
- SF Pro Text for body text
- SF Pro Display for headlines
- Optimal rendering on Apple devices

### Components

- **Navigation**: Fixed header with blur effect
- **Hero Section**: Large typography with gradient text effects
- **Features Grid**: 6 feature cards with icons
- **Privacy Section**: Highlighted privacy-first approach
- **Details Section**: Platform compatibility list
- **Footer**: Links and copyright information

## Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

This Next.js application can be deployed to:

- **Vercel** (Recommended) - Zero configuration deployment
- **Netlify** - Static site generation
- **AWS Amplify**
- Any platform supporting Node.js

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

All rights reserved © 2025 TruthLens

## Contact

For questions or support, please visit the contact section of the website.
