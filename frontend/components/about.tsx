"use client"

import { useEffect, useState } from "react"
import { Code2, Cloud, Server, Shield, Zap, Users } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("about")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const highlights = [
    {
      icon: Code2,
      title: "Automatisation",
      description: "CI/CD, Infrastructure as Code",
      color: "text-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud Expert",
      description: "AWS, Azure, GCP",
      color: "text-cyan-500"
    },
    {
      icon: Server,
      title: "Conteneurisation",
      description: "Docker, Kubernetes",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "DevSecOps, Best Practices",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation & Monitoring",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Équipes & Méthodologies Agile",
      color: "text-pink-500"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern-about opacity-[0.03]"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-primary/10 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-cyan-500/10 rounded-br-3xl"></div>
      </div>
      
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(20px, 30px); }
        }
        .animate-float-slow {
          animation: float-slow 25s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.15; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .bg-grid-pattern-about {
          background-image: 
            linear-gradient(to right, hsl(var(--primary) / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        @keyframes float-dot {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-40px) translateX(-10px); opacity: 0.3; }
          75% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        .animate-float-dot {
          animation: float-dot linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title with animated underline */}
          <div className={`mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              À propos de moi
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-cyan-500 rounded-full"></div>
          </div>

          {/* Main content */}
          <div className={`space-y-6 text-base md:text-lg text-white leading-relaxed mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-pretty">
              Je suis un <span className="text-foreground font-semibold bg-primary/10 px-2 py-1 rounded">Ingénieur DevOps</span> et{" "}
              <span className="text-foreground font-semibold bg-cyan-500/10 px-2 py-1 rounded">Administrateur Réseau/Système</span> passionné par la
              création d'infrastructures modernes et performantes. Mon expertise couvre l'ensemble du cycle de vie des
              applications, de la conception à la production.
            </p>
            <p className="text-pretty">
              Avec une solide expérience dans l'automatisation des déploiements, la gestion d'infrastructures cloud
              (AWS, Azure, GCP) et la conteneurisation (Docker, Kubernetes), je m'efforce de mettre en place des
              solutions qui améliorent la fiabilité, la sécurité et l'efficacité des systèmes.
            </p>
            <p className="text-pretty">
              Mon approche combine expertise technique approfondie et vision stratégique pour accompagner les équipes
              dans leur transformation digitale. Je crois fermement en l'importance de la collaboration, de
              l'amélioration continue et du partage de connaissances.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-background to-muted group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
                </div>
              )
            })}
          </div>

          {/* Stats section */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1+</div>
              <div className="text-sm text-muted-foreground">Années d'expérience</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:border-cyan-500/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:border-purple-500/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies maîtrisées</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:border-green-500/50 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Uptime garanti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}