import { motion } from "framer-motion";
import { Layers, Wifi, Monitor, Globe2 } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "API Stacking",
    desc: "Chain multiple APIs into composable bundles — agents get multi-step workflows in a single call.",
    status: "Q2 2026",
  },
  {
    icon: Wifi,
    title: "Residential IP Network",
    desc: "Monetize your home internet connection as a trusted proxy for AI web agents.",
    status: "Q2 2026",
  },
  {
    icon: Globe2,
    title: "MCP Web Limits",
    desc: "Sell access to your authenticated web sessions and platform limits via Model Context Protocol.",
    status: "Q3 2026",
  },
  {
    icon: Monitor,
    title: "Device Compute",
    desc: "Share idle GPU/CPU cycles for AI inference tasks and earn per-computation.",
    status: "Q3 2026",
  },
];

export default function FutureFeatures() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What's <span className="text-gradient">Coming Next</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            We're building the full-stack agentic resource marketplace.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <f.icon size={20} className="text-primary" />
                </div>
                <span className="text-[10px] font-mono text-primary/60 bg-primary/5 px-2 py-0.5 rounded-full">
                  {f.status}
                </span>
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">{f.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
