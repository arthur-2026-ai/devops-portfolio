"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Cloud, Container, Server, Network, Shield, GitBranch, Terminal, Database, Workflow, Code } from "lucide-react"

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Cloud", "Terraform"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Conteneurisation & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Docker Compose"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "CI/CD & Automatisation",
    icon: Workflow,
    skills: ["Jenkins", "GitLab CI", "GitHub Actions","Ansible"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Systèmes & Serveurs",
    icon: Server,
    skills: ["Linux (Ubuntu, CentOS, RHEL)", "Windows Server", "Nginx", "Apache", "Systemd"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Réseau & Sécurité",
    icon: Network,
    skills: ["TCP/IP", "DNS", "VPN", "Firewall", "Load Balancing", "SSL/TLS"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Sécurité & Conformité",
    icon: Shield,
    skills: ["Best practices", "Penetration Testing"],
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Versioning & Collaboration",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Scripting & Programmation",
    icon: Code,
    skills: ["Python", "Bash", "Kotlin", "YAML", "JSON"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Monitoring & Logging",
    icon: Terminal,
    skills: ["Prometheus", "Grafana"],
    color: "from-teal-500 to-green-500"
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    color: "from-violet-500 to-purple-500"
  },
]

export function Skills() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll(".skill-card")
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Enhanced background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        {/* Tech pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Code-like lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
              Compétences techniques
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-cyan-500 rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-pretty">
              Un ensemble complet de compétences pour concevoir, déployer et maintenir des infrastructures modernes.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              const isVisible = visibleCards.includes(index)
              
              return (
                <Card
                  key={index}
                  data-index={index}
                  className={`skill-card group relative p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Header */}
                  <div className="relative flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg flex-1 text-balance group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="relative flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                        style={{ 
                          animationDelay: `${(index * 100) + (skillIndex * 50)}ms`,
                          animation: isVisible ? 'fadeInScale 0.5s ease-out forwards' : 'none',
                          opacity: isVisible ? 1 : 0
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Et bien plus encore... Toujours en apprentissage continu ! 🚀
            </p>
            <div className="flex justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}