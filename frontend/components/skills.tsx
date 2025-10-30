import { Card } from "@/components/ui/card"
import { Cloud, Container, Server, Network, Shield, GitBranch, Terminal, Database, Workflow, Code } from "lucide-react"

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Cloud", "Terraform", "CloudFormation", "Pulumi"],
  },
  {
    title: "Conteneurisation & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm", "Docker Compose", "Rancher", "OpenShift"],
  },
  {
    title: "CI/CD & Automatisation",
    icon: Workflow,
    skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "Ansible", "CircleCI"],
  },
  {
    title: "Systèmes & Serveurs",
    icon: Server,
    skills: ["Linux (Ubuntu, CentOS, RHEL)", "Windows Server", "Nginx", "Apache", "Systemd"],
  },
  {
    title: "Réseau & Sécurité",
    icon: Network,
    skills: ["TCP/IP", "DNS", "VPN", "Firewall", "Load Balancing", "SSL/TLS"],
  },
  {
    title: "Sécurité & Conformité",
    icon: Shield,
    skills: ["Security Hardening", "Vault", "SIEM", "Compliance", "Penetration Testing"],
  },
  {
    title: "Versioning & Collaboration",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Git Flow", "Code Review"],
  },
  {
    title: "Scripting & Programmation",
    icon: Code,
    skills: ["Python", "Bash", "PowerShell", "Go", "YAML", "JSON"],
  },
  {
    title: "Monitoring & Logging",
    icon: Terminal,
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Splunk"],
  },
  {
    title: "Bases de données",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Database Backup"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Compétences techniques
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12 md:mb-16 max-w-2xl text-pretty">
            Un ensemble complet de compétences pour concevoir, déployer et maintenir des infrastructures modernes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg flex-1 text-balance">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
