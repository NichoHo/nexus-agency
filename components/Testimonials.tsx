"use client";

import { useState, useEffect } from "react";
import { 
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Building2,
  ExternalLink
} from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO",
      company: "FinTech Innovations",
      image: "SC",
      rating: 5,
      testimonial: "Nexus transformed our trading platform with surgical precision. The performance improvements were immediate—our response times dropped from 250ms to under 100ms. Their attention to detail and technical expertise is unmatched.",
      project: "Real-Time Trading Platform",
      metrics: { improvement: "150%", timeline: "On Time", satisfaction: "100%" },
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Founder & CEO",
      company: "Urban Eats",
      image: "MR",
      rating: 5,
      testimonial: "Working with Nexus felt like having an extension of our own team. They didn't just build an app—they architected a solution that scaled from 1,000 to 200,000 users seamlessly. The ROI has been exceptional.",
      project: "Food Delivery Mobile App",
      metrics: { improvement: "200x", timeline: "Early", satisfaction: "99%" },
    },
    {
      id: 3,
      name: "Emily Thompson",
      position: "VP of Engineering",
      company: "CloudScale Analytics",
      image: "ET",
      rating: 5,
      testimonial: "The level of engineering excellence Nexus brings is rare. They delivered a complex analytics platform ahead of schedule with zero compromises on quality. Every line of code reflects their commitment to perfection.",
      project: "SaaS Analytics Dashboard",
      metrics: { improvement: "180%", timeline: "2 Weeks Early", satisfaction: "100%" },
    },
    {
      id: 4,
      name: "David Park",
      position: "Product Director",
      company: "Luxury Fashion Co",
      image: "DP",
      rating: 5,
      testimonial: "Nexus doesn't just understand technology—they understand business. Our e-commerce platform now converts at 3x our previous rate. The AR try-on feature they built is a game-changer for luxury retail.",
      project: "Premium E-Commerce Store",
      metrics: { improvement: "300%", timeline: "On Schedule", satisfaction: "98%" },
    },
    {
      id: 5,
      name: "Jennifer Liu",
      position: "Head of Digital",
      company: "FitLife Studios",
      image: "JL",
      rating: 5,
      testimonial: "From concept to launch, Nexus exceeded every expectation. The fitness app they built has a 4.8-star rating and our user engagement metrics are through the roof. Their post-launch support is equally impressive.",
      project: "Fitness Tracking Platform",
      metrics: { improvement: "250%", timeline: "Perfect", satisfaction: "100%" },
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-nexus-black overflow-hidden">
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
              Client Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-nexus-text tracking-tight-display mb-6">
            Trusted by
            <br />
            <span className="text-nexus-primary">Industry Leaders</span>
          </h2>

          {/* Description */}
          <p className="text-nexus-muted text-lg lg:text-xl font-body leading-relaxed">
            Don't just take our word for it. Here's what our clients say about 
            working with Nexus and the results we've delivered.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative">
          {/* Testimonial Card */}
          <div 
            className="bg-nexus-card border border-nexus-border rounded-nexus overflow-hidden"
            style={{
              animation: "fadeIn 0.8s ease-out",
            }}
            key={current.id}
          >
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 p-8 lg:p-12">
              {/* Left: Client Info & Metrics */}
              <div className="lg:col-span-2 space-y-8">
                {/* Client Avatar & Info */}
                <div className="flex items-start space-x-4">
                  {/* Avatar with Initials */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-nexus bg-nexus-primary/10 border-2 border-nexus-primary flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-nexus-primary">
                      {current.image}
                    </span>
                  </div>

                  {/* Name & Position */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-display font-bold text-xl text-nexus-text mb-1">
                      {current.name}
                    </h3>
                    <p className="text-nexus-muted text-sm mb-2">
                      {current.position}
                    </p>
                    <div className="flex items-center space-x-2 text-nexus-muted text-sm">
                      <Building2 className="w-4 h-4" />
                      <span>{current.company}</span>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-nexus-primary text-nexus-primary"
                    />
                  ))}
                </div>

                {/* Project Tag */}
                <div className="inline-flex items-center px-4 py-2 bg-nexus-black/50 border border-nexus-border rounded-nexus">
                  <span className="text-nexus-muted text-sm font-semibold">
                    {current.project}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-nexus-border">
                  <div>
                    <div className="text-nexus-primary font-display font-bold text-2xl mb-1">
                      {current.metrics.improvement}
                    </div>
                    <div className="text-nexus-muted text-xs">Performance</div>
                  </div>
                  <div>
                    <div className="text-nexus-primary font-display font-bold text-2xl mb-1">
                      {current.metrics.timeline}
                    </div>
                    <div className="text-nexus-muted text-xs">Delivery</div>
                  </div>
                  <div>
                    <div className="text-nexus-primary font-display font-bold text-2xl mb-1">
                      {current.metrics.satisfaction}
                    </div>
                    <div className="text-nexus-muted text-xs">Satisfaction</div>
                  </div>
                </div>

                {/* External Link */}
                <button className="flex items-center space-x-2 text-nexus-muted hover:text-nexus-primary transition-colors duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-semibold">View Profile</span>
                </button>
              </div>

              {/* Right: Testimonial Quote */}
              <div className="lg:col-span-3 flex flex-col justify-center">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-nexus-primary/20 mb-6" />

                {/* Testimonial Text with 1.6 line height */}
                <blockquote 
                  className="text-nexus-muted font-body text-lg lg:text-xl mb-6"
                  style={{ lineHeight: "1.6" }}
                >
                  "{current.testimonial}"
                </blockquote>

                {/* Decorative Line */}
                <div className="h-1 w-20 bg-nexus-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: currentIndex === index ? "32px" : "8px",
                    height: "8px",
                    backgroundColor: currentIndex === index ? "#00FF94" : "#333333",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  prevTestimonial();
                  setIsAutoPlaying(false);
                }}
                className="p-3 bg-nexus-card border border-nexus-border rounded-nexus hover:border-nexus-primary hover:bg-nexus-primary/5 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-nexus-muted group-hover:text-nexus-primary transition-colors duration-300" />
              </button>
              <button
                onClick={() => {
                  nextTestimonial();
                  setIsAutoPlaying(false);
                }}
                className="p-3 bg-nexus-card border border-nexus-border rounded-nexus hover:border-nexus-primary hover:bg-nexus-primary/5 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-nexus-muted group-hover:text-nexus-primary transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-nexus-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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