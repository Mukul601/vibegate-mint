import { motion } from "framer-motion";
import { Wallet, Bot, Shield, Globe } from "lucide-react";

const suppliers = [
  {
    icon: Wallet,
    title: "Earn While You Sleep",
    desc: "List unused API keys, IP addresses, or spare compute — AI agents pay you per-request in ALGO or USDC.",
  },
  {
    icon: Shield,
    title: "No Technical Skills Needed",
    desc: "Our dashboard walks you through every step. Paste an API key, set your price, and start earning.",
  },
  {
    icon: Globe,
    title: "Global Marketplace",
    desc: "Your resources are accessible to thousands of AI agents worldwide, 24/7, with zero downtime.",
  },
];

const agents = [
  {
    icon: Bot,
    title: "Instant API Access",
    desc: "Pay-per-call with x402 headers. No signup, no API keys to manage — just send a request and pay.",
  },
  {
    icon: Shield,
    title: "Trustless & Verifiable",
    desc: "Every transaction is on-chain on Algorand. Transparent pricing, no vendor lock-in.",
  },
  {
    icon: Globe,
    title: "Discover Any Resource",
    desc: "Browse a curated marketplace of APIs, proxies, compute nodes — all priced in micropayments.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

function CardGrid({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: typeof suppliers;
}) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-8">{subtitle}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon size={20} className="text-primary" />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ValueProps() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 space-y-20">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground"
          >
            Built for <span className="text-gradient">Everyone</span>
          </motion.h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Whether you have spare resources or need on-demand access, VibeGate connects both sides seamlessly.
          </p>
        </div>

        <CardGrid
          title="🧑‍💻 For Suppliers"
          subtitle="Monetize what you already have."
          items={suppliers}
        />
        <CardGrid
          title="🤖 For AI Agents & Developers"
          subtitle="Access any resource with a single HTTP request."
          items={agents}
        />
      </div>
    </section>
  );
}
