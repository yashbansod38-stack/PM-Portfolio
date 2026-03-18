import { TerminalSquare, Lightbulb, Search, Sparkles, Wand2, Command, LineChart } from "lucide-react"
import * as motion from "framer-motion/client"

export const metadata = {
  title: "Experiments | Yash Bansod",
  description: "Interactive AI PM tools, growth loop calculators, and product strategy engines."
}

export default function ExperimentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-20 pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 relative inline-block">
          Experiments
          <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-foreground rounded-full"></div>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light mt-6">
          A sandbox for testing AI agents, strategy frameworks, and interactive UI paradigms.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-card border border-border/60 rounded-[32px] p-1 md:p-3 shadow-premium overflow-hidden group"
      >
        <div className="bg-background/40 backdrop-blur-xl rounded-[24px] overflow-hidden border border-border/40">
           {/* SaaS Toolbar */}
           <div className="h-12 border-b border-border/40 flex items-center justify-between px-6 bg-muted/20">
             <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-border" />
               <div className="w-2.5 h-2.5 rounded-full bg-border" />
               <div className="w-2.5 h-2.5 rounded-full bg-border" />
             </div>
             <div className="bg-muted/40 px-3 py-1 rounded-md border border-border/40 flex items-center gap-2">
               <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">strategy-engine-v1.local</span>
             </div>
             <div className="flex items-center gap-2">
               <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
             </div>
           </div>

           <div className="p-8 md:p-12 flex flex-col items-center text-center">
             <div className="p-4 bg-foreground/5 rounded-2xl mb-8 group-hover:bg-foreground/10 transition-colors">
               <TerminalSquare className="w-8 h-8 text-foreground" />
             </div>
             <h2 className="text-3xl font-bold tracking-tight mb-4">AI Strategy Generator</h2>
             <p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
               Enter a product concept or startup idea, and my proprietary framework will generate a high-signal GTM teardown.
             </p>
             
             <div className="w-full max-w-lg relative group/input">
               <div className="absolute inset-0 bg-foreground/5 rounded-2xl blur-xl group-focus-within/input:bg-foreground/10 transition-all opacity-0 group-focus-within/input:opacity-100" />
               <div className="relative flex flex-col sm:flex-row w-full items-center p-2 gap-2 bg-background border border-border/60 hover:border-foreground/30 focus-within:border-foreground/40 rounded-2xl transition-all shadow-sm">
                 <div className="flex-1 flex items-center gap-3 px-3">
                   <Search className="w-4 h-4 text-muted-foreground" />
                   <input 
                     type="text" 
                     placeholder="e.g., A subscription for local honey..." 
                     className="bg-transparent border-none focus:outline-none focus:ring-0 text-foreground text-sm w-full placeholder:text-muted-foreground/60"
                     disabled
                   />
                 </div>
                 <button className="h-10 px-6 bg-foreground text-background font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all opacity-40 cursor-not-allowed flex items-center gap-2">
                   Analyze
                   <Command className="w-3.5 h-3.5" />
                 </button>
               </div>
             </div>
             
             <div className="mt-12 pt-12 border-t border-border/40 w-full flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-foreground" /> 52,000+ Vectors</div>
                 <div className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-foreground" /> LLM-4o-Turbo</div>
               </div>
               <span className="italic">*Demo in read-only mode</span>
             </div>
           </div>
        </div>
      </motion.div>

      <div className="mt-32">
        <h3 className="text-2xl font-bold tracking-tight mb-8">Inactive Experiments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-8 bg-card border border-border/40 rounded-[24px] hover:border-foreground/20 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors">
                <Wand2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] px-2.5 py-1 bg-muted rounded-full uppercase text-muted-foreground">PRE-ALPHA</span>
            </div>
            <h4 className="font-bold text-lg mb-2">AI Prompt Library</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">A curated vault of meta-prompts for PM tasks including automated PRD generation and user persona simulations.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-8 bg-card border border-border/40 rounded-[24px] hover:border-foreground/20 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors">
                <LineChart className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] px-2.5 py-1 bg-muted rounded-full uppercase text-muted-foreground">IDEATION</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Growth Loops AI</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">A sandbox tool testing automated conversion variations using LLM-generated multivariate copy tests.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
