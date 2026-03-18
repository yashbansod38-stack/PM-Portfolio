import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"
import { ArrowRight, Lightbulb, TerminalIcon } from "lucide-react"

export const metadata = {
  title: "Projects | Yash Bansod",
  description: "6 AI products built from 0→1 with full case studies. MapLead AI, PM Interview Gym, DeepRead AI, and more."
}

export default function ProjectsPage() {
  const projects = getAllPosts("projects")

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-20 pb-40">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 relative inline-block">
          Projects
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-foreground rounded-full"></div>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
          From full-stack operations algorithms to intelligent LLM workflows, here is a showcase of systems I've built.
        </p>
      </div>

      {/* SELECTED PRODUCTS */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-foreground tracking-tight mb-8">Selected Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`} 
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] hover:border-foreground/30"
            >
              <div className="flex flex-col h-full z-10">
                <div className="flex items-start justify-between mb-5 gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground/80">{project.meta.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-foreground group-hover:text-background border border-border/50">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.meta.summary}
                </p>
                
                {project.meta.tags && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.meta.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono font-medium px-2 py-1 rounded bg-muted/50 text-muted-foreground border border-border/50 transition-colors group-hover:border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-border/40 mt-auto flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                  </span>
                  <span className="text-xs font-bold text-foreground tracking-tight">{project.meta.impact || "System Impact"}</span>
                </div>
              </div>
              
              {/* Subtle hover glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-foreground/[0.02] dark:to-foreground/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
          {projects.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 border rounded-2xl border-dashed bg-muted/5">
              <p className="text-muted-foreground font-medium">Add products to /content/projects to feature them.</p>
            </div>
          )}
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section>
        <div className="flex items-end justify-between mb-8">
           <h2 className="text-2xl font-bold text-foreground tracking-tight">Experiments</h2>
           <Link href="/experiments" className="hidden sm:inline-flex group items-center text-sm font-semibold text-foreground">
              Go to Lab <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
           </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           <Link href="/experiments" className="group p-6 border rounded-xl bg-card hover:border-foreground/30 transition-colors">
              <TerminalIcon className="h-6 w-6 text-foreground mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-bold text-lg mb-2 tracking-tight">AI Prompt Library</h3>
              <p className="text-sm text-muted-foreground">System prompts and architecture concepts.</p>
           </Link>
           <Link href="/experiments" className="group p-6 border rounded-xl bg-card hover:border-foreground/30 transition-colors">
              <Lightbulb className="h-6 w-6 text-foreground mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-bold text-lg mb-2 tracking-tight">Growth Strategy AI</h3>
              <p className="text-sm text-muted-foreground">Go-to-Market workflow generator.</p>
           </Link>
        </div>
        <Link href="/experiments" className="sm:hidden mt-4 inline-flex group items-center text-sm font-semibold text-foreground p-4 border w-full rounded-xl bg-muted/20 justify-center">
           Go to Lab <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>

    </div>
  )
}
