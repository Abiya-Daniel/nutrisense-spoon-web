import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import productImg from "@/assets/nutrisense-product.png";

interface HeroSlideProps {
  onWatchDemo: () => void;
  onNext: () => void;
}

const HeroSlide = ({ onWatchDemo, onNext }: HeroSlideProps) => {
  return (
    <section id="Home" className="slide-section snap-section min-h-screen relative">
      <div className="grid-floor absolute inset-0 opacity-30" />
      
      {/* Hologram rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-primary/10 animate-spin-slow" />
        <div className="absolute w-[650px] h-[650px] rounded-full border border-neon-blue/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="font-exo text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Introducing
          </motion.p>
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="gradient-text">NutriSense</span>
            <br />
            <span className="text-foreground">Spoon</span>
          </h1>
          <p className="font-exo text-lg text-muted-foreground max-w-md mb-8">
            The Future of Smart Eating — 2046
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={onWatchDemo}
              className="glass-panel neon-border px-6 py-3 font-exo text-sm flex items-center gap-2 text-primary hover:bg-primary/10 transition-colors"
            >
              <Play className="w-4 h-4" /> Watch Demo
            </button>
            <button
              onClick={onNext}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-exo text-sm font-semibold hover:brightness-110 transition-all animate-glow-pulse"
            >
              Explore Product
            </button>
          </div>
        </motion.div>

        {/* Right - Product */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative animate-float">
            <img src={productImg} alt="NutriSense Spoon" className="w-full max-w-lg mx-auto rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background via-transparent to-transparent" />
            {/* Scan line */}
            <div className="absolute left-0 right-0 h-[2px] bg-primary/60 animate-scan shadow-[0_0_20px_hsl(180_100%_50%/0.5)]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSlide;
