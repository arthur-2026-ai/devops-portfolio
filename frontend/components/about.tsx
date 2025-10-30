export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-balance">À propos de moi</h2>

          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              Je suis un <span className="text-foreground font-semibold">Ingénieur DevOps</span> et{" "}
              <span className="text-foreground font-semibold">Administrateur Réseau/Système</span> passionné par la
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
        </div>
      </div>
    </section>
  )
}
