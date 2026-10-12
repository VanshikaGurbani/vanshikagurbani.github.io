import { socialLinks, siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Top row: Connect, Contact, Status */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Connect */}
          <div>
            <h3 className="text-base font-mono uppercase tracking-[0.2em] text-foreground font-semibold mb-5">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-muted hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-muted hover:text-foreground transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-mono uppercase tracking-[0.2em] text-foreground font-semibold mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${socialLinks.email}`}
                className="block text-base text-muted hover:text-foreground transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>

          {/* Status */}
          <div className="col-span-2 md:col-span-1 md:text-right">
            <h3 className="text-base font-mono uppercase tracking-[0.2em] text-foreground font-semibold mb-5">
              Status
            </h3>
            <div
              className="inline-flex items-center gap-3 px-5 py-3
                          border border-dashed border-border rounded-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {siteConfig.status}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted uppercase tracking-wider">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p className="text-sm text-muted uppercase tracking-wider">
              Built with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
