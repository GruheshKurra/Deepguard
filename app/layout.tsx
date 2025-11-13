import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TruthLens - Detect Deepfakes & AI Images",
  description: "100% Private deepfake and AI image detection on your iPhone. Advanced AI-powered detection that runs completely on your device.",
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
