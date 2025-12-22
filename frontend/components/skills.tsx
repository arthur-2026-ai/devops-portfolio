"use client"

import { useEffect, useState } from "react"

const skillCategories = [
  { title: "Cloud", skills: ["Amazon AWS", "Microsoft Azure", "Google Cloud", "Terraform"] },
  { title: "DevOps", skills: ["Jenkins", "GitLab", "GitHub Actions", "Ansible"] },
  { title: "Containers", skills: ["Docker", "Kubernetes", "Helm"] },
  { title: "Systems", skills: ["Linux", "Nginx", "Ubuntu", "Debian"] },
  { title: "Security", skills: ["Wireshark", "OpenVPN", "Cloudflare"] },
  { title: "Networks", skills: ["Cisco", "Ubiquiti", "Tailscale"] },
  { title: "Code", skills: ["Python", "Bash", "Go", "Kotlin"] },
  { title: "Monitoring", skills: ["Prometheus", "Grafana", "Elasticstack"] },
]

const ICON_MAP: Record<string, string> = {
  "Amazon AWS": "amazonaws",
  "Microsoft Azure": "microsoftazure",
  "Google Cloud": "googlecloud",
  "GitHub Actions": "githubactions",
  "Elasticstack": "elastic",
}

const getLogoUrl = (name: string) => {
  const slug = ICON_MAP[name] ?? name.toLowerCase().replace(/\s+/g, '')
  return `https://cdn.simpleicons.org/${slug}`
}

const allSkills = skillCategories.flatMap(cat => 
  cat.skills.map(s => ({ name: s, category: cat.title }))
)

const infiniteSkills = [...allSkills, ...allSkills, ...allSkills]

export function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="skills" className="py-24 bg-[#030712] overflow-hidden relative border-t border-white/5">
      
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            Stack <span className="text-primary italic">Technique_</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Flux d'outils et de technologies utilisés pour orchestrer des infrastructures haute disponibilité.
          </p>
        </div>
      </div>

      <div className="relative group">
        <div className="relative flex overflow-hidden py-8">
          
          {/* Utilisation de la classe définie dans globals.css */}
          <div className="animate-marquee-infinite whitespace-nowrap gap-6 cursor-pointer">
            {infiniteSkills.map((skill, idx) => (
              <div 
                key={`${skill.name}-${idx}`}
                className="flex items-center gap-4 px-6 py-4 min-w-[180px] md:min-w-[220px] rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group/item"
              >
                <div className="w-8 h-8 flex-shrink-0">
                  <img 
                    src={getLogoUrl(skill.name)} 
                    alt={skill.name}
                    className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-white font-bold text-sm md:text-base truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-primary/60 font-mono uppercase tracking-widest truncate">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dégradés de fondu */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}