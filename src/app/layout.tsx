import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { StarField } from "@/components/ui/StarField";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vanshika Gurbani | Agentic AI/ML Engineer",
  description:
    "Agentic AI/ML Engineer who builds agents, ML models, and full-stack products that make sense of messy data. Portfolio of projects in agentic AI, NLP, causal inference, and analytics.",
  openGraph: {
    title: "Vanshika Gurbani | Agentic AI/ML Engineer",
    description:
      "Agentic AI/ML Engineer building agents, ML models, and products that make sense of messy data.",
    url: "https://vanshikagurbani.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <GradientBlobs />
          <StarField />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
