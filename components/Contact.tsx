import { StartButton } from "./Navbar";

const ways = [
  ["Email", "nexussoftwaredev@gmail.com", "mailto:nexussoftwaredev@gmail.com"],
  ["WhatsApp", "+62 812-9724-3518", "https://wa.me/6281297243518"],
  ["Instagram", "@nexdevsoftware", "https://instagram.com/nexdevsoftware"],
];

export default function Contact() {
  return (
    <section className="contact" id="contact" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <h2 className="r">Tell us what<br />you&rsquo;re building.</h2>
        <p className="sub r" style={{ "--i": 1 } as React.CSSProperties}>We reply within 24 hours.</p>
        <StartButton style={{ "--i": 2 } as React.CSSProperties} />
        <div className="ways">
          {ways.map(([label, text, href], i) => (
            <a key={label} className="way r" style={{ "--i": i } as React.CSSProperties} href={href}>
              <span className="mono">{label}</span><b>{text}</b>
            </a>
          ))}
        </div>
        <footer><span>&copy; 2026 Nexus</span><a href="#top">Back to top</a></footer>
      </div>
    </section>
  );
}
