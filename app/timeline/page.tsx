import * as motion from "framer-motion/client"
import { Calendar, Briefcase, GraduationCap, Ship } from "lucide-react"

export const metadata = {
  title: "Timeline | Yash Bansod",
  description: "My career progression and journey."
}

const timelineData = [
  {
    year: "2025",
    title: "Building AI Products",
    description: "Focusing entirely on building AI-native applications like AI Interview Gym and Product Strategy tools. Deepening skills in Next.js, LLMs, and System Design.",
    status: "active",
    icon: <Ship className="w-4 h-4" />
  },
  {
    year: "2024",
    title: "Senior Supply Executive @ NoBroker",
    description: "Drove operational strategies, automated repetitive supply tasks, and managed massive scale. Learned the true value of operational efficiency and user problem solving.",
    status: "past",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    year: "2023",
    title: "Sales & Operations",
    description: "Hands-on experience speaking directly with customers, closing deals, and managing ground-level operations. Realized the disconnect between what businesses build and what users actually need.",
    status: "past",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    year: "2022",
    title: "Marketing Internship",
    description: "Explored the growth side of business. Learned how to position products, track analytics, and optimize conversion funnels.",
    status: "past",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    year: "2019",
    title: "Started Mechanical Engineering",
    description: "Began my degree in Mechanical Engineering. Built a strong foundation in physics, mathematics, and systems thinking.",
    status: "past",
    icon: <GraduationCap className="w-4 h-4" />
  }
]

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-6 py-20 pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 relative inline-block">
          Timeline
          <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-foreground rounded-full"></div>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light mt-6">My journey from engineering systems to building AI products.</p>
      </motion.div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:left-5 before:md:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/60 before:to-transparent">
        {timelineData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            {/* Dot */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-background z-20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors duration-300 ${item.status === 'active' ? 'bg-foreground text-background scale-110 shadow-glow' : 'bg-muted group-hover:bg-foreground/10 text-muted-foreground group-hover:text-foreground'}`}>
              {item.icon}
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-premium hover:border-foreground/30 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <span className="font-mono text-[10px] tracking-widest font-bold text-muted-foreground bg-muted px-2 py-1 rounded-full uppercase w-fit">{item.year}</span>
                {item.status === 'active' && (
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                    </span>
                    CURRENT
                  </span>
                )}
              </div>
              <h3 className="font-bold text-xl md:text-2xl tracking-tight mb-3 transition-colors group-hover:text-foreground/90">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
