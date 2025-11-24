import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portofolio from '@/components/Portofolio'
import Methodology from '@/components/Methodology'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      {/* 2. Hero Section (The "Impact" Zone) */}
      <section id="hero" className="relative w-full">
        <Hero />
      </section>

      {/* 3. Our Services (The "Grid") */}
      <section id="services" className="w-full relative">
        <Services />
      </section>

      {/* 4. Selected Work / Portfolio (New Addition) */}
      <section id="portofolio" className="w-full relative">
        <Portofolio />
      </section>

      {/* 5. Methodology / Process (New Addition) */}
      <section id="methodology" className="w-full relative">
        <Methodology />
      </section>

      {/* 6. Testimonials (Social Proof) */}
      <section id="testimonials" className="w-full relative">
        <Testimonials />
      </section>

      {/* 7. Contact Section (The "Execution") */}
      <section id="contact" className="w-full relative">
        <Contact />
      </section>
      
    </main>
  )
}