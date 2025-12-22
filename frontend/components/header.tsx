"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "À propos", id: "about" },
    { label: "Compétences", id: "skills" },
    { label: "Expérience", id: "experience" },
    { label: "Projets", id: "projects" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-3 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO STYLE TECH AVEC TON BLEU */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tighter"
          >
            <div className="bg-[#0073d5] p-2 rounded-xl text-white group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-[#0073d5]/20">
              <Terminal size={18} />
            </div>
            <span className="text-slate-900">
              Fotso<span className="text-[#0073d5]">|</span>DevOps
            </span>
          </button>

          {/* DESKTOP NAV - STYLE ÉPURÉ */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#0073d5] hover:bg-white rounded-full transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* BOUTON CONTACT ACCENTUÉ */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-[#0073d5] hover:bg-slate-900 text-white rounded-full px-6 font-bold text-xs tracking-widest transition-all shadow-md shadow-[#0073d5]/10"
            >
              CONTACT.SH
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-900 hover:bg-slate-100 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* MOBILE NAVIGATION - STYLE LIGHT CARD */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 pb-6 p-2 bg-white border border-slate-100 rounded-2xl shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center justify-between px-4 py-4 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-[#0073d5] hover:bg-slate-50 rounded-xl transition-all"
              >
                {item.label}
                <div className="w-1.5 h-1.5 rounded-full bg-[#0073d5] opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-slate-900 text-white mt-2 rounded-xl"
            >
              ME CONTACTER
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}