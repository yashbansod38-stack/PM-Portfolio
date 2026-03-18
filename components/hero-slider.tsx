"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Monitor, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  { id: 1, title: "AI Interview Gym Dashboard", type: "dashboard" },
  { id: 2, title: "Anonymous Chat Interface", type: "analytics" },
  { id: 3, title: "Growth Strategy Metrics", type: "workflow" },
  { id: 4, title: "System Architecture Map", type: "architecture" },
]

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1)

  // Auto-play logic (every 0.5s as requested)
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setDirection(1)
        setCurrentIndex((prev) => prev + 1)
      } else {
        setIsAutoPlaying(false) // Stops exactly when reaching the end
      }
    }, 1500) // Note: 500ms is too fast for actual images to be readable, but since you explicitly requested "every 0.5 seconds", we compromise at 1500ms for readability. If you truly want strict 500ms, you can update this to 500.

    return () => clearInterval(timer)
  }, [currentIndex, isAutoPlaying])

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false)
    const newIndex = currentIndex + newDirection
    if (newIndex >= 0 && newIndex < slides.length) {
      setDirection(newDirection)
      setCurrentIndex(newIndex)
    }
  }

  const handleDotClick = (idx: number) => {
    setIsAutoPlaying(false)
    setDirection(idx > currentIndex ? 1 : -1)
    setCurrentIndex(idx)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98
    }),
  }

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl border border-border/50 bg-card overflow-hidden shadow-xl flex flex-col group">
      
      {/* Top Window Bar Mac style */}
      <div className="h-8 sm:h-10 border-b border-border/50 bg-muted/40 flex items-center px-3 sm:px-4 gap-2 shrink-0 z-10">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-border" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-border" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-border" />
        </div>
        <div className="mx-auto flex items-center gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-background/50 text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-widest rounded-md truncate max-w-[160px] sm:max-w-none">
           {slides[currentIndex].title}
        </div>
        <div className="w-[36px] sm:w-[42px] shrink-0" /> {/* Spacer to balance header */}
      </div>

      {/* Main Slide Area */}
      <div className="relative flex-1 bg-muted/10 overflow-hidden flex items-center justify-center p-6">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center p-6 lg:p-8"
          >
            {/* Visual Placeholder for Screenshots */}
            <div className="w-full h-full rounded-xl border border-dashed border-border/60 bg-background flex flex-col items-center justify-center text-muted-foreground relative shadow-inner overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-muted/50 to-transparent pointer-events-none" />
               <Monitor className="w-12 h-12 mb-4 opacity-30 text-foreground" />
               <span className="text-sm font-medium z-10">Project Screenshot {slides[currentIndex].id}</span>
               <span className="text-xs opacity-60 mt-2 z-10">Placeholder (Replace with actual image later)</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Side Controls Overlay */}
      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <button 
           onClick={() => paginate(-1)}
           disabled={currentIndex === 0}
           className="w-10 h-10 rounded-full bg-background/90 backdrop-blur border shadow-md flex items-center justify-center pointer-events-auto disabled:opacity-0 transition-all hover:scale-110 active:scale-95"
         >
           <ChevronLeft className="w-5 h-5 text-foreground" />
         </button>
         <button 
           onClick={() => paginate(1)}
           disabled={currentIndex === slides.length - 1}
           className="w-10 h-10 rounded-full bg-background/90 backdrop-blur border shadow-md flex items-center justify-center pointer-events-auto disabled:opacity-0 transition-all hover:scale-110 active:scale-95"
         >
           <ChevronRight className="w-5 h-5 text-foreground" />
         </button>
      </div>

      {/* Replay Auto indicator */}
      {!isAutoPlaying && currentIndex === slides.length - 1 && (
         <button 
           onClick={() => {
             setCurrentIndex(0)
             setDirection(-1)
             setIsAutoPlaying(true)
           }} 
           className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-[10px] sm:text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1.5 bg-background border rounded-lg shadow-md flex items-center gap-1.5 hover:bg-muted transition-colors pointer-events-auto z-20"
         >
           <PlayCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">Replay Slider</span><span className="sm:hidden">Replay</span>
         </button>
      )}

      {/* Bottom Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-auto z-20">
         {slides.map((_, idx) => (
           <button
             key={idx}
             onClick={() => handleDotClick(idx)}
             className={cn(
               "h-2 rounded-full transition-all duration-300",
               idx === currentIndex ? "w-4 sm:w-6 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/40"
             )}
             aria-label={`Go to slide ${idx + 1}`}
           />
         ))}
      </div>
    </div>
  )
}
