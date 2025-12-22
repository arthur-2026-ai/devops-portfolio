"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

export function Loader() {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState("Initializing system...")
  const [isVisible, setIsVisible] = useState(true)

  const steps = [
    { p: 10, t: "Loading kernel modules..." },
    { p: 30, t: "Establishing cloud connection..." },
    { p: 50, t: "Mounting infrastructure nodes..." },
    { p: 80, t: "Starting DevOps services..." },
    { p: 100, t: "System Ready." },
  ]

  useEffect(() => {
    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p)
        setText(steps[currentStep].t)
        currentStep++
      } else {
        clearInterval(interval)
        setTimeout(() => setIsVisible(false), 500)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xs w-full space-y-6 text-center">
        {/* Logo animé */}
        <div className="relative inline-block">
          <div className="bg-[#0073d5] p-4 rounded-2xl text-white animate-bounce shadow-2xl shadow-[#0073d5]/20">
            <Terminal size={32} />
          </div>
          <div className="absolute -inset-1 bg-[#0073d5] rounded-2xl blur opacity-20 animate-pulse"></div>
        </div>

        {/* Barre de progression */}
        <div className="space-y-3">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-[#0073d5] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-center gap-3 font-mono">
            <span className="text-[10px] font-bold text-[#0073d5] uppercase tracking-widest animate-pulse">
              {text}
            </span>
            <span className="text-[10px] font-bold text-slate-400">
              {progress}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Petit texte en bas */}
      <div className="absolute bottom-10 font-mono text-[10px] text-slate-300">
        FOTSO_DEVOPS_ENGINEER v2.0.25
      </div>
    </div>
  )
}