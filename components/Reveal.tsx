"use client";

import { useEffect } from "react";

// Scroll-reveal: adds .in to .r / h1 once visible. Content stays visible without JS.
export default function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".r,h1").forEach((el) => io.observe(el));
    // Hide nav on scroll down, show on scroll up.
    const nav = document.querySelector(".nav");
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      nav?.classList.toggle("hide", y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  return null;
}
