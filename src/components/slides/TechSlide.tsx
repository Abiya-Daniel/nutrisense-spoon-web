import { motion } from "framer-motion";
import { Cpu, Eye, Radio, Cloud, Wifi } from "lucide-react";

const techNodes = [
  { icon: Eye, label: "AI Vision", angle: 0 },
  { icon: Radio, label: "NIR Sensors", angle: 72 },
  { icon: Cpu, label: "Nano Biosensors", angle: 144 },
  { icon: Cloud, label: "Cloud AI", angle: 216 },
  { icon: Wifi, label: "IoT Mesh", angle: 288 },
];

const TechSlide = () => (
  <section id="Tech" className="slide-section snap-section min-h-screen">
    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="font-exo text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Under The Hood</p>
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold gradient-text mb-16">Core Technology</h2>
      </motion.div>

      {/* Circular diagram */}
      <div className="relative w-80 h-80 mx-auto">
        {/* Center ring */}
        <div className="absolute inset-[25%] rounded-full border-2 border-primary/30 animate-spin-slow flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Nodes */}
        {techNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + 42 * Math.cos(rad);
          const y = 50 + 42 * Math.sin(rad);
          return (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="absolute group"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-14 h-14 rounded-full glass-panel neon-border flex items-center justify-center group-hover:bg-primary/10 transition-all cursor-pointer">
                <node.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-exo text-[10px] text-muted-foreground mt-2 whitespace-nowrap">{node.label}</p>
            </motion.div>
          );
        })}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          {techNodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(rad);
            const y = 50 + 42 * Math.sin(rad);
            return <line key={node.label} x1="50" y1="50" x2={x} y2={y} stroke="hsl(180 100% 50% / 0.15)" strokeWidth="0.3" />;
          })}
        </svg>
      </div>
    </div>
  </section>
);

export default TechSlide;
