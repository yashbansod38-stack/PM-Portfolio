import { Mail, Linkedin, FileText, Twitter } from "lucide-react"

export const metadata = {
  title: "Contact | Yash Bansod",
  description: "Get in touch with Yash Bansod."
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 md:px-6 py-20 pb-40 text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 relative inline-block">
        Contact
        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-foreground rounded-full"></div>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto font-light leading-relaxed">
        I'm constantly looking to build with great people. Reach out if you're hiring an AI PM or just want to talk strategy.
      </p>

      <div className="mb-12 inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-border/60 rounded-full text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        I respond to every message within 24 hours.
      </div>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <a 
          href="mailto:contact@yashbansod.com" 
          className="flex items-center justify-between p-6 bg-card border rounded-2xl hover:border-foreground transition-all group shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
               <Mail className="h-5 w-5" />
             </div>
             <span className="font-semibold text-lg tracking-tight">Email</span>
          </div>
          <span className="text-sm text-muted-foreground mr-2 font-mono group-hover:text-foreground transition-colors">contact@yashbansod.com</span>
        </a>
        
        <a 
          href="https://linkedin.com/in/yash-bansod" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 bg-card border rounded-2xl hover:border-foreground transition-all group shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
               <Linkedin className="h-5 w-5" />
             </div>
             <span className="font-semibold text-lg tracking-tight">LinkedIn</span>
          </div>
          <span className="text-sm text-muted-foreground mr-2 font-mono group-hover:text-foreground transition-colors">@yash-bansod</span>
        </a>

        <a 
          href="https://twitter.com/yash_bansod" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 bg-card border rounded-2xl hover:border-foreground transition-all group shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
               <Twitter className="h-5 w-5" />
             </div>
             <span className="font-semibold text-lg tracking-tight">Twitter</span>
          </div>
          <span className="text-sm text-muted-foreground mr-2 font-mono group-hover:text-foreground transition-colors">@yash_bansod</span>
        </a>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 bg-foreground text-background border border-foreground rounded-2xl hover:scale-[1.02] transition-transform group shadow-md"
        >
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center">
               <FileText className="h-5 w-5" />
             </div>
             <span className="font-semibold text-lg tracking-tight">Resume</span>
          </div>
          <span className="text-sm text-background/80 mr-2 font-mono uppercase tracking-widest">Download PDF</span>
        </a>
      </div>
    </div>
  )
}
