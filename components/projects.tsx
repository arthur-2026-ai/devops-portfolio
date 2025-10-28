import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Infrastructure Cloud Multi-Région",
    description:
      "Conception et déploiement d'une infrastructure hautement disponible sur AWS avec Terraform, incluant auto-scaling, load balancing et disaster recovery.",
    tags: ["AWS", "Terraform", "Kubernetes", "CloudFormation"],
    image: "/cloud-infrastructure-dashboard-with-aws-services.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Pipeline CI/CD Automatisé",
    description:
      "Mise en place d'un pipeline complet avec GitLab CI, tests automatisés, déploiement blue-green et rollback automatique en cas d'échec.",
    tags: ["GitLab CI", "Docker", "Kubernetes", "ArgoCD"],
    image: "/ci-cd-pipeline-visualization-with-deployment-stage.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Plateforme de Monitoring",
    description:
      "Déploiement d'une stack complète de monitoring avec Prometheus, Grafana, Loki et Alertmanager pour surveiller 100+ services en production.",
    tags: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
    image: "/monitoring-dashboard-with-graphs-and-metrics.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Automatisation avec Ansible",
    description:
      "Collection de playbooks Ansible pour automatiser le provisioning, la configuration et le déploiement de serveurs Linux et Windows.",
    tags: ["Ansible", "Python", "Linux", "Windows Server"],
    image: "/automation-workflow-with-server-configuration.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Cluster Kubernetes Production",
    description:
      "Déploiement et gestion d'un cluster Kubernetes multi-nœuds avec Helm, Ingress Controller, cert-manager et politiques de sécurité avancées.",
    tags: ["Kubernetes", "Helm", "Istio", "Security"],
    image: "/kubernetes-architecture.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Projet complet d'infrastructure as code avec Terraform et Ansible, incluant réseau, sécurité, compute et stockage sur plusieurs cloud providers.",
    tags: ["Terraform", "Ansible", "Multi-Cloud", "IaC"],
    image: "/infrastructure-as-code-diagram-with-cloud-resource.jpg",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Projets & Réalisations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 md:mb-16 max-w-2xl text-pretty">
            Une sélection de projets qui démontrent mon expertise en DevOps et administration système.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-balance">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Détails
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
