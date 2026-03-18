import Link from "next/link"
import { ArrowRight, Download, TerminalIcon, Target, Activity, FileText, Mail, Linkedin, ChevronRight, Lightbulb, User, BarChart, Zap, Cpu } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"
import { HeroSlider } from "@/components/hero-slider"

const pmCases = [
  {
    title: "Improving Creator Growth on Instagram",
    type: "Instagram PM Case",
    summary: "Designed a growth strategy to increase traffic to creator profiles by identifying gaps in discovery, content quality, and algorithm understanding.",
    doc: "/documents/Instagram PM Case.pdf",
  },
  {
    title: "Breaking Down Notion's Product System",
    type: "Product Teardown",
    summary: "Analyzed Notion's database product to understand user needs, competitive positioning, and product-market fit.",
    doc: "/documents/Product Teardown.pdf",
  },
]

export default function Home() {
  const projects = getAllPosts("projects").slice(0, 5)
  const writings = getAllPosts("writings").slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* RECRUITER HOOK TRICK */}
      <div className="bg-foreground text-background py-2 px-4 text-center text-xs sm:text-sm font-medium w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-background shrink-0"></span>
          </span>
          <span>Currently building AI product tools.</span>
        </div>
        <span>Looking for AI Product Manager / APM roles.</span>
      </div>

      {/* HERO SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 md:px-6 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: SLIDER */}
          <div className="w-full order-2 lg:order-1 relative">
             <HeroSlider />
             <div className="absolute -inset-4 bg-foreground/5 blur-3xl rounded-full -z-10 opacity-50"></div>
          </div>

          {/* RIGHT SIDE: TEXT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-foreground/5 border border-border/60 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide text-foreground">6 AI Products Shipped in 2 Months · Former NoBroker Ops Lead</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
              Building AI Products That <br className="hidden lg:block"/>
              Solve Real Problems.
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground font-medium mb-6">
              Mechanical Engineer → Operations Leader → AI Product Builder
            </h2>
            
            <p className="max-w-[700px] text-lg text-muted-foreground leading-relaxed mb-8">
              I ship products, not slide decks. Currently building AI tools that automate lead discovery, interview prep, and content intelligence.<br className="hidden lg:block"/>
              Actively seeking AI PM / APM roles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/projects" 
                className="group inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-semibold text-background transition-all hover:bg-foreground/90 hover:scale-105 active:scale-95 shadow-sm"
              >
                View Projects 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-8 text-sm font-semibold transition-colors hover:bg-muted hover:text-foreground"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* HOW I THINK STRATEGY SECTION */}
      <section className="w-full border-t border-border/40 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="md:col-span-4 lg:col-span-5 md:sticky md:top-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
                How I Think as a<br className="hidden md:block" /> Product Manager
              </h2>
              <div className="w-20 h-1 bg-foreground rounded-full mt-6"></div>
            </div>

            <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8 md:gap-10">
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex flex-shrink-0 items-center justify-center mt-1 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">I start with problems, not solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">Technology is just a tool. The goal is always to deeply understand the core problem before writing a single line of spec.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex flex-shrink-0 items-center justify-center mt-1 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">I focus on user pain and behavior</h3>
                  <p className="text-muted-foreground leading-relaxed">Metrics show what happened, but user behavior shows why. Building products that people actually adopt requires extreme empathy for friction points.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex flex-shrink-0 items-center justify-center mt-1 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <BarChart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">I prioritize based on impact vs effort</h3>
                  <p className="text-muted-foreground leading-relaxed">Saying 'no' to good ideas is the job. Ruthless prioritization ensures the team is always working on the highest leverage needle-movers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex flex-shrink-0 items-center justify-center mt-1 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">I build fast, test fast, iterate fast</h3>
                  <p className="text-muted-foreground leading-relaxed">Speed is a feature. Shipping an imperfect v1 to gather real data always beats agonizing over a theoretical perfect launch.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex flex-shrink-0 items-center justify-center mt-1 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">I use AI as a tool to amplify product thinking</h3>
                  <p className="text-muted-foreground leading-relaxed">AI is not just a feature to slap onto a product; it's a paradigm shift. I leverage LLMs to scale workflows, generate insights, and build magical user experiences.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="w-full border-y border-border/40 bg-muted/10">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
            <div className="flex items-start gap-4 px-4 pt-6 sm:pt-0 first:pt-0">
              <div className="p-2 bg-background border rounded-lg shadow-sm w-10 h-10 flex shrink-0 items-center justify-center">
                <Target className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Senior Supply Executive @ NoBroker</h4>
                <p className="text-xs text-muted-foreground mt-1">Managed growth & operations</p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-4 pt-6 sm:pt-0">
              <div className="p-2 bg-background border rounded-lg shadow-sm w-10 h-10 flex shrink-0 items-center justify-center">
                <TerminalIcon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Built 10+ AI and web products</h4>
                <p className="text-xs text-muted-foreground mt-1">From 0 to 1 full-stack dev</p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-4 pt-6 sm:pt-0">
              <div className="p-2 bg-background border rounded-lg shadow-sm w-10 h-10 flex shrink-0 items-center justify-center">
                <Activity className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Operations + Product thinking</h4>
                <p className="text-xs text-muted-foreground mt-1">Systematic problem solving</p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-4 pt-6 sm:pt-0">
              <div className="p-2 bg-background border rounded-lg shadow-sm w-10 h-10 flex shrink-0 items-center justify-center">
                <Activity className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Skilled in AI workflows, analytics, and growth</h4>
                <p className="text-xs text-muted-foreground mt-1">LLMs, React, Data analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED PRODUCTS */}
      <section className="mx-auto w-full max-w-6xl px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Selected Products</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A collection of products I’ve built by applying product thinking, user insights, and AI-driven solutions.
            </p>
          </div>
          <Link href="/projects" className="hidden lg:inline-flex group h-12 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold transition-all hover:bg-muted hover:border-foreground/30 shadow-sm shrink-0 whitespace-nowrap">
            View all products <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mb-8 flex items-center gap-2 text-sm font-medium text-foreground py-3 border-y border-border/40">
           <span className="w-2 h-2 rounded-full bg-foreground shrink-0"></span>
           Each project reflects a real-world problem solved using product thinking.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`} 
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-card p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] hover:border-foreground/30"
            >
              <div className="flex flex-col h-full z-10">
                <div className="flex items-start justify-between mb-5 gap-4">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground/80">{project.meta.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-foreground group-hover:text-background border border-border/50">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 flex-1">
                  {project.meta.summary}
                </p>
                
                {project.meta.tags && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.meta.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-mono font-medium px-2 py-1 rounded bg-muted/50 text-muted-foreground border border-border/50 transition-colors group-hover:border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="pt-5 border-t border-border/40 mt-auto flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                  </span>
                  <span className="text-[13px] sm:text-sm font-bold text-foreground tracking-tight">{project.meta.impact || "System Impact"}</span>
                </div>
              </div>
              
              {/* Subtle hover glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-foreground/[0.02] dark:to-foreground/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
          {projects.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 border rounded-2xl border-dashed bg-muted/5">
              <p className="text-muted-foreground font-medium">Add products to /content/projects</p>
            </div>
          )}
        </div>
        <Link href="/projects" className="lg:hidden mt-8 flex group h-12 text-sm font-semibold text-foreground items-center justify-center gap-1 w-full border rounded-xl bg-card hover:bg-muted transition-colors">
          View all products <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      {/* STRATEGY & THINKING SECTION */}
      <section className="mx-auto w-full max-w-5xl px-4 md:px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Product Thinking</h2>
            <p className="text-muted-foreground mt-2">Essays on product strategy, AI workflows, and scaling systems.</p>
          </div>
          <Link href="/writings" className="hidden sm:flex group text-sm font-semibold text-foreground items-center gap-1">
            Read all <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="flex flex-col space-y-4 mb-10">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground py-3 border-y border-border/40">
             <span className="w-2 h-2 rounded-full bg-foreground shrink-0"></span>
             PM Case Studies (PDFs)
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {pmCases.map((c) => (
              <a
                key={c.title}
                href={c.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-4 rounded-xl border border-border/40 bg-card p-5 hover:bg-muted/30 hover:border-border transition-all duration-200 shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground block mb-1">{c.type}</span>
                      <h3 className="text-base font-bold tracking-tight leading-snug group-hover:text-foreground/80 transition-colors">{c.title}</h3>
                    </div>
                    <div className="shrink-0 p-1.5 rounded-md bg-muted border border-border/40 group-hover:border-foreground/20 transition-colors">
                      <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{c.summary}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            {writings.map((writing) => (
              <Link key={writing.slug} href={`/writings/${writing.slug}`} className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-transparent hover:border-border/60 hover:bg-muted/30 rounded-2xl transition-all -mx-5 bg-card sm:bg-transparent">
                <div className="flex flex-col max-w-3xl">
                  <h3 className="text-lg font-bold mb-1 tracking-tight group-hover:text-foreground/80 transition-colors uppercase">{writing.meta.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 md:line-clamp-1">{writing.meta.summary}</p>
                </div>
                <div className="flex items-center gap-4 mt-3 sm:mt-0">
                  <time className="text-xs font-mono text-muted-foreground whitespace-nowrap hidden md:block">
                    {new Date(writing.meta.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </time>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
            {writings.length === 0 && (
               <div className="text-center py-12 border rounded-2xl border-dashed">
                  <p className="text-muted-foreground text-sm font-medium">Add posts to /content/writings</p>
               </div>
            )}
          </div>
        </div>

        {/* Coming Soon Writing Cards — hidden for now */}
      </section>


      {/* TIMELINE SNAPSHOT */}
      <section className="w-full border-y border-border/40 bg-muted/10">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-24 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Career Journey</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-4xl text-center divide-y sm:divide-y-0 sm:divide-x divide-border/40 border rounded-2xl bg-card">
              <div className="py-6 px-4">
                 <h3 className="text-xl font-bold mb-1">2022</h3>
                 <p className="text-sm font-semibold text-muted-foreground mb-2">Marketing Intern</p>
                 <p className="text-xs text-muted-foreground/80 leading-relaxed">Learned growth & funnels</p>
              </div>
              <div className="py-6 px-4">
                 <h3 className="text-xl font-bold mb-1">2023</h3>
                 <p className="text-sm font-semibold text-muted-foreground mb-2">BD @ NoBroker</p>
                 <p className="text-xs text-muted-foreground/80 leading-relaxed">Sales & ground operations</p>
              </div>
              <div className="py-6 px-4">
                 <h3 className="text-xl font-bold mb-1">2024</h3>
                 <p className="text-sm font-semibold text-muted-foreground mb-2">Senior Supply Exec</p>
                 <p className="text-xs text-muted-foreground/80 leading-relaxed">Scaled systems & processes</p>
              </div>
              <div className="py-6 px-4">
                 <h3 className="text-xl font-bold mb-1">2025</h3>
                 <p className="text-sm font-bold text-foreground mb-2">Building AI Products</p>
                 <p className="text-xs text-muted-foreground/80 leading-relaxed">Shipped 6 products in 2 mos</p>
              </div>
            </div>
            <Link href="/timeline" className="group mt-10 inline-flex items-center justify-center h-12 rounded-lg bg-foreground text-background px-8 text-sm font-semibold shadow-sm transition-all hover:bg-foreground/90 hover:scale-105">
              View Full Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto w-full max-w-3xl px-4 md:px-6 py-32 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Let's build great products together.</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-lg">
            I am actively looking for AI PM roles. My inbox is always open for opportunities and conversations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:contact@yashbansod.com" 
              className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/yash-bansod" 
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-8 text-sm font-semibold transition-colors hover:bg-muted"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-8 text-sm font-semibold transition-colors hover:bg-muted"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </div>
      </section>
    </div>
  )
}
