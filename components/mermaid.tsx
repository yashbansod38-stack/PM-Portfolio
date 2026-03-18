"use client"

import { useEffect, useRef } from "react"
import mermaid from "mermaid"

mermaid.initialize({
  startOnLoad: true,
  theme: "neutral",
  securityLevel: "loose",
  fontFamily: "var(--font-inter)",
  flowchart: {
    curve: "basis",
    nodeSpacing: 60,
    rankSpacing: 60,
  }
})

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded()
      // Generate a unique ID for each chart
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg
        }
      })
    }
  }, [chart])

  return (
    <div className="flex justify-center my-12 overflow-x-auto no-scrollbar p-6 md:p-10 bg-gradient-to-br from-muted/30 to-muted/10 rounded-[32px] border border-border/60 shadow-sm relative group">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-border/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[32px]"></div>
      <div ref={ref} className="mermaid transition-opacity duration-500 relative z-10" />
    </div>
  )
}
