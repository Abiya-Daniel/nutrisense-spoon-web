import { motion } from "framer-motion";

const timeline = [
  { year: "2026", title: "Launch", desc: "First consumer device ships globally" },
  { year: "2030", title: "Healthcare Integration", desc: "Partnered with 500+ hospitals worldwide" },
  { year: "2035", title: "Universal Standard", desc: "Adopted in school cafeterias across 40 countries" },
  { year: "2046", title: "Full Autonomy", desc: "AI predicts health outcomes before you eat" },
];

const VisionSlide = () => (
  <section id="Vision" className="slide-section snap-section min-h-screen">
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="font-exo text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Roadmap</p>
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold gradient-text mb-16">Future Vision</h2>
      </motion.div>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

        <div className="space-y-16">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="glass-panel neon-border p-5 inline-block">
                  <p className="font-orbitron text-2xl font-bold text-primary mb-1">{t.year}</p>
                  <p className="font-orbitron text-sm font-semibold mb-1">{t.title}</p>
                  <p className="font-exo text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-primary neon-glow flex-shrink-0 relative z-10" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VisionSlide;
