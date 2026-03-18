import { MDXRemote } from "next-mdx-remote/rsc"
import { HTMLAttributes } from "react"
import { Layers } from "lucide-react"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import { cn } from "@/lib/utils"
import { MermaidWrapper } from "./mermaid-wrapper"
import { ProjectEffects } from "./project-effects"
const components = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("mt-14 mb-6 text-4xl leading-tight font-bold tracking-tighter text-foreground", props.className)} {...props} />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("mt-12 mb-6 text-2xl font-bold tracking-tight text-foreground border-b border-border/30 pb-2", props.className)} {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("mt-8 mb-4 text-xl font-semibold tracking-tight text-foreground", props.className)} {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-relaxed [&:not(:first-child)]:mt-6 text-muted-foreground text-lg", props.className)} {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-3 text-muted-foreground text-lg marker:text-foreground/50", props.className)} {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-3 text-muted-foreground text-lg marker:text-foreground/50", props.className)} {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("pl-2", props.className)} {...props} />
  ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className={cn("mt-10 mb-10 border-l-[3px] border-foreground pl-8 text-foreground font-medium text-2xl tracking-tight leading-snug italic", props.className)} {...props} />
  ),
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a className={cn("font-semibold text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-all", props.className)} {...props} />
  ),
  strong: (props: HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-bold text-foreground", props.className)} {...props} />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => {
    const { className, children, ...rest } = props
    if (className === "language-mermaid") {
      return <MermaidWrapper chart={children as string} />
    }
    return (
      <code 
        className={cn(
          "relative rounded bg-muted/50 px-[0.4rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground border border-border/50",
          className
        )} 
        {...rest} 
      >
        {children}
      </code>
    )
  },
  table: (props: HTMLAttributes<HTMLTableElement>) => (
    <div className="my-10 w-full overflow-hidden rounded-3xl border border-border/60 bg-card/50 shadow-sm">
      <div className="overflow-x-auto">
        <table className={cn("w-full border-collapse text-left text-sm", props.className)} {...props} />
      </div>
    </div>
  ),
  thead: (props: HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("bg-muted/40 border-b border-border/60 text-muted-foreground", props.className)} {...props} />
  ),
  th: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <th className={cn("px-6 py-4 font-bold uppercase tracking-widest text-[11px]", props.className)} {...props} />
  ),
  td: (props: HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn("px-6 py-4 border-b border-border/20 last:border-0 font-medium text-foreground/90", props.className)} {...props} />
  ),
  hr: (props: HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn("my-12 border-border/40", props.className)} {...props} />
  ),
  img: (props: HTMLAttributes<HTMLImageElement>) => (
    <div className="my-8 overflow-hidden rounded-2xl border border-border/40 shadow-sm">
      <img className={cn("w-full h-auto", props.className)} {...props} />
    </div>
  ),
  ProjectEffects,
  Layers,
} 

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="mdx-content max-w-none">
      <MDXRemote 
        source={source} 
        components={components} 
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          }
        }}
      />
    </div>
  )
}
