import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"
import { FileText, ArrowUpRight, Clock } from "lucide-react"

export const metadata = {
  title: "Writings | Yash Bansod",
  description: "Essays on product strategy, AI, and operations."
}

const pmCases = [
  {
    title: "Improving Creator Growth on Instagram",
    type: "Instagram PM Case",
    summary: "Designed a growth strategy to increase traffic to creator profiles by identifying gaps in discovery, content quality, and algorithm understanding.",
    focusAreas: ["User segmentation & JTBD", "KPI tree & growth metrics", "Problem → hypothesis → solution"],
    doc: "/documents/Instagram PM Case.pdf",
    comingSoon: false,
  },
  {
    title: "Breaking Down Notion's Product System",
    type: "Product Teardown",
    summary: "Analyzed Notion's database product to understand user needs, competitive positioning, and product-market fit.",
    focusAreas: ["User personas", "Competitive analysis", "Product improvements"],
    doc: "/documents/Product Teardown.pdf",
    comingSoon: false,
  },
]

const pmWritings = [
  {
    title: "Product Improvement Case",
    type: "Product Improvement Case",
    summary: "A structured deep-dive into a real product, identifying user pain points, defining the right metric to move, and designing a targeted improvement.",
    focusAreas: ["User segmentation & JTBD", "KPI tree & success metrics", "Problem → hypothesis → solution"],
    comingSoon: true,
  },
  {
    title: "AI Product Improvement Case",
    type: "AI Product Improvement Case",
    summary: "Making AI more reliable, usable, and human-aligned — addressing alignment gaps and UX failures that prevent AI products from reaching their potential.",
    focusAreas: ["AI output evaluation", "User trust & adoption", "Feedback-driven iteration"],
    comingSoon: true,
  },
  {
    title: "PM Writing Piece",
    type: "PM Essay",
    summary: "A product thinking essay exploring why most products in a category fail — not from bad ideas, but from a lack of clarity, user understanding, and retention design.",
    focusAreas: ["Product strategy", "Retention systems", "Clarity over features"],
    comingSoon: true,
  },
  {
    title: "Product Requirement Document (PRD)",
    type: "PRD",
    summary: "A full-format PRD for a real or hypothetical feature — structured with objective, user segments, requirements, success metrics, and tradeoff analysis.",
    focusAreas: ["Feature scoping", "Success metrics", "Trade-off analysis"],
    comingSoon: true,
  },
]

export default function WritingsPage() {
  const writings = getAllPosts("writings")
  
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-20 pb-40">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Writings</h1>
        <p className="text-xl text-muted-foreground">
          My thoughts on product strategy, building AI capabilities, and systemic operations thinking.
        </p>
      </div>

      {/* PM Case Studies Section */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold tracking-tight">PM Case Studies</h2>
          <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 bg-muted text-muted-foreground rounded-full border border-border/40">Documents</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pmCases.map((c) => (
            <a
              key={c.title}
              href={c.doc}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-6 rounded-2xl border border-border/40 bg-muted/10 p-7 hover:bg-muted/30 hover:border-border transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground block mb-2">{c.type}</span>
                    <h3 className="text-xl font-bold tracking-tight leading-snug group-hover:text-foreground/80 transition-colors">{c.title}</h3>
                  </div>
                  <div className="shrink-0 mt-1 p-2 rounded-lg bg-muted border border-border/40 group-hover:border-foreground/20 transition-colors">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.summary}</p>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-1">Focus Areas</span>
                  {c.focusAreas.map((area) => (
                    <span key={area} className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-foreground/30 shrink-0"></span>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all">
                Read Document <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8 pt-10 border-t border-border/40">
        <h2 className="text-2xl font-bold tracking-tight">Essays</h2>
      </div>

      {/* MDX Essays */}
      <div className="flex flex-col">
        {writings.map((writing) => (
          <Link key={writing.slug} href={`/writings/${writing.slug}`} className="group py-8 border-b border-border/40 transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-xl flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-foreground/80">{writing.meta.title}</h3>
              <p className="text-muted-foreground text-md leading-relaxed mb-4 md:mb-0">
                {writing.meta.summary}
              </p>
              <div className="flex gap-2 mt-4">
                {writing.meta.tags?.map(tag => (
                  <span key={tag} className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <time className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {new Date(writing.meta.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </Link>
        ))}
        {writings.length === 0 && (
          <div className="text-center py-20 border rounded-2xl border-dashed">
            <p className="text-muted-foreground">Add MDX files to /content/writings to see them here.</p>
          </div>
        )}
      </div>



      {/* PM Thinking Pieces — hidden for now */}
    </div>
  )
}
