import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a className="logo" href="#top">nexus</a>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#clients">Clients</a></li>
        </ul>
        <a className="btn btn-pink" href="#contact">Start a project</a>
      </div>
    </nav>
  );
}

export function StartButton({ style }: { style?: React.CSSProperties }) {
  return (
    <a className="btn btn-pink r" style={style} href="mailto:nexussoftwaredev@gmail.com">
      Start a project <ArrowUpRight size={18} strokeWidth={2.5} />
    </a>
  );
}
