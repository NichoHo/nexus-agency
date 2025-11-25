"use client";

import { Mail, MessageCircle, Instagram } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nexussoftwaredev@gmail.com",
      href: "mailto:nexussoftwaredev@gmail.com",
      description: "For project inquiries and partnerships",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 812-9724-3518",
      href: "https://wa.me/6281297243518",
      description: "Quick responses during business hours",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@nexus.dev",
      href: "https://instagram.com/nexus.dev",
      description: "Follow our latest work and updates",
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-nexus-black overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "100px 100%",
        }}
      ></div>

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          {/* Overline */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px w-12 bg-nexus-primary"></div>
            <span className="text-nexus-primary text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-nexus-text tracking-tight-display mb-6">
            Let's Build
            <br />
            <span className="text-nexus-primary">Something Great</span>
          </h2>

          {/* Description */}
          <p className="text-nexus-muted text-lg lg:text-xl font-body leading-relaxed">
            Ready to start your project? Reach out through your preferred channel. 
            We typically respond within 24 hours.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-nexus-card border border-nexus-border rounded-nexus p-8 transition-all duration-300 hover:border-nexus-primary">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-nexus bg-nexus-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-nexus-primary/20">
                      <Icon className="w-8 h-8 text-nexus-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-sm text-nexus-muted font-semibold tracking-wider uppercase mb-2">
                    {method.label}
                  </div>

                  {/* Value */}
                  <div className="text-xl font-display font-bold text-nexus-text mb-3 group-hover:text-nexus-primary transition-colors duration-300">
                    {method.value}
                  </div>

                  {/* Description */}
                  <p className="text-nexus-muted text-sm font-body leading-relaxed">
                    {method.description}
                  </p>

                  {/* Hover Arrow Indicator */}
                  <div className="absolute bottom-8 right-8 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-full h-px bg-nexus-primary"></div>
                    <div className="absolute right-0 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-nexus-primary"></div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-nexus-primary/5 blur-xl rounded-nexus opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-nexus-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Availability */}
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-nexus-primary rounded-full animate-pulse"></div>
                <div className="absolute w-3 h-3 bg-nexus-primary rounded-full animate-ping"></div>
              </div>
              <div>
                <div className="text-nexus-text font-semibold text-sm">Currently Available</div>
                <div className="text-nexus-muted text-xs">Taking on new projects</div>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-2xl font-display font-bold text-nexus-text">Global</div>
                <div className="text-xs text-nexus-muted">Client Base</div>
              </div>
              <div className="h-12 w-px bg-nexus-border"></div>
              <div>
                <div className="text-2xl font-display font-bold text-nexus-text">5+</div>
                <div className="text-xs text-nexus-muted">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}