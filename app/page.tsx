import Hero from "@/components/Hero";
import Portofolio from "@/components/Portofolio";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Portofolio />
      <Services />
      <Methodology />
      <Testimonials />
      <Contact />
      <Reveal />
    </main>
  );
}
