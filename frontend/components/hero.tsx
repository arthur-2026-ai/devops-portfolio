"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  const texts = [
    "Ingénieur DevOps 💻",
    "Administrateur Réseau & Système 🌐",
    "Passionné du Cloud ☁️",
  ]

  // Animation de typing
  useEffect(() => {
    setMounted(true)
    const currentText = texts[currentIndex]
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentIndex])

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 md:pt-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
    >
      {/* Animated background with enhanced design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: 'rgb(6, 182, 212)', stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
          <path className="animated-path-1" d="M0,100 Q400,50 800,100 T1600,100" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path className="animated-path-2" d="M0,300 Q500,250 1000,300 T2000,300" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path className="animated-path-3" d="M0,500 Q600,450 1200,500 T2400,500" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
        </svg>
        
        {/* Particles */}
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-16 h-16 border-2 border-cyan-500/20 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 border-2 border-purple-500/20 animate-float animation-delay-4000"></div>
      </div>
      
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center md:text-left">
          {/* Photo de profil avec effet de glow */}
          <div className="flex-shrink-0 relative group animate-fade-in-right">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
            <div className="relative">
              <img
                src="/profile.png"
                alt="Arthur Fotso - Ingénieur DevOps"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-primary/40 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
              </div>
            </div>
          </div>

          {/* Texte principal */}
          <div className="max-w-2xl space-y-4 animate-fade-in-left">
            <p className="text-sm md:text-base text-muted-foreground mb-3 animate-fade-in">
              Bonjour 👋, je suis
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-gradient bg-300%">
              Arthur Fotso
            </h1>

            {/* Effet de typing */}
            <div className="h-12 md:h-14 flex items-center justify-center md:justify-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
                {typedText}
                <span className="animate-blink">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed pt-2">
              J'automatise, déploie et sécurise les infrastructures cloud pour
              garantir des systèmes <span className="text-primary font-semibold">robustes</span>, 
              <span className="text-primary font-semibold"> scalables</span> et 
              <span className="text-primary font-semibold"> fiables</span>.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")} 
                className="gap-2 group hover:scale-105 transition-transform"
              >
                <Mail className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Me contacter
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="gap-2 hover:scale-105 transition-transform"
              >
                Voir mes projets
              </Button>

              <a href="/Arthur-Fotso-CV.pdf" download>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="gap-2 group hover:scale-105 transition-transform"
                >
                  <FileDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Télécharger CV
                </Button>
              </a>
            </div>

            {/* Liens sociaux avec hover effects */}
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <a
                href="https://github.com/arthurfotso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:-translate-y-1"
                aria-label="Visitez mon profil GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/arthurfotso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-all hover:scale-110 hover:-translate-y-1"
                aria-label="Connectez-vous avec moi sur LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:arthur.fotso@example.com"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:-translate-y-1"
                aria-label="Envoyez-moi un email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche vers la section suivante */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-all animate-bounce hover:scale-110"
        aria-label="Défiler vers la section À propos"
      >
        <ArrowDown className="h-8 w-8" />
      </button>

      {/* Styles CSS personnalisés */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\% {
          background-size: 300%;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out 0.2s both;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        /* Blob animation for gradient orbs */
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Grid pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Animated paths */
        .animated-path-1 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 20s linear infinite;
        }
        .animated-path-2 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 25s linear infinite;
          animation-delay: 2s;
        }
        .animated-path-3 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 30s linear infinite;
          animation-delay: 4s;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        /* Floating shapes */
        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        .animate-float {
          animation: floatShape 6s ease-in-out infinite;
        }
        
        /* Particles */
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: hsl(var(--primary));
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticle linear infinite;
        }
        @keyframes floatParticle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translate(var(--tx, 100px), var(--ty, 100px)) scale(0);
            opacity: 0;
          }
        }
        .particle:nth-child(3n) {
          --tx: -80px;
          --ty: 120px;
        }
        .particle:nth-child(3n+1) {
          --tx: 120px;
          --ty: -90px;
        }
        .particle:nth-child(3n+2) {
          --tx: -100px;
          --ty: -110px;
        }
      `}</style>
    </section>
  )
}