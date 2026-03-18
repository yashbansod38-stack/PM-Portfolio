import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { MDXContent } from "@/components/mdx-content"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  const posts = getAllPosts("projects")
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug, "projects")
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.meta.title} | Yash Bansod`,
    description: post.meta.summary,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug, "projects")
  
  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-4xl px-4 md:px-6 pt-16 pb-32">
      <Link href="/projects" className="group inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Products
      </Link>
      
      {/* Hero Section of the Case Study */}
      <div className="mb-16 border-b border-border/40 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Live Production
          </span>
          <time dateTime={post.meta.publishedAt} className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            {new Date(post.meta.publishedAt).getFullYear()}
          </time>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1] text-foreground">{post.meta.title}</h1>
        
        <p className="text-2xl text-muted-foreground font-light mb-10 leading-relaxed max-w-3xl">
          {post.meta.summary}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Stack</span>
            <div className="flex gap-2 flex-wrap">
              {post.meta.tags?.map(tag => (
                <span key={tag} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-foreground border border-border/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Links</span>
            <div className="flex items-center gap-4">
               <a href="#" className="inline-flex items-center text-sm font-semibold hover:text-foreground/70 text-foreground transition-colors">
                  <ExternalLink className="mr-1.5 h-4 w-4" /> Live App
               </a>
               <a href="#" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="mr-1.5 h-4 w-4" /> Repository
               </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Placeholder for Top of Case Study */}
      <div className="w-full aspect-video bg-muted/30 border rounded-3xl mb-16 flex items-center justify-center overflow-hidden relative shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-foreground/5 mix-blend-overlay"></div>
        <Layers className="w-16 h-16 text-muted-foreground/30" />
        <div className="absolute bottom-4 right-4 text-[10px] font-mono tracking-widest text-muted-foreground uppercase opacity-50">System Architecture</div>
      </div>

      <div className={cn("mt-10 mx-auto", post.meta.bespoke ? "max-w-none" : "max-w-3xl prose-article")}>
        <MDXContent source={post.content} />
      </div>
    </article>
  )
}
