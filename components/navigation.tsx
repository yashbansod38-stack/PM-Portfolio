"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const navItems = {
  "/": { name: "Home" },
  "/projects": { name: "Projects" },
  "/writings": { name: "Writings" },
  "/about": { name: "About" },
}

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar md:overflow-visible pr-4 md:pr-0">
          <nav className="flex items-center gap-4 md:gap-6">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path || pathname?.startsWith(`${path}/`) && path !== "/"
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "relative text-[13px] md:text-sm font-medium transition-colors hover:text-foreground shrink-0 whitespace-nowrap",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-[19px] md:-bottom-[21px] left-0 h-[2px] w-full bg-foreground"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-6 shrink-0 ml-4">
          <Link
            href="/contact"
            className={cn(
              "text-[13px] md:text-sm font-medium transition-colors hover:text-foreground hidden sm:block",
              pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Contact
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
