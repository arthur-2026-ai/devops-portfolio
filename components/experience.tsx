import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Ingénieur DevOps Senior",
    company: "Tech Solutions Inc.",
    period: "2022 - Présent",
    description:
      "Conception et mise en œuvre d'infrastructures cloud scalables sur AWS et Azure. Migration de services monolithiques vers une architecture microservices avec Kubernetes.",
    achievements: [
      "Réduction de 60% du temps de déploiement grâce à l'automatisation CI/CD",
      "Mise en place d'une infrastructure as code avec Terraform",
      "Optimisation des coûts cloud de 40%",
    ],
  },
  {
    title: "Administrateur Système & Réseau",
    company: "Digital Services Corp.",
    period: "2019 - 2022",
    description:
      "Administration de l'infrastructure réseau et des serveurs Linux/Windows. Gestion de la sécurité et de la haute disponibilité des services critiques.",
    achievements: [
      "Déploiement d'une solution de monitoring avec Prometheus et Grafana",
      "Mise en place de politiques de sécurité et conformité ISO 27001",
      "Automatisation des tâches répétitives avec Ansible",
    ],
  },
  {
    title: "Ingénieur Système Junior",
    company: "StartUp Innovante",
    period: "2017 - 2019",
    description:
      "Support et maintenance des infrastructures. Participation à la migration vers le cloud et à la conteneurisation des applications.",
    achievements: [
      "Containerisation de 15+ applications avec Docker",
      "Mise en place d'un système de backup automatisé",
      "Documentation technique complète de l'infrastructure",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Expérience professionnelle
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 md:mb-16 text-pretty">
            Mon parcours dans le domaine de l'infrastructure et du DevOps.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-balance">{exp.title}</h3>
                        <p className="text-base text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground md:ml-4">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Réalisations clés :</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span className="flex-1 text-pretty">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
