import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative z-10 border-t border-primary/20 bg-card/60 backdrop-blur-xl">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-orbitron text-lg font-bold text-primary neon-text mb-3">NutriSense</h3>
            <p className="font-exo text-xs text-muted-foreground">The Future of Smart Eating</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-orbitron text-xs font-semibold tracking-wider uppercase text-foreground mb-4">Product</h4>
            {["Features", "Technology", "Demo", "Pricing"].map((l) => (
              <p key={l} className="font-exo text-xs text-muted-foreground mb-2 hover:text-primary transition-colors cursor-pointer">{l}</p>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-orbitron text-xs font-semibold tracking-wider uppercase text-foreground mb-4">Company</h4>
            {["About", "Vision", "Careers", "Investors"].map((l) => (
              <p key={l} className="font-exo text-xs text-muted-foreground mb-2 hover:text-primary transition-colors cursor-pointer">{l}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-xs font-semibold tracking-wider uppercase text-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="font-exo text-xs text-muted-foreground flex items-center gap-2"><Mail className="w-3 h-3 text-primary" /> hello@nutrisense.ai</p>
              <p className="font-exo text-xs text-muted-foreground flex items-center gap-2"><Phone className="w-3 h-3 text-primary" /> +1 (800) NUTRI-AI</p>
              <p className="font-exo text-xs text-muted-foreground flex items-center gap-2"><MapPin className="w-3 h-3 text-primary" /> San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Subscribe to updates"
              className="bg-muted/50 border border-border rounded-lg px-4 py-2 font-exo text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 w-56"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-exo text-xs font-semibold hover:brightness-110 transition-all">
              Subscribe
            </button>
          </div>
          <p className="font-exo text-[10px] text-muted-foreground">© 2046 NutriSense. All rights reserved. · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
