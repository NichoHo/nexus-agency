export default function Testimonials() {
  return (
    <section className="quotes" id="clients">
      <div className="wrap q-grid">
        <figure className="r">
          <span className="q-mark" aria-hidden="true">&ldquo;</span>
          <blockquote className="big">Nexus Development helped give my company credibility in the digital scene.</blockquote>
          <figcaption className="who"><b>Abdullah Srwan Kareem Abdulla</b><span>Director, Asia Trading Export</span></figcaption>
        </figure>
        <figure className="r" style={{ "--i": 1 } as React.CSSProperties}>
          <blockquote className="small">&ldquo;The new website has not only attracted more customers but also enhanced my brand&rsquo;s image significantly.&rdquo;</blockquote>
          <figcaption className="who"><b>Maher Ratib Hammuda</b><span>Founder, Coco Hamoodah</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
