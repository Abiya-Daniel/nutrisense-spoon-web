import { motion } from "framer-motion";
import { Rocket, TrendingUp } from "lucide-react";

const CTASlide = () => (
  <section id="Contact" className="slide-section snap-section min-h-screen">
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Join the Future</span>
          <br />
          <span className="text-foreground text-2xl md:text-3xl">of Smart Eating</span>
        </h2>
        <p className="font-exo text-muted-foreground mb-10 max-w-md mx-auto">
          Be among the first to experience intelligent nutrition. Reserve your NutriSense Spoon today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-orbitron text-sm font-bold hover:brightness-110 transition-all animate-glow-pulse flex items-center gap-2">
            <Rocket className="w-5 h-5" /> Get Early Access
          </button>
          <button className="glass-panel neon-border px-8 py-4 font-orbitron text-sm font-bold text-primary hover:bg-primary/10 transition-colors flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Invest Now
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASlide;
