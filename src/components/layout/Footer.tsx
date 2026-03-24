import { socialLinks, siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-xs text-muted uppercase tracking-wider">
            Built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
