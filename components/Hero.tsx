import { ArrowUpRight } from "lucide-react";

const v = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <h1>
          <span className="line"><span>Websites and apps</span></span>
          <span className="line"><span style={v(1)}>that <span className="mark">earn trust.</span></span></span>
        </h1>
        <div className="hero-low">
          <div className="r" style={v(3)}>
            <p>Nexus is a software studio in Indonesia. We design, build, and launch fast websites and apps for growing businesses.</p>
            <div className="cta-row">
              <a className="btn btn-pink" href="#contact">Start a project <ArrowUpRight size={18} strokeWidth={2.5} /></a>
              <a className="btn btn-line" href="#work">See our work</a>
            </div>
          </div>
          <div className="block r" style={v(4)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/work/asia-trading.jpeg" alt="Asia Trading Export homepage, built by Nexus" width={1440} height={900} />
          </div>
        </div>
      </div>
    </header>
  );
}
