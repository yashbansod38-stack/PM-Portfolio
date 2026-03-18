"use client"

import dynamic from "next/dynamic"

const Mermaid = dynamic(() => import("./mermaid"), { ssr: false })

export function MermaidWrapper({ chart }: { chart: string }) {
  return <Mermaid chart={chart} />
}
