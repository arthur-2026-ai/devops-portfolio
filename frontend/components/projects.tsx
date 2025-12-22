"use client"

import { ExternalLink, Github, Layers } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Infrastructure Cloud Multi-Région",
    description:
      "Conception et déploiement d'une infrastructure hautement disponible sur AWS avec Terraform, incluant auto-scaling et disaster recovery.",
    tags: ["AWS", "Terraform", "Kubernetes", "CloudFormation"],
    image: "/cloud-infrastructure-dashboard-with-aws-services.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Pipeline CI/CD Automatisé",
    description:
      "Mise en place d'un pipeline complet avec GitLab CI, tests automatisés, déploiement blue-green et rollback automatique.",
    tags: ["GitLab CI", "Docker", "Kubernetes", "ArgoCD"],
    image: "/ci-cd-pipeline-visualization-with-deployment-stage.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Plateforme de Monitoring",
    description:
      "Déploiement d'une stack complète de monitoring avec Prometheus, Grafana, Loki et Alertmanager pour surveiller 100+ services.",
    tags: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
    image: "/monitoring-dashboard-with-graphs-and-metrics.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Automatisation avec Ansible",
    description:
      "Collection de playbooks Ansible pour automatiser le provisioning, la configuration et le déploiement de serveurs hybrides.",
    tags: ["Ansible", "Python", "Linux", "Windows"],
    image: "/automation-workflow-with-server-configuration.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Cluster Kubernetes Production",
    description:
      "Gestion d'un cluster Kubernetes multi-nœuds avec Helm, Ingress Controller, cert-manager et politiques de sécurité.",
    tags: ["Kubernetes", "Helm", "Istio", "Security"],
    image: "/kubernetes-architecture.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Infrastructure as Code (IaC)",
    description:
      "Projet d'infrastructure as code incluant réseau, sécurité, compute et stockage sur plusieurs cloud providers.",
    tags: ["Terraform", "Ansible", "Multi-Cloud", "IaC"],
    image: "/infrastructure-as-code-diagram-with-cloud-resource.jpg",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
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
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
      id="projects" 
      className="py-24 bg-white relative overflow-hidden"
      aria-label="Projets et réalisations"
    >
     
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
              Projets & <span className="text-[#0073d5] relative">
                Réalisations_
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0073d5]/20"></span>
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl text-base md:text-lg leading-relaxed">
              Une sélection de travaux techniques démontrant mon expertise en 
              <span className="text-[#0073d5] font-semibold"> orchestration</span>, 
              <span className="text-[#0073d5] font-semibold"> automatisation</span> et 
              <span className="text-[#0073d5] font-semibold"> sécurité</span>.
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#0073d5] to-[#0073d5]/40 rounded-full mt-6 mx-auto md:mx-0"></div>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Liste des projets"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,115,213,0.2)] hover:border-[#0073d5]/40 hover:-translate-y-2 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                role="listitem"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay avec icône au survol */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Layers size={28} className="text-[#0073d5]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0073d5]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0073d5] group-hover:scale-110 transition-all duration-300">
                      <Layers size={18} className="text-[#0073d5] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0073d5] transition-colors leading-tight pt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-base text-slate-600 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wide hover:bg-[#0073d5]/10 hover:text-[#0073d5] hover:border-[#0073d5]/30 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 text-sm font-bold uppercase tracking-wide group/btn"
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0073d5] text-white hover:bg-[#0073d5]/90 hover:shadow-lg hover:shadow-[#0073d5]/30 transition-all duration-300 text-sm font-bold uppercase tracking-wide group/btn"
                    >
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      <span>Détails</span>
                    </a>
                  </div>
                </div>

                {/* Effet de brillance */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_ease-in-out]"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-20 text-center">
            <p className="text-base text-slate-600 mb-5 font-medium">
              Plus de projets disponibles sur demande
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-[#0073d5] text-slate-700 hover:text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#0073d5]/20 group"
            >
              <span>Me contacter</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
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