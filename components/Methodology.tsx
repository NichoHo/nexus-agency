import { ArrowRight } from "lucide-react";

const steps = [
  ["Discover", "We learn your business, audience, and goals, then agree on scope."],
  ["Design", "Wireframes and mockups you can click through before any code."],
  ["Build", "Development in short cycles with tests, so you see progress as it happens."],
  ["Launch", "Staged rollout, security checks, and a rollback plan."],
  ["Improve", "We watch real usage after launch and keep tuning."],
];

export default function Methodology() {
  return (
    <section id="process">
      <div className="wrap">
        <h2 className="r">How a project runs</h2>
        <div className="flow">
          {steps.map(([title, text], i) => (
            <div key={title} className="r" style={{ "--i": i } as React.CSSProperties}>
              <h3>{title} {i < steps.length - 1 && <ArrowRight size={18} strokeWidth={2.5} />}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
