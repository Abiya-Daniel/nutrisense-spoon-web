import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Loader2 } from "lucide-react";

interface NutritionResult {
  food: string;
  calories: number;
  sugar: number;
  protein: number;
  oilQuality: string;
  healthRisk: string;
}

const mockResults: Record<string, NutritionResult> = {
  pizza: { food: "Pizza (1 slice)", calories: 285, sugar: 3.6, protein: 12.2, oilQuality: "Moderate", healthRisk: "Low" },
  burger: { food: "Cheeseburger", calories: 354, sugar: 6.2, protein: 20.1, oilQuality: "Degraded", healthRisk: "Medium" },
  salad: { food: "Caesar Salad", calories: 180, sugar: 2.1, protein: 8.5, oilQuality: "Fresh", healthRisk: "Very Low" },
  rice: { food: "Fried Rice", calories: 238, sugar: 1.8, protein: 5.3, oilQuality: "Moderate", healthRisk: "Low" },
  soup: { food: "Tomato Soup", calories: 120, sugar: 8.1, protein: 3.2, oilQuality: "N/A", healthRisk: "Very Low" },
};

const DemoSlide = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<NutritionResult | null>(null);

  const analyze = () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const key = input.toLowerCase().trim();
      const match = Object.keys(mockResults).find((k) => key.includes(k));
      setResult(match ? mockResults[match] : { food: input, calories: Math.floor(Math.random() * 300 + 100), sugar: +(Math.random() * 10).toFixed(1), protein: +(Math.random() * 25 + 3).toFixed(1), oilQuality: "Unknown", healthRisk: "Unknown" });
      setLoading(false);
    }, 1500);
  };

  const riskColor = (r: string) => {
    if (r === "Very Low" || r === "Low") return "text-green-400";
    if (r === "Medium") return "text-yellow-400";
    return "text-muted-foreground";
  };

  return (
    <section id="Demo" className="slide-section snap-section min-h-screen">
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="font-exo text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Try It</p>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold gradient-text mb-8">Live Demo</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel neon-border p-6">
          <div className="flex gap-3 mb-6">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && analyze()}
              placeholder="Type a food… (pizza, burger, salad)"
              className="flex-1 bg-muted/50 border border-border rounded-lg px-4 py-3 font-exo text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button onClick={analyze} disabled={loading} className="bg-primary text-primary-foreground rounded-lg px-5 py-3 font-exo text-sm font-semibold hover:brightness-110 transition-all disabled:opacity-50">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            </button>
          </div>

          {loading && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-exo text-sm text-primary animate-pulse-glow">
              Analyzing food composition…
            </motion.p>
          )}

          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 text-left">
              <h3 className="font-orbitron text-lg font-bold text-primary">{result.food}</h3>
              {[
                { label: "Calories", value: `${result.calories} kcal`, pct: result.calories / 5 },
                { label: "Sugar", value: `${result.sugar}g`, pct: result.sugar * 10 },
                { label: "Protein", value: `${result.protein}g`, pct: result.protein * 4 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between font-exo text-xs text-muted-foreground mb-1">
                    <span>{item.label}</span>
                    <span className="text-foreground">{item.value}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(item.pct, 100)}%` }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-gradient-to-r from-primary to-neon-blue" />
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t border-border">
                <div className="font-exo text-xs"><span className="text-muted-foreground">Oil Quality: </span><span className="text-foreground">{result.oilQuality}</span></div>
                <div className="font-exo text-xs"><span className="text-muted-foreground">Health Risk: </span><span className={riskColor(result.healthRisk)}>{result.healthRisk}</span></div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSlide;
