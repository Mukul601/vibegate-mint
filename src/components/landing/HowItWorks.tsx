import { motion } from "framer-motion";
import { Upload, Link, Coins } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Add Your Resource",
    desc: "Paste an API key, configure a proxy endpoint, or share device compute — takes under 2 minutes.",
  },
  {
    icon: Link,
    step: "02",
    title: "List On-Chain",
    desc: "Your resource gets a unique Algorand-backed endpoint with x402 payment headers built in.",
  },
  {
    icon: Coins,
    step: "03",
    title: "Earn ALGO & USDC",
    desc: "Every time an AI agent calls your endpoint, you get paid instantly. Watch earnings stack up in real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Three simple steps to start earning from your unused digital resources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              <div className="w-20 h-20 mx-auto rounded-2xl glass glow-border flex items-center justify-center mb-6">
                <s.icon size={32} className="text-primary" />
              </div>

              <span className="text-xs font-mono text-primary font-semibold tracking-widest">
                STEP {s.step}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
