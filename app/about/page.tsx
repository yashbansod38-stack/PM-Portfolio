import { Target, Zap, Rocket, Layers, ArrowRight, Code, Brain, LineChart, Globe, Palette, User } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion/client"

export const metadata = {
  title: "About | Yash Bansod",
  description: "The story, thesis, and capabilities of Yash Bansod."
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-20 pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 relative inline-block">
          About Me
          <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-foreground rounded-full"></div>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed mt-6">
          Mechanical Engineer turned Operations Leader, now building the future of AI-driven products.
        </p>
      </motion.div>
      
      <div className="space-y-32">
        
        {/* 1 - My Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">1 — My Story</h2>
              <p className="text-muted-foreground mt-4 italic">The transition from physical systems to digital intelligence.</p>
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                    I didn’t start as a product manager. I started as a mechanical engineer who loved solving complex physical problems. 
                </p>
                <p>
                    During my time in <span className="text-foreground font-medium">Sales & Operations</span> at NoBroker, eventually as a <span className="text-foreground font-medium">Senior Supply Executive</span>, I realized something fundamental:
                </p>
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground tracking-tight py-8 border-y-2 border-border/40 my-10 relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-muted-foreground/20 font-serif">"</span>
                  Most business problems are product problems. Processes break because systems are poorly designed.
                  <span className="absolute -bottom-10 right-0 text-6xl text-muted-foreground/20 font-serif">"</span>
                </blockquote>
                <p>
                    That realization pushed me into building products myself. I wanted to fix the bottlenecks, so I learned how to code, how to design, and how to harness AI workflows to solve the exact problems I used to face manually.
                </p>
                <p>
                    Today, I combine my heavy-duty operational experience with technical execution to build products that don't just "work" but actively simplify complex human workflows.
                </p>
            </div>
        </section>

        {/* 2 - What I Do */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">2 — What I Do</h2>
              <p className="text-muted-foreground mt-4">Core areas of focus where I create the most value.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="group p-8 bg-card border border-border/60 hover:border-foreground/40 rounded-3xl transition-all shadow-sm">
                    <div className="w-12 h-12 bg-muted/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                      <Brain className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">AI Product Design</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Beyond wrappers. I design system-embedded LLM workflows that handle cognitive load, not just text generation.</p>
                </div>
                <div className="group p-8 bg-card border border-border/60 hover:border-foreground/40 rounded-3xl transition-all shadow-sm">
                    <div className="w-12 h-12 bg-muted/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                      <LineChart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">Growth Algorithms</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Leveraging data and automation to build sustainable loops for acquisition, activation, and long-term retention.</p>
                </div>
                <div className="group p-8 bg-card border border-border/60 hover:border-foreground/40 rounded-3xl transition-all shadow-sm">
                    <div className="w-12 h-12 bg-muted/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">Ops Automation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Building 'shadow infrastructure'—the internal systems and bots that keep a business scaling without massive overhead.</p>
                </div>
                <div className="group p-8 bg-card border border-border/60 hover:border-foreground/40 rounded-3xl transition-all shadow-sm">
                    <div className="w-12 h-12 bg-muted/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">Discovery & Research</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Obsessive user interview loops and competitive teardowns to identify high-signal product opportunities.</p>
                </div>
            </div>
        </section>

        {/* 3 - Skills */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">3 — Skills</h2>
              <p className="text-muted-foreground mt-4">A balanced toolkit across product, engineering, and business.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase mb-6 border-b border-border/40 pb-2">Product Thinking</h3>
                    <ul className="space-y-3 font-semibold text-foreground text-sm">
                        <li>Strategy & GTM</li>
                        <li>User Research</li>
                        <li>Wireframing</li>
                        <li>Behavior Design</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase mb-6 border-b border-border/40 pb-2">Technical Execution</h3>
                    <ul className="space-y-3 font-semibold text-foreground text-sm">
                        <li>TypeScript / React</li>
                        <li>Next.js / Python</li>
                        <li>PostgreSQL / SQL</li>
                        <li>System Design</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase mb-6 border-b border-border/40 pb-2">AI Capabilities</h3>
                    <ul className="space-y-3 font-semibold text-foreground text-sm">
                        <li>LLM Orchestration</li>
                        <li>Prompt Engineering</li>
                        <li>Vector Databases</li>
                        <li>AI Automations</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase mb-6 border-b border-border/40 pb-2">Business Operations</h3>
                    <ul className="space-y-3 font-semibold text-foreground text-sm">
                        <li>Supply Chain Ops</li>
                        <li>Growth Hacking</li>
                        <li>Sales Operations</li>
                        <li>Data Analytics</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 4 - My Philosophy */}
        <section className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-16">4 — My Philosophy</h2>
            
            <div className="relative w-full max-w-2xl aspect-square md:aspect-[16/9] flex items-center justify-center overflow-hidden py-12">
              {/* Intersection Diagram UI */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Visual Circles/Nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full border border-foreground/10 bg-muted/5 backdrop-blur-sm flex items-center justify-center text-center p-6 transition-all hover:border-foreground/30 hover:bg-muted/10 group">
                  <div className="flex flex-col items-center gap-2">
                    <Code className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="font-bold text-sm md:text-base tracking-tighter uppercase">Technology</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full border border-foreground/10 bg-muted/5 backdrop-blur-sm flex items-center justify-center text-center p-6 transition-all hover:border-foreground/30 hover:bg-muted/10 group">
                  <div className="flex flex-col items-center gap-2">
                    <User className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="font-bold text-sm md:text-base tracking-tighter uppercase">User Behavior</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full border border-foreground/10 bg-muted/5 backdrop-blur-sm flex items-center justify-center text-center p-6 transition-all hover:border-foreground/30 hover:bg-muted/10 group">
                  <div className="flex flex-col items-center gap-2">
                    <Globe className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="font-bold text-sm md:text-base tracking-tighter uppercase">Market Needs</span>
                  </div>
                </div>

                {/* Center Core */}
                <div className="z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-foreground shadow-2xl flex flex-col items-center justify-center text-background text-center p-2 animate-pulse-slow">
                  <span className="font-black text-[10px] md:text-xs tracking-widest uppercase">The Sweet Spot</span>
                  <span className="font-bold text-sm md:text-base tracking-tighter">AI PRODUCT</span>
                </div>

                {/* Connecting Lines (SVG) - Hidden on smallest screens to avoid clutter */}
                <svg className="absolute inset-0 w-full h-full -z-10 hidden md:block" viewBox="0 0 100 100">
                  <line x1="50" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" className="text-foreground/20" />
                  <line x1="25" y1="75" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" className="text-foreground/20" />
                  <line x1="75" y1="75" x2="50" y2="50" stroke="currentColor" strokeWidth="0.2" className="text-foreground/20" />
                </svg>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground text-center max-w-xl mt-12 leading-relaxed">
              I believe great AI products aren't just technical achievements—they are the perfect alignment of <span className="text-foreground font-medium">technical feasibility</span>, <span className="text-foreground font-medium">deep user empathy</span>, and <span className="text-foreground font-medium">sustainable business value</span>.
            </p>
        </section>

        {/* 5 - Why Me */}
        <section className="bg-card border border-border/60 rounded-[32px] p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-foreground tracking-tight mb-8">5 — Why Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground font-bold mb-4">01</div>
                <h3 className="text-lg font-bold">Ops Background</h3>
                <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-3">
                  I understand real business constraints. Having worked in ground-level BD and Operations, I don't just build shiny features—I build systems that solve operational pain points.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground font-bold mb-4">02</div>
                <h3 className="text-lg font-bold">Shipped 6 AI Products</h3>
                <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-3">
                  I can execute, not just strategize. In 2 months, I ideated, built, and shipped 6 functional AI products end-to-end, validating both the market needs and technical feasibility.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-foreground/5 rounded-full flex items-center justify-center text-foreground font-bold mb-4">03</div>
                <h3 className="text-lg font-bold">Full-Stack Context</h3>
                <p className="text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-3">
                  I am technical enough to spec, design, and prototype. I can speak the language of engineers without friction, turning user problems into architectural decisions seamlessly.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border/40 flex justify-center">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-semibold text-background transition-all hover:bg-foreground/90 hover:scale-105 shadow-sm">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
        </section>
        
      </div>
    </div>
  )
}
