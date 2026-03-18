import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { MDXContent } from "@/components/mdx-content"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getAllPosts("build-in-public")
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug, "build-in-public")
  if (!post) return { title: 'Not Found' }
  return {
    title: `${post.meta.title} | Build in Public`,
    description: post.meta.summary,
  }
}

export default async function BuildInPublicEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug, "build-in-public")
  
  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6 pt-16 pb-32">
      <Link href="/build-in-public" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to logs
      </Link>
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-6">{post.meta.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border/40">
          <time dateTime={post.meta.publishedAt}>
            {new Date(post.meta.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" })}
          </time>
          {post.meta.tags && post.meta.tags.length > 0 && (
            <>
              <span>•</span>
              <div className="flex gap-2">
                {post.meta.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="mt-10">
        <MDXContent source={post.content} />
      </div>
    </article>
  )
}
