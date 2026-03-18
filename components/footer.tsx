import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-20 bg-muted/10">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div>
          <p className="text-sm font-semibold text-foreground">Yash Bansod</p>
          <p className="text-sm text-muted-foreground mt-1">
            Building AI Products That Solve Real Problems.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
          <Link href="/timeline" className="hover:text-foreground transition-colors">Timeline</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Resume</a>
          <a href="https://linkedin.com/in/yash-bansod" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://github.com/yash-bansod" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Yash Bansod. All rights reserved.</p>
          <p>Designed with Next.js, Tailwind, and MDX.</p>
        </div>
      </div>
    </footer>
  )
}
