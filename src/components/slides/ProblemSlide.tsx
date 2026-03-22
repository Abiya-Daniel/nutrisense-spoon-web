import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Pill, ShieldAlert } from "lucide-react";

const problems = [
  { icon: ShieldAlert, label: "Contamination", desc: "Invisible pathogens in your food" },
  { icon: Droplets, label: "Hidden Sugar", desc: "Up to 3x more than labels show" },
  { icon: AlertTriangle, label: "Unsafe Oil", desc: "Reused & degraded cooking oils" },
  { icon: Pill, label: "Allergies", desc: "Unlisted allergens in meals" },
];

const ProblemSlide = () => (
  <section id="Problem" className="slide-section snap-section min-h-screen">
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-exo text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
      >
        The Problem
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-orbitron text-3xl md:text-5xl font-bold mb-16 neon-text text-primary"
      >
        Every meal you eat is a guess.
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="glass-panel neon-border p-6 group hover:bg-primary/5 transition-all duration-300"
          >
            <p.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-orbitron text-sm font-semibold mb-2">{p.label}</h3>
            <p className="font-exo text-xs text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSlide;
