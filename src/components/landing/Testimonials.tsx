import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Freelance Developer",
    text: "I had 3 unused API subscriptions sitting around. Listed them on VibeGate and now they earn me ~$200/month in ALGO passively. Absolutely wild.",
    avatar: "SK",
  },
  {
    name: "AgentFlow Labs",
    role: "AI Startup",
    text: "x402 micropayments changed our cost model. We pay per-call instead of committing to expensive enterprise plans. VibeGate's marketplace is a goldmine.",
    avatar: "AF",
  },
  {
    name: "Marcus T.",
    role: "Crypto Enthusiast",
    text: "I share my residential IP for web scraping agents and earn USDC daily. Setup took 90 seconds. This is the future of the sharing economy.",
    avatar: "MT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Loved by <span className="text-gradient">Early Users</span>
          </h2>
          <p className="mt-3 text-muted-foreground">What our beta community is saying.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/50">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
