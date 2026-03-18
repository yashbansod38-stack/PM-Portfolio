import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"

export const metadata = {
  title: "Build in Public | Yash Bansod",
  description: "Weekly progress updates and ships."
}

export default function BuildInPublicPage() {
  const logs = getAllPosts("build-in-public")
  
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 pb-40">
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Build in Public</h1>
        <p className="text-xl text-muted-foreground">
          Raw, unfiltered updates on what I'm building week by week. The grind, the bugs, the wins.
        </p>
      </div>

      <div className="relative border-l border-border/60 ml-3 md:ml-6 space-y-12 pb-8">
        {logs.map((log) => (
          <div key={log.slug} className="relative pl-8 md:pl-12 group">
            <div className="absolute w-4 h-4 rounded-full border-2 border-background bg-border group-hover:bg-foreground group-hover:scale-125 transition-all -left-[9px] md:-left-[9px] top-1.5" />
            <Link href={`/build-in-public/${log.slug}`} className="block">
              <time className="text-xs font-mono font-medium text-muted-foreground tracking-wider mb-2 block uppercase">
                {new Date(log.meta.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </time>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground/80 transition-colors">{log.meta.title}</h3>
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                {log.meta.summary}
              </p>
            </Link>
          </div>
        ))}
        {logs.length === 0 && (
          <div className="pl-8 text-muted-foreground">Add MDX files to /content/build-in-public to populate.</div>
        )}
      </div>
    </div>
  )
}
