"use client"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-sm fixed w-full z-50">
      <div className="text-cyan-400 font-bold text-xl">VideoAI Pro</div>

      <div className="hidden md:flex space-x-6">
        <a href="#models">Models</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>

      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-1 border border-cyan-400 rounded">Sign In</button>
        <button className="px-4 py-1 bg-cyan-500 rounded text-black">Get Started</button>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col p-4 space-y-2">
          <a href="#models">Models</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <button className="px-4 py-1 border border-cyan-400 rounded">Sign In</button>
          <button className="px-4 py-1 bg-cyan-500 rounded text-black">Get Started</button>
        </div>
      )}
    </nav>
  )
}
