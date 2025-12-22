"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, FileDown, Terminal } from "lucide-react"
import type { LucideIcon } from "lucide-react" // Importe le type LucideIcon

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  const texts = ["Ingénieur DevOps 💻", "Administrateur Réseau & Système 🌐", "Passionné d'Infrastructure as Code ☁️"]

  // Animation de typing
  useEffect(() => {
    setMounted(true)
    const currentText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentText.length) {
            setTypedText(currentText.slice(0, typedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((currentIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentIndex])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 md:pt-20 bg-background overflow-hidden"
    >
      {/* --- BACKGROUND TECHNIQUE --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#030712]">
        {/* Grille de précision */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

        {/* --- LIGNES DE FLUX (DATA STREAMS) --- */}
        {/* On utilise des largeurs de 2px et une opacité plus forte pour le test */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[15%] w-[2px] h-[300px] bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream opacity-80"></div>
          <div className="absolute top-0 left-[45%] w-[2px] h-[400px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-data-stream [animation-delay:3s] opacity-60"></div>
          <div className="absolute top-0 left-[80%] w-[2px] h-[250px] bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-data-stream [animation-delay:1.5s] opacity-70"></div>
        </div>

        {/* Orbes de couleur */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
      </div>

      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-center md:text-left">
          {/* --- PHOTO DE PROFIL AVEC EFFETS --- */}
          <div className="flex-shrink-0 relative group animate-fade-in-right">
            <div className="relative w-48 h-48 md:w-75 md:h-100">
              {/* Cercle rotatif en arrière-plan */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-cyan-400 to-purple-500 animate-spin-slow opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <div className="absolute inset-2 bg-background rounded-full z-10"></div>

              <img
                src="/claude3.jpeg"
                alt="Arthur Fotso"
                className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover z-20 border-2 border-primary/20"
              />

              {/* Badge de statut "Available" */}
              <div className="absolute bottom-4 right-4 z-30 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-xl border border-primary/20 flex items-center gap-2 animate-bounce-slow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-foreground">
                  online
                </span>
              </div>
            </div>
          </div>

          {/* --- TEXTE ET ACTIONS --- */}
          <div className="max-w-2xl space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-mono text-sm mb-2">
                
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                Claude{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary bg-300% animate-gradient">
                  Fotso
                </span>
              </h1>

              <div className="h-12 flex items-center justify-center md:justify-start">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
                  {typedText}
                  <span className="ml-1 inline-block w-2 h-6 md:h-8 bg-primary animate-blink"></span>
                </h2>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              Je conçois des infrastructures <span className="text-foreground font-semibold">Cloud-Native</span>{" "}
              résilientes et j'automatise le cycle de vie applicatif. Mon objectif : transformer la complexité réseau en
              systèmes <span className="text-primary">scalables</span>.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gap-2 group shadow-lg shadow-primary/20"
              >
                Explorer mes Labs
              </Button>

              <a href="/Fotso-CV.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 group border-primary/20 hover:bg-primary/5 bg-transparent"
                >
                  <FileDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Télécharger CV
                </Button>
              </a>
            </div>

            {/* Liens sociaux */}
            <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
              <SocialLink href="https://github.com/arthur-2026-ai" Icon={Github} label="GitHub" />
              <SocialLink
                href="https://linkedin.com/in/arthurfotso"
                Icon={Linkedin}
                label="LinkedIn"
                color="hover:text-blue-500"
              />
              <SocialLink href="mailto:fotsoclaude316@gmail.com" Icon={Mail} label="Email" color="hover:text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Flèche scroll vers le bas */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-primary transition-all animate-bounce"
        aria-label="En savoir plus"
      >
        <ArrowDown className="h-7 w-7" />
      </button>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        .bg-300% {
          background-size: 300%;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes data-stream {
          0% {
            transform: translateY(-100vh); /* Commence hors écran en haut */
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh); /* Finit hors écran en bas */
            opacity: 0;
          }
        }

        .animate-data-stream {
          animation: data-stream 5s linear infinite; /* Plus rapide (5s) pour vérifier la visibilité */
        }
      `}</style>
    </section>
  )
}

// Sous-composant pour les liens sociaux pour garder le code propre

function SocialLink({
  href,
  Icon,
  label,
  color = "hover:text-foreground",
}: {
  href: string
  Icon: LucideIcon
  label: string
  color?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-muted-foreground transition-all duration-300 hover:scale-125 ${color}`}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </a>
  )
}
