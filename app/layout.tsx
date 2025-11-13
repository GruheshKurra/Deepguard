import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TruthLens - Detect Deepfakes & AI Images",
  description: "100% Private on-device AI-powered deepfake and AI image detection for iOS",
  keywords: ["deepfake", "AI detection", "privacy", "iOS", "on-device AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
