import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeepGuard - AI-Powered Deepfake Detection for iOS",
  description: "100% Private deepfake and AI image detection on your iPhone. Advanced on-device AI detection for images, videos, and live camera. No cloud uploads, works offline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
