import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass glow-border rounded-2xl p-12 md:p-16 text-center max-w-3xl mx-auto overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Monetize Your <span className="text-gradient">Digital Resources</span>?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Join thousands of suppliers and AI agents on the first trustless resource marketplace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2 glow-border"
              >
                <Zap size={18} /> Join the Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-8"
              >
                Try the Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
