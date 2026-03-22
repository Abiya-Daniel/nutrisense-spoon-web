import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Scan, ShieldCheck, Droplets, Heart, Smartphone, X } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Food Recognition", desc: "Instantly identifies over 10,000 food items using advanced computer vision and deep learning models trained on global cuisine databases." },
  { icon: Scan, title: "Nutrient Scan", desc: "Near-infrared spectroscopy breaks down macro and micronutrients in real-time with clinical-grade accuracy." },
  { icon: ShieldCheck, title: "Allergen Detection", desc: "Biosensors detect traces of common allergens including gluten, nuts, dairy, and shellfish proteins." },
  { icon: Droplets, title: "Oil Quality Analysis", desc: "Measures total polar compounds and free fatty acids to determine if cooking oil is fresh, degraded, or unsafe." },
  { icon: Heart, title: "Health AI", desc: "Personalized health insights powered by your biometric data, dietary history, and nutritional goals." },
  { icon: Smartphone, title: "App Sync", desc: "Seamless synchronization with iOS and Android apps for meal logging, trend analysis, and family sharing." },
];

const FeaturesSlide = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="Features" className="slide-section snap-section min-h-screen">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="font-exo text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Capabilities</p>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold gradient-text">Intelligent Features</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.button
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(i)}
              className="glass-panel neon-border p-6 text-left group hover:scale-[1.03] hover:bg-primary/5 transition-all duration-300"
            >
              <f.icon className="w-8 h-8 text-primary mb-4 group-hover:neon-text transition-all" />
              <h3 className="font-orbitron text-sm font-semibold mb-2">{f.title}</h3>
              <p className="font-exo text-xs text-muted-foreground line-clamp-2">{f.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel neon-border p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
            {(() => {
              const f = features[selected];
              const Icon = f.icon;
              return (
                <>
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-orbitron text-xl font-bold mb-3">{f.title}</h3>
                  <p className="font-exo text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default FeaturesSlide;
