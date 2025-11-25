"use client";

import { useState } from "react";
import { 
  ArrowUpRight, 
  ExternalLink,
  Globe,
  Package,
  TrendingUp
} from "lucide-react";

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Asia Trading Export",
      url: "https://www.asiatradingexport.com/",
      description: "International trading platform showcasing premium export products with streamlined navigation",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      highlights: [
        "Modern UI/UX",
        "Fast Performance",
        "SEO Optimized"
      ],
      imageColor: "from-blue-500/20 to-cyan-500/20",
      icon: Package,
    },
    {
      id: 2,
      title: "Hammouda Charcoal",
      url: "https://www.hammoudacharcoal.com/",
      description: "Premium charcoal supplier website featuring product catalog, company information, and streamlined contact system.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      highlights: [
        "Multilingual Support",
        "Brand Identity",
        "User Engagement"
      ],
      imageColor: "from-orange-500/20 to-amber-500/20",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-nexus-black overflow-hidden">
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
        <div className="max-w-3xl mb-12 lg:mb-16">
          {/* Overline */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px w-12 bg-nexus-primary"></div>
            <span className="text-nexus-primary text-sm font-semibold tracking-wider uppercase">
              Portofolio
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-nexus-text tracking-tight-display mb-6">
            Delivering
            <br />
            <span className="text-nexus-primary">Digital Excellence</span>
          </h2>

          {/* Description */}
          <p className="text-nexus-muted text-lg lg:text-xl font-body leading-relaxed">
            Building high-performance web solutions for businesses worldwide. 
            Each project crafted with precision, optimized for results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative animate-fade-in-up"
                style={{
                  // We keep the delay inline as it relies on the index
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Project Card */}
                <div
                  className="relative bg-nexus-card border rounded-nexus overflow-hidden transition-all duration-500"
                  style={{
                    borderColor: isHovered ? "#00FF94" : "#222222",
                  }}
                >
                  {/* Image/Visual Area */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br group-hover:scale-[1.02] transition-transform duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${project.imageColor.split(' ')[1]} 0%, ${project.imageColor.split(' ')[3]} 100%)`,
                    }}
                  >
                    {/* Code Snippet Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 bg-nexus-black/85">
                      <div className="font-mono text-xs sm:text-sm space-y-2 w-full max-w-md">
                        <div className="flex">
                          <span className="text-nexus-muted mr-4">01</span>
                          <span className="text-purple-400 mr-1">const</span>
                          <span className="text-nexus-text mr-1">project</span>
                          <span className="text-nexus-text mr-1">=</span>
                          <span className="text-nexus-text">{"{"}</span>
                        </div>
                        <div className="flex">
                          <span className="text-nexus-muted mr-4">02</span>
                          <span className="text-nexus-text ml-4 mr-1">client:</span>
                          <span className="text-nexus-primary">'{project.title}'</span>
                          <span className="text-nexus-text">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-nexus-muted mr-4">03</span>
                          <span className="text-nexus-text ml-4 mr-1">type:</span>
                          <span className="text-nexus-primary">'website'</span>
                          <span className="text-nexus-text">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-nexus-muted mr-4">04</span>
                          <span className="text-nexus-text ml-4 mr-1">status:</span>
                          <span className="text-nexus-primary">'live'</span>
                          <span className="text-nexus-text">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-nexus-muted mr-4">05</span>
                          <span className="text-nexus-text ml-4 mr-1">tech:</span>
                          <span className="text-nexus-primary">'next.js'</span>
                        </div>
                        <div className="flex">
                          <span className="text-nexus-muted mr-4">06</span>
                          <span className="text-nexus-text">{"}"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className="absolute inset-0 bg-nexus-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    ></div>

                    {/* Live Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-nexus-black/90 backdrop-blur-sm border border-nexus-primary rounded-nexus-sm flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-nexus-primary animate-pulse"></div>
                      <span className="text-nexus-primary text-xs font-semibold uppercase tracking-wider">
                        Live
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 p-3 bg-nexus-card/90 backdrop-blur-sm border border-nexus-border rounded-nexus">
                      <Icon className="w-6 h-6 text-nexus-primary" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 lg:p-8 space-y-6">
                    {/* Title & Link */}
                    <div className="flex items-start justify-between">
                      <h3 className="font-display font-bold text-2xl lg:text-3xl text-nexus-text tracking-tight-display">
                        {project.title}
                      </h3>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-nexus hover:bg-nexus-primary/10 transition-colors duration-300"
                      >
                        <ExternalLink
                          className="w-5 h-5 transition-all duration-300"
                          style={{
                            color: isHovered ? "#00FF94" : "#B0B0B0",
                          }}
                        />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-nexus-muted font-body leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-nexus-border">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-nexus-primary font-display font-bold text-sm">
                            ✓
                          </div>
                          <div className="text-nexus-muted text-xs mt-1">{highlight}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
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

                    {/* Visit Website Link */}
                    <div className="pt-2">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold text-nexus-muted group-hover:text-nexus-primary transition-colors duration-300"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        <span>Visit Website</span>
                        <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>

                  {/* Circuit Line Effect */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-nexus-primary transition-all duration-500 ease-out"
                    style={{
                      width: isHovered ? "100%" : "0%",
                    }}
                  ></div>
                </div>

                {/* Glow Effect */}
                {isHovered && (
                  <div className="absolute inset-0 bg-nexus-primary/5 blur-xl -z-10 rounded-nexus"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

    </section>
  );
}