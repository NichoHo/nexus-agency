"use client";

import { useState } from "react";
import { 
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  BarChart3,
  CheckCircle2
} from "lucide-react";

export default function MethodologySection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      icon: Lightbulb,
      description: "We begin by understanding your business objectives, target audience, and technical requirements. Through workshops and research, we define clear success metrics and project scope.",
      activities: ["Stakeholder Workshops", "Market Analysis", "Tech Feasibility Study"],
      focus: "Strategic Alignment",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      icon: Palette,
      description: "Our design team creates wireframes and high-fidelity mockups that prioritize user experience. Every interaction is carefully crafted to drive engagement and conversions.",
      activities: ["Visual Identity System", "UX Choreography", "Component Library"],
      focus: "User Experience",
    },
    {
      number: "03",
      title: "Development & Testing",
      icon: Code2,
      description: "We build your solution using modern frameworks and best practices. Continuous integration and automated testing ensure code quality throughout the development cycle.",
      activities: ["System Architecture", "API Integration", "Clean Code Standards"],
      focus: "Scalable Architecture",
    },
    {
      number: "04",
      title: "Launch & Deployment",
      icon: Rocket,
      description: "Strategic rollout with staging environments, final testing, and deployment to production. We ensure zero-downtime deployment with rollback capabilities.",
      activities: ["Security Audits", "Load Balancing", "CI/CD Setup"],
      focus: "Stability & Reliability",
    },
    {
      number: "05",
      title: "Monitor & Optimize",
      icon: BarChart3,
      description: "Post-launch monitoring with real-time analytics, performance tracking, and continuous improvements based on user feedback and data insights.",
      activities: ["User Behavior Analysis", "A/B Testing", "Conversion Rate Opt"],
      focus: "Data-Driven Growth",
    },
  ];

  return (
    <section id="methodology" className="relative py-24 lg:py-32 bg-nexus-black overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "100px 100%",
        }}
      ></div>

      {/* Vertical Progress Line (Desktop) */}
      <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-px bg-nexus-border -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          {/* Overline */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px w-12 bg-nexus-primary"></div>
            <span className="text-nexus-primary text-sm font-semibold tracking-wider uppercase">
              Our Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-nexus-text tracking-tight-display mb-6">
            How We Build
            <br />
            <span className="text-nexus-primary">Digital Excellence</span>
          </h2>

          {/* Description */}
          <p className="text-nexus-muted text-lg lg:text-xl font-body leading-relaxed">
            A proven methodology that combines agile development with engineering precision. 
            From concept to launch, every phase is optimized for quality and speed.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Desktop Layout: Alternating Left/Right */}
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}>
                  
                  {/* Content Side */}
                  <div className={`${isEven ? "lg:text-right lg:pr-16" : "lg:pl-16 lg:col-start-2"}`}>
                    {/* Step Number (10% Terminal Green) */}
                    <div className="mb-4">
                      <span 
                        className="inline-block font-display font-bold text-6xl sm:text-7xl transition-all duration-300"
                        style={{
                          color: isActive ? "#00FF94" : "#1A1A1A",
                          textShadow: isActive ? "0 0 20px rgba(0, 255, 148, 0.3)" : "none",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-nexus-text tracking-tight-display mb-4">
                      {step.title}
                    </h3>

                    {/* Description (Body Grey #B0B0B0) */}
                    <p className="text-nexus-muted font-body leading-relaxed mb-6 text-base lg:text-lg" style={{ lineHeight: "1.6" }}>
                      {step.description}
                    </p>

                    {/* Activities List */}
                    <div className="space-y-2 mb-4">
                      {/* Changed label from Deliverables to Key Activities */}
                      <div className="text-nexus-text text-sm font-semibold mb-3">
                        Key Activities:
                      </div>
                      
                      {/* Updated to map through .activities instead of .deliverables */}
                      {step.activities.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className={`flex items-center space-x-2 ${isEven ? "lg:justify-end" : ""}`}
                        >
                          <CheckCircle2 
                            className="w-4 h-4 flex-shrink-0 transition-colors duration-300"
                            style={{ color: isActive ? "#00FF94" : "#B0B0B0" }}
                          />
                          <span className="text-nexus-muted text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Core Focus Badge */}
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-nexus-sm border transition-all duration-300 ${
                      isEven ? "lg:float-right" : ""
                    }`}
                      style={{
                        backgroundColor: isActive ? "rgba(0, 255, 148, 0.05)" : "transparent",
                        borderColor: isActive ? "#00FF94" : "#333333",
                      }}
                    >
                      {/* Target Icon for "Focus" */}
                      <div className="relative flex items-center justify-center w-4 h-4">
                         <div className="absolute inset-0 rounded-full border opacity-50"
                              style={{ borderColor: isActive ? "#00FF94" : "#B0B0B0" }}></div>
                         <div className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: isActive ? "#00FF94" : "#B0B0B0" }}></div>
                      </div>

                      <div className="flex flex-col">
                        <span 
                          className="text-sm font-semibold transition-colors duration-300"
                          style={{ color: isActive ? "#00FF94" : "#B0B0B0" }}
                        >
                          {step.focus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Icon Side */}
                  <div className={`hidden lg:flex ${
                    isEven ? "justify-end lg:col-start-2" : "justify-start lg:col-start-1 lg:row-start-1"
                  }`}>
                    <div className="relative">
                      {/* Icon Container */}
                      <div
                        className="w-32 h-32 rounded-nexus flex items-center justify-center transition-all duration-500 relative z-10"
                        style={{
                          backgroundColor: isActive ? "rgba(0, 255, 148, 0.1)" : "#141414",
                          borderWidth: "2px",
                          borderColor: isActive ? "#00FF94" : "#333333",
                        }}
                      >
                        <Icon
                          className="w-16 h-16 transition-all duration-500"
                          style={{
                            color: isActive ? "#00FF94" : "#B0B0B0",
                          }}
                        />
                      </div>

                      {/* Glow Effect */}
                      {isActive && (
                        <div className="absolute inset-0 bg-nexus-primary/20 blur-2xl rounded-nexus"></div>
                      )}

                      {/* Connecting Line to Timeline */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-16 h-px bg-nexus-border"
                        style={{
                          [isEven ? "right" : "left"]: "-64px",
                        }}
                      ></div>

                      {/* Timeline Dot */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300"
                        style={{
                          [isEven ? "right" : "left"]: "-68px",
                          backgroundColor: isActive ? "#00FF94" : "#0A0A0A",
                          borderColor: isActive ? "#00FF94" : "#333333",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="lg:hidden mb-6">
                    <div
                      className="w-20 h-20 rounded-nexus flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? "rgba(0, 255, 148, 0.1)" : "#141414",
                        borderWidth: "2px",
                        borderColor: isActive ? "#00FF94" : "#333333",
                      }}
                    >
                      <Icon
                        className="w-10 h-10 transition-all duration-500"
                        style={{
                          color: isActive ? "#00FF94" : "#B0B0B0",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

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