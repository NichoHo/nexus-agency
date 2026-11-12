import { AppWindow, Smartphone, TrendingUp, Brain, Plug, Cloud } from "lucide-react";

const items = [
  { Icon: AppWindow, title: "Web development", text: "Product interfaces, dashboards, and marketing sites. Server rendered, fast, and accessible by default.", tags: "Next.js / React / TypeScript / Tailwind" },
  { Icon: Smartphone, title: "Mobile development", text: "iOS and Android apps with offline-first sync, so the app works before the network does.", tags: "Expo / React Native / Supabase" },
  { Icon: TrendingUp, title: "Data and analytics", text: "Pipelines, warehouses, and dashboards, so your team's numbers all come from one place.", tags: "Python / Pandas / SQL" },
  { Icon: Brain, title: "AI and machine learning", text: "Retrieval over your own documents, computer vision, and forecasting. Built to be explainable.", tags: "LangChain / TensorFlow / XGBoost" },
  { Icon: Plug, title: "Backend and APIs", text: "Services that stay correct under load, with clear REST or gRPC contracts.", tags: "Go / Node / PostgreSQL / Kafka" },
  { Icon: Cloud, title: "Cloud and DevOps", text: "One command to run the stack locally, and a pipeline that ships the same containers to production.", tags: "Docker / Kubernetes / Terraform" },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap svc-grid">
        <div className="r">
          <h2>What we do</h2>
          <p>One team from first sketch to launch day.</p>
        </div>
        <div className="svc">
          {items.map(({ Icon, title, text, tags }, n) => (
            <div key={title} className="r" style={{ "--i": n % 2 } as React.CSSProperties}>
              <Icon size={32} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="tags">{tags}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
