"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background on scroll
      setScrolled(currentScrollY > 20);

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Portofolio", href: "/#portofolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          scrolled
            ? "bg-nexus-black/95 backdrop-blur-md border-b border-nexus-border"
            : "bg-nexus-black/80 backdrop-blur-sm"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-nexus-primary/20 blur-xl group-hover:bg-nexus-primary/30 transition-all duration-300"></div>
                  <span className="relative text-2xl font-display font-bold text-nexus-text tracking-tight-display">
                    NEXUS
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-nexus-muted hover:text-nexus-primary transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexus-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
            <a
                href="/#contact"
                className="relative inline-block px-6 py-2.5 bg-nexus-primary text-nexus-black font-semibold text-sm rounded-nexus-sm overflow-hidden group"
            >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-nexus-text transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 rounded-nexus hover:bg-nexus-card transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1.5 left-0 w-6 h-0.5 bg-nexus-primary transition-all duration-300 ${
                    isOpen ? "rotate-45 top-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-nexus-primary -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute bottom-1.5 left-0 w-6 h-0.5 bg-nexus-primary transition-all duration-300 ${
                    isOpen ? "-rotate-45 bottom-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-20 left-0 right-0 bg-nexus-card/98 backdrop-blur-xl border-b border-nexus-border transition-all duration-500 ease-out ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-8 space-y-1 overflow-hidden">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-4 px-4 text-lg font-semibold text-nexus-muted hover:text-nexus-primary hover:bg-nexus-black/50 rounded-nexus transition-all duration-200 border-b border-nexus-border/30 last:border-b-0 ${
                  isOpen ? "animate-slideDown" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <span className="flex items-center justify-between">
                  {link.name}
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 px-4 bg-nexus-primary text-nexus-black text-center font-bold text-lg rounded-nexus hover:bg-nexus-text transition-all duration-300 transform hover:scale-[1.02]"
                style={{
                  animationDelay: `${navLinks.length * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          style={{ top: "80px" }}
        />
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}