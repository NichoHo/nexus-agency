"use client";

import { Mail, MessageCircle, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:nexussoftwaredev@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/6281297243518",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/nexdevsoftware",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-nexus-black border-t border-nexus-border overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-nexus-primary/3 blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <a href="/" className="inline-flex items-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-nexus-primary/20 blur-xl group-hover:bg-nexus-primary/30 transition-all duration-300"></div>
                    <span className="relative text-3xl font-display font-bold text-nexus-text tracking-tight-display">
                      NEXUS
                    </span>
                  </div>
                </a>
              </div>

              {/* Tagline */}
              <p className="text-nexus-muted font-body leading-relaxed mb-8 max-w-md">
                Building the future of digital products with precision engineering 
                and cutting-edge technology. Code that scales. Design that converts.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 rounded-nexus-sm bg-nexus-card border border-nexus-border hover:border-nexus-primary flex items-center justify-center transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-nexus-muted group-hover:text-nexus-primary transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-display font-bold text-nexus-text text-sm uppercase tracking-wider mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-nexus-muted hover:text-nexus-primary font-body text-sm transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="w-0 h-px bg-nexus-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-display font-bold text-nexus-text text-sm uppercase tracking-wider mb-6">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:nexussoftwaredev@gmail.com"
                    className="text-nexus-muted hover:text-nexus-primary font-body text-sm transition-colors duration-200 block"
                  >
                    nexussoftwaredev@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6281297243518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nexus-muted hover:text-nexus-primary font-body text-sm transition-colors duration-200 block"
                  >
                    +62 812-9724-3518
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/nexdevsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nexus-muted hover:text-nexus-primary font-body text-sm transition-colors duration-200 block"
                  >
                    @nexdevsoftware
                  </a>
                </li>
              </ul>

              {/* Availability Badge */}
              <div className="mt-6 inline-flex items-center space-x-2 px-3 py-2 rounded-nexus-sm bg-nexus-primary/5 border border-nexus-primary/20">
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 bg-nexus-primary rounded-full animate-pulse"></div>
                  <div className="absolute w-2 h-2 bg-nexus-primary rounded-full animate-ping"></div>
                </div>
                <span className="text-nexus-primary text-xs font-semibold">
                  Available for Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-nexus-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <div className="text-nexus-muted text-sm font-body">
              © {currentYear} NEXUS. All rights reserved.
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center space-x-2 text-nexus-muted hover:text-nexus-primary text-sm font-semibold transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <div className="w-6 h-6 rounded-nexus-sm border border-nexus-border group-hover:border-nexus-primary flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5">
                <ArrowUp className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}