"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Asia Trading Export",
    url: "https://www.asiatradingexport.com/",
    desc: "Product catalogue and enquiry site for a bamboo and coconut charcoal exporter.",
    img: "/work/asia-trading.jpeg",
    alt: "Asia Trading Export website",
    pos: "top left",
  },
  {
    name: "Hammouda Charcoal",
    url: "https://www.hammoudacharcoal.com/",
    desc: "Multilingual catalogue and contact site for a premium charcoal supplier.",
    img: "/work/hammouda.jpg",
    alt: "Hammouda Charcoal website, export destinations map",
    pos: "center",
  },
];

export default function Portofolio() {
  const [on, setOn] = useState(0);
  return (
    <section className="work" id="work">
      <div className="wrap">
        <h2 className="r">Recent work</h2>
        <div className="work-grid">
          <div className="r">
            {projects.map((p, i) => (
              <a
                key={p.name}
                className={`row${on === i ? " on" : ""}`}
                style={i === projects.length - 1 ? { borderBottom: "1.5px solid var(--ink)" } : undefined}
                href={p.url}
                target="_blank"
                rel="noopener"
                onMouseEnter={() => setOn(i)}
                onFocus={() => setOn(i)}
              >
                <h3>{p.name} <ArrowUpRight size={24} strokeWidth={2.5} /></h3>
                <p>{p.desc}</p>
                <div className="mono">Next.js / React / Tailwind CSS / Vercel</div>
              </a>
            ))}
          </div>
          <div className="stage r" style={{ "--i": 1 } as React.CSSProperties}>
            <div className="shots">
            {projects.map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.name} className={on === i ? "on" : undefined} src={p.img} alt={p.alt} style={{ objectPosition: p.pos }} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
