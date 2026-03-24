import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vanshika Gurbani — Data Scientist & ML Engineer",
  description:
    "Graduate Data Scientist passionate about solving problems using Machine Learning, NLP, and intelligent systems. Portfolio showcasing projects in ML, NLP, causal inference, and analytics.",
  openGraph: {
    title: "Vanshika Gurbani — Data Scientist & ML Engineer",
    description:
      "Graduate Data Scientist passionate about Machine Learning, NLP, and intelligent systems.",
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
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
