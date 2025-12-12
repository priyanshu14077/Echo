import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <ClerkProvider>
          <Providers>{children}</Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Echo – Smart AI for your everyday needs",
  description:
    "Use Echo to plan, purchase, deliver, and organize with a voice-first assistant.",
  applicationName: "Echo",
  openGraph: {
    title: "Echo – Smart AI for your everyday needs",
    description:
      "Voice-first assistant for purchases, deliveries, and planning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo – Smart AI for your everyday needs",
    description:
      "Voice-first assistant for purchases, deliveries, and planning.",
  },
  themeColor: "#0a0113",
};

export const viewport: Viewport = {
  themeColor: "#0a0113",
};
