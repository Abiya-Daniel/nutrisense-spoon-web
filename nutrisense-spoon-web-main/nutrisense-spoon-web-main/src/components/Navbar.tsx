import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "Features", "Tech", "Demo", "Vision", "Contact"];

interface NavbarProps {
  scrollProgress: number;
  onNavClick: (section: string) => void;
  activeSection: string;
}

const Navbar = ({ scrollProgress, onNavClick, activeSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(scrollProgress > 0.02);
  }, [scrollProgress]);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <div className="scroll-progress h-full transition-all duration-150" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => onNavClick("Home")} className="font-orbitron text-lg font-bold tracking-wider text-primary neon-text">
            NUTRISENSE
          </button>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavClick(item)}
                className={`relative font-exo text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {activeSection === item && (
                  <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
