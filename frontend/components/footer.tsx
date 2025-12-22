"use client"

import { Github, Linkedin, Cpu, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-100 py-12 relative overflow-hidden">
      {/* Accent de ligne bleu en haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0073d5]/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          {/* Section Gauche : Copyright & Statut */}
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                System Status: Operational
              </span>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              © {currentYear} <span className="text-slate-900">DevOps Portfolio</span>. 
              <span className="hidden sm:inline"> Tous droits réservés.</span>
            </p>
          </div>

          {/* Section Centre : Branding Subtile */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[#0073d5]">
              <Cpu size={24} />
            </div>
            <span className="text-xs font-bold text-[#0073d5] tracking-[0.2em] uppercase">
              Infrastructure Engineer
            </span>
          </div>

          {/* Section Droite : Social & Credits */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex gap-4">
              <a href="https://github.com/arthur-2026-ai" className="p-2 text-slate-400 hover:text-[#0073d5] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/arthurfotso" className="p-2 text-slate-400 hover:text-[#0073d5] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-[10px] text-slate-400 flex items-center gap-1 uppercase font-bold tracking-tighter">
              Build with <Heart size={10} className="text-red-500 fill-red-500" /> & expertise technique
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}