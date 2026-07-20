import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import productImg from "@/assets/nutrisense-product.png";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

const VideoModal = ({ open, onClose }: VideoModalProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-background/90 backdrop-blur-xl p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative max-w-3xl w-full aspect-video glass-panel neon-border overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-6 h-6" />
          </button>
          {/* Simulated video with product image */}
          <div className="w-full h-full flex items-center justify-center relative">
            <img src={productImg} alt="NutriSense Demo" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-glow-pulse cursor-pointer">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="font-orbitron text-lg font-bold text-foreground">Product Demo</p>
              <p className="font-exo text-xs text-muted-foreground">NutriSense Spoon — 2046</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default VideoModal;
