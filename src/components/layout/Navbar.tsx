"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, siteConfig } from "@/data/portfolio";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/20 backdrop-blur-xl md:bg-background/80">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-end px-6 md:h-16 md:justify-between md:px-10">
        <Link
          href="/"
          className="hidden text-xl font-mono uppercase tracking-wider text-muted transition-colors hover:text-foreground md:block"
        >
          {siteConfig.initials}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-base transition-colors duration-200 py-1",
                isActive(link.href)
                  ? "text-foreground font-medium"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle boxed />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card/40 transition-colors hover:border-accent/50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-base transition-colors py-1",
                  isActive(link.href)
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
