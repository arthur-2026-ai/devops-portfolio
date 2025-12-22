"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

const highlights = [
  { slug: "terraform", title: "Automatisation", description: "CI/CD & Infrastructure as Code" },
  { slug: "icloud", title: "Cloud Expert", description: "AWS, Azure" },
  { slug: "docker", title: "Conteneurs", description: "Docker, Kubernetes Orchestration" },
  { slug: "springsecurity", title: "Sécurité", description: "DevSecOps & Durcissement Système" },
  { slug: "prometheus", title: "Monitoring", description: "Observabilité & Optimisation" },
  { slug: "contabo", title: "Collaboration", description: "Méthodologies Agile & DevOps" }
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [dots, setDots] = useState<{ left: string; top: string; delay: string; duration: string }[]>([])
  const [isChecking, setIsChecking] = useState(false)
  const [statusLogs, setStatusLogs] = useState<string[]>([])

  useEffect(() => {
    const generatedDots = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 10}s`,
    }))
    setDots(generatedDots)

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    const section = document.getElementById("about")
    if (section) observer.observe(section)
    return () => { if (section) observer.unobserve(section) }
  }, [])

  const checkSystems = () => {
    setIsChecking(true)
    setStatusLogs([])
    const logs = [
      "Initialisation du diagnostic système...",
      "Ping: Cloud Gateway -> 14ms",
      "Vérification des clusters Kubernetes... Online",
      "Statut : Tous les systèmes sont opérationnels."
    ]
    logs.forEach((log, index) => {
      setTimeout(() => {
        setStatusLogs(prev => [...prev, log])
        if (index === logs.length - 1) setIsChecking(false)
      }, index * 600)
    })
  }

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-[#030712]">
      {/* Background Decoratif avec ton bleu #0073d5 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#0073d5]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#0073d5]/5 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
        
        <div className="absolute inset-0">
          {dots.map((dot, i) => (
            <div key={i} className="absolute w-1 h-1 bg-[#0073d5]/30 rounded-full animate-float-dot"
              style={{ left: dot.left, top: dot.top, animationDelay: dot.delay, animationDuration: dot.duration }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              À propos de <span className="text-[#0073d5] font-mono tracking-tighter">moi_</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#0073d5] rounded-full shadow-[0_0_15px_rgba(0,115,213,0.5)]"></div>
          </div>

          <div className={`space-y-6 text-lg text-gray-400 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-pretty">
              Je suis un <span className="text-white font-semibold bg-[#0073d5]/20 px-2 py-0.5 rounded border border-[#0073d5]/30">Ingénieur DevOps</span> et{" "}
              <span className="text-white font-semibold bg-white/5 px-2 py-0.5 rounded border border-white/10">Administrateur Réseau</span>.
            </p>
            <p>
              Passionné par la conception d'architectures résilientes, je transforme des infrastructures complexes en systèmes fluides et sécurisés grâce à l'IaC et aux pipelines CI/CD.
            </p>
          </div>

          {/* Interaction Terminal avec accent #0073d5 */}
          <div className={`mt-10 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={checkSystems}
              disabled={isChecking}
              className="group relative flex items-center gap-2 px-6 py-2.5 font-mono text-sm border border-[#0073d5]/40 text-[#0073d5] rounded-lg hover:bg-[#0073d5] hover:text-white transition-all active:scale-95 disabled:opacity-50 shadow-[0_0_20px_rgba(0,115,213,0.1)] hover:shadow-[0_0_20px_rgba(0,115,213,0.4)]"
            >
              <Terminal size={18} className={isChecking ? "animate-spin" : ""} />
              {isChecking ? "VÉRIFICATION..." : "RUN_DIAGNOSTIC.SH"}
            </button>

            {statusLogs.length > 0 && (
              <div className="mt-6 p-5 bg-[#050505]/80 backdrop-blur-md rounded-xl border border-[#0073d5]/20 font-mono text-xs md:text-sm shadow-2xl">
                <div className="space-y-1.5">
                  {statusLogs.map((log, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[#0073d5] opacity-50">[{new Date().toLocaleTimeString([], {hour12:false})}]</span>
                      <span className={i === statusLogs.length - 1 ? "text-[#0073d5] font-bold" : "text-gray-400"}>
                        {i === statusLogs.length - 1 ? "✔ " : "> "}{log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Grille de compétences avec ta couleur #0073d5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#0073d5]/60 transition-all duration-500 hover:-translate-y-2 hover:bg-[#0073d5]/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="bg-[#0073d5]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0073d5] transition-all duration-500 p-2.5">
                  <img 
                    src={`https://cdn.simpleicons.org/${item.slug}/ececec`} 
                    alt={item.title}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-200 transition-all duration-500"
                  />
                </div>
                <h3 className="text-white font-bold mb-1 italic uppercase tracking-wider text-sm group-hover:text-[#0073d5] transition-colors">{item.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{item.description}</p>
                
                {/* Petite barre décorative subtile au hover */}
                <div className="w-0 group-hover:w-full h-0.5 bg-[#0073d5] mt-4 transition-all duration-500 opacity-50"></div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float-dot {
          0%, 100% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-40px); opacity: 0.6; }
        }
        .animate-float-dot { animation: float-dot linear infinite; }
        .animate-pulse-slow { animation: pulse 8s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
      `}</style>
    </section>
  )
}