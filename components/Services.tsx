"use client";

import { useState } from "react";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  ShoppingCart, 
  Zap,
  ArrowUpRight
} from "lucide-react";

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks. Scalable architecture, blazing-fast performance, and pixel-perfect execution.",
      technologies: ["React", "Next.js", "Node.js"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions. iOS and Android apps that users love, with seamless offline capabilities.",
      technologies: ["React Native", "Flutter", "Swift"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts. From wireframes to high-fidelity prototypes, we craft experiences that drive engagement.",
      technologies: ["Figma", "Adobe XD", "Framer"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Enterprise-grade cloud infrastructure. AWS, Azure, and GCP deployment with auto-scaling, monitoring, and security built-in.",
      technologies: ["AWS", "Docker", "Kubernetes"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "High-converting online stores. Custom checkout flows, inventory management, and payment gateway integrations.",
      technologies: ["Shopify", "WooCommerce", "Stripe"],
    },
    {
      icon: Zap,
      title: "API Development",
      description: "RESTful and GraphQL APIs built for performance. Secure, documented, and versioned endpoints that scale with your business.",
      technologies: ["GraphQL", "REST", "WebSocket"],
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-nexus-black overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "100px 100%",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          {/* Overline */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px w-12 bg-nexus-primary"></div>
            <span className="text-nexus-primary text-sm font-semibold tracking-wider uppercase">
              Our Expertise
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-nexus-text tracking-tight-display mb-6">
            Services Built for
            <br />
            <span className="text-nexus-primary">High Performance</span>
          </h2>

          {/* Description */}
          <p className="text-nexus-muted text-lg lg:text-xl font-body leading-relaxed">
            We deliver end-to-end digital solutions with engineering precision. 
            Each service is designed to scale, optimized for speed, and built to last.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-nexus-card border border-[#222222] rounded-nexus p-8 transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: isHovered ? "#00FF94" : "#222222",
                }}
              >
                {/* Glow Effect on Hover */}
                {isHovered && (
                  <div className="absolute inset-0 bg-nexus-primary/5 blur-xl -z-10 rounded-nexus"></div>
                )}

                {/* Icon Container */}
                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-nexus flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? "rgba(0, 255, 148, 0.1)" : "#1A1A1A",
                      borderColor: isHovered ? "#00FF94" : "#333333",
                      borderWidth: "1px",
                    }}
                  >
                    <Icon
                      className="w-7 h-7 transition-all duration-300"
                      style={{
                        color: isHovered ? "#00FF94" : "#B0B0B0",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl text-nexus-text tracking-tight-display">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-nexus-muted font-body leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-semibold rounded-nexus-sm border transition-all duration-300"
                        style={{
                          backgroundColor: isHovered ? "rgba(0, 255, 148, 0.05)" : "transparent",
                          borderColor: isHovered ? "#00FF94" : "#333333",
                          color: isHovered ? "#00FF94" : "#B0B0B0",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Link */}
                <div className="mt-6 flex items-center text-nexus-muted group-hover:text-nexus-primary transition-colors duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                {/* Circuit Line Effect (Bottom) */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-nexus-primary transition-all duration-500 ease-out"
                  style={{
                    width: isHovered ? "100%" : "0%",
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-6">
            <p className="text-nexus-muted text-lg">
              Don't see what you're looking for?
            </p>
            <a 
              href="mailto:nexussoftwaredev@gmail.com"
              className="
                group relative px-8 py-4 
                font-bold text-base rounded-nexus 
                border-2 border-nexus-primary 
                bg-nexus-primary text-nexus-black
                hover:bg-transparent hover:text-nexus-primary
                transition-all duration-300 
                hover:shadow-[0_0_20px_rgba(0,255,148,0.3)] 
                hover:-translate-y-0.5
                flex items-center space-x-2
              "
            >
              <span>Request Custom Solution</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}