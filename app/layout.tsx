import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RetroForge — Marketplace for Homebrew Gaming Hardware",
  description: "Buy and sell custom gaming consoles, parts, and design files. The premier marketplace for hardware makers and retro gaming enthusiasts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="291e96c8-0f13-43e9-95d7-963a04f76d5f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
