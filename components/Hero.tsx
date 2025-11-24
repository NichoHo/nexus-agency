"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-nexus-black overflow-hidden">
      {/* Radial Glow Background (Preserved) */}
      <div className="absolute top-1/4 left-0 w-full h-1/2 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] opacity-[0.05]"
          style={{
            background: `radial-gradient(circle at center, #00FF94 0%, transparent 70%)`,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Grid Pattern Background (Updated) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(to right, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "100px 100%",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content (Asymmetric Alignment) */}
          <div className="space-y-8 lg:space-y-10">
            {/* Overline */}
            <div className="flex items-center space-x-2">
              <div className="h-px w-12 bg-nexus-primary"></div>
              <span className="text-nexus-primary text-sm font-semibold tracking-wider uppercase">
                Precision Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-nexus-text tracking-tight-display leading-[0.95]">
              Building The
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Future of</span>
                <div className="absolute -inset-2 bg-nexus-primary/10 blur-2xl"></div>
              </span>
              <br />
              <span className="text-nexus-primary">Digital Products</span>
            </h1>

            {/* Subheadline */}
            <p className="text-nexus-muted text-base sm:text-lg lg:text-xl font-body leading-relaxed max-w-xl">
              We architect high-performance web and mobile applications with
              surgical precision. Code that scales. Design that converts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              {/* Primary CTA */}
              <button className="group relative px-8 py-4 bg-nexus-primary text-nexus-black font-bold text-base rounded-nexus overflow-hidden transition-all duration-300 hover:shadow-[0_4px_0_0_rgba(0,255,148,0.3)] hover:-translate-y-0.5">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-nexus-text transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              {/* Secondary CTA */}
              <button className="group px-8 py-4 border border-nexus-text text-nexus-text font-semibold text-base rounded-nexus hover:border-nexus-primary hover:text-nexus-primary transition-all duration-300">
                <span className="flex items-center space-x-2">
                  <span>View Our Work</span>
                  <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-nexus-border">
              <div>
                <div className="text-3xl font-display font-bold text-nexus-text">99.9%</div>
                <div className="text-sm text-nexus-muted mt-1">Service Reliability</div>
              </div>
              <div className="h-12 w-px bg-nexus-border"></div>
              <div>
                <div className="text-3xl font-display font-bold text-nexus-text">98%</div>
                <div className="text-sm text-nexus-muted mt-1">Client Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-nexus-border"></div>
              <div>
                <div className="text-3xl font-display font-bold text-nexus-text">24/7</div>
                <div className="text-sm text-nexus-muted mt-1">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right: Technical Imagery / Visualization */}
          <div className="relative lg:block hidden">
            {/* Floating Code Window */}
            <div className="relative">
              {/* Main Terminal Window */}
              <div className="bg-nexus-card border border-nexus-border rounded-nexus overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-nexus-black border-b border-nexus-border px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-nexus-primary"></div>
                  </div>
                  <div className="text-nexus-muted text-xs font-mono ml-4">data-fetcher.ts</div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">01</span>
                    <span className="text-nexus-muted mr-1">import</span>
                    <span className="text-nexus-primary mr-1">{"{ ApiClient }"}</span>
                    <span className="text-nexus-muted mr-1">from</span>
                    <span className="text-nexus-primary">'./api'</span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">02</span>
                    <span className="text-purple-400 mr-1">interface</span>
                    <span className="text-nexus-text mr-1">ProjectData</span>
                    <span className="text-nexus-text">{"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">03</span>
                    <span className="text-nexus-text ml-4 mr-1">id:</span>
                    <span className="text-purple-400">number</span>
                    <span className="text-nexus-text">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted mr-4">04</span>
                    <span className="text-nexus-text ml-4 mr-1">status:</span>
                    <span className="text-purple-400">string</span>
                    <span className="text-nexus-text">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">05</span>
                    <span className="text-nexus-text">{"}"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">06</span>
                    <span className="text-nexus-text"></span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">07</span>
                    <span className="text-purple-400 mr-1">export const</span>
                    <span className="text-nexus-text mr-1">fetchProjects =</span>
                    <span className="text-purple-400 mr-1">async</span>
                    <span className="text-nexus-text">{"() => {"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">08</span>
                    <span className="text-nexus-text ml-4"></span>
                    <span className="text-purple-400 mr-1">const</span>
                    <span className="text-nexus-text mr-1">response =</span>
                    <span className="text-purple-400 mr-1">await</span>
                    <span className="text-nexus-text">ApiClient.</span>
                    <span className="text-nexus-primary">get</span>
                    <span className="text-nexus-text">("/projects");</span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">09</span>
                    <span className="text-nexus-text ml-4"></span>
                    <span className="text-purple-400 mr-1">return</span>
                    <span className="text-nexus-text">response.</span>
                    <span className="text-nexus-primary mr-1">data</span>
                    <span className="text-nexus-text mr-1">as</span>
                    <span className="text-nexus-text">ProjectData[];</span>
                  </div>
                  <div className="flex">
                    <span className="text-nexus-muted mr-4">10</span>
                    <span className="text-nexus-text">{"};"}</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-nexus-card border border-nexus-border rounded-nexus p-4 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-nexus bg-nexus-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-nexus-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-nexus-muted">System Status</div>
                    <div className="text-sm font-bold text-nexus-text">Fully Operational</div>
                  </div>
                </div>
              </div>

              {/* Floating Metric */}
              <div className="absolute -top-6 -right-6 bg-nexus-card border border-nexus-primary/50 rounded-nexus p-3 backdrop-blur-sm">
                <div className="text-2xl font-display font-bold text-nexus-primary">99.9%</div>
                <div className="text-xs text-nexus-muted">Uptime</div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-nexus-primary/5 blur-3xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}