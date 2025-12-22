"use client"

import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Ingénieur DevOps",
    company: "Orion",
    period: "2024 - Présent",
    description:
      "Conception et mise en œuvre d'infrastructures cloud scalables sur AWS et serveurs locaux. Migration de services monolithiques vers une architecture microservices avec Kubernetes.",
    achievements: [
      "Réduction de 60% du temps de déploiement (CI/CD)",
      "Déploiement du monitoring Prometheus & Grafana",
      "Mise en conformité sécurité ISO 27001",
      "Automatisation complète via Ansible",
    ],
  },
  {
    title: "Administrateur Système & Réseau",
    company: "PARADIS INFORMATIQUE",
    period: "2023 - 2024",
    description:
      "Administration de l'infrastructure réseau et des serveurs Linux/Windows. Focus sur la haute disponibilité et la sécurité périmétrique.",
    achievements: [
      "Infrastructure réseau pour +20 clients pros",
      "Configuration Pfsense et VPN sécurisés",
      "Gestion de la disponibilité des services critiques",
    ],
  },
  {
    title: "Stagiaire Administrateur Réseau",
    company: "Vision Canada Immigration",
    period: "2022 - 2023",
    description:
      "Support technique et maintenance préventive du parc informatique.",
    achievements: [
      "Maintenance parc Windows et Mac",
      "Mise à jour des applications métiers",
      "Support utilisateur niveau 1 et 2",
    ],
  },
]

export function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section 
      id="experience" 
      className="py-24 bg-white relative overflow-hidden"
      aria-label="Parcours professionnel"
    >
      {/* Background Decoratif Subtile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0073d5]/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#0073d5]/3 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header avec animation */}
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Parcours <span className="text-[#0073d5] relative">
                Professionnel_
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0073d5]/20"></span>
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#0073d5] to-[#0073d5]/40 rounded-full mx-auto md:mx-0 animate-pulse"></div>
          </div>

          {/* Timeline Structure */}
          <div 
            className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#0073d5]/40 before:via-slate-200 before:to-slate-100"
            role="list"
            aria-label="Liste des expériences professionnelles"
          >
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                role="listitem"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Pastille Timeline avec animation */}
                <div 
                  className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-[#0073d5] group-hover:text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#0073d5]/20"
                  aria-hidden="true"
                >
                  <Briefcase size={16} className="group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Carte Experience avec effets améliorés */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0073d5]/50 transition-all duration-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_35px_-5px_rgba(0,115,213,0.15)] hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#0073d5]/[0.02] relative overflow-hidden">
                  
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_ease-in-out]"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col gap-2 mb-5">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} className="text-[#0073d5]" />
                        <span className="text-xs font-bold text-[#0073d5] uppercase tracking-wider font-mono">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight group-hover:text-[#0073d5] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-slate-500 font-semibold flex items-center gap-2 text-base">
                        <span className="w-2 h-2 rounded-full bg-[#0073d5] group-hover:animate-pulse"></span>
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div 
                          key={achIndex} 
                          className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
                        >
                          <CheckCircle2 
                            size={16} 
                            className="text-[#0073d5] mt-1 shrink-0 opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300" 
                          />
                          <span className="text-sm text-slate-600 group-hover/item:text-slate-900 transition-colors duration-300 leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Badge décoratif pour les positions actuelles */}
                  {exp.period.includes("Présent") && (
                    <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-[#0073d5]/10 border border-[#0073d5]/20">
                      <span className="text-[10px] font-bold text-[#0073d5] uppercase tracking-wider">Actuel</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA subtil */}
          <div className="mt-20 text-center">
            <p className="text-base text-slate-600 mb-5 font-medium">
              Intéressé par mon parcours ?
            </p>
            <a href="/Fotso-CV.pdf" download rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-[#0073d5] text-slate-700 hover:text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#0073d5]/20 group">
              <span>Télécharger mon CV</span>
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
      `}</style>
    </section>
  )
}