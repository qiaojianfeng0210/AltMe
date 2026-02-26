import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from "react";
import { WaitlistModal } from "@/components/WaitlistModal";


export function Hero() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Radial gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-glow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 tracking-widest uppercase">
                Your Parallel Self, Sculpted
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Turn Your{' '}
              <span className="text-gradient">Identity</span>
              <br />
              Into Art
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-white/60 max-w-xl mb-8 leading-relaxed"
            >
              Premium 3D-printed collectible figures that capture the essence of who you are. 
              Custom-crafted, limited edition, uniquely yours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-base transition-all duration-300 hover:scale-[1.02] hover:glow-blue group"
                onClick={() => setWaitlistOpen(true)}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-base transition-all duration-300"
                onClick={() => {
                  document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Explore Collection
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow behind figure */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent blur-2xl" />
              
              {/* Figure image */}
              <motion.img
                src="/images/hero-figure.jpg"
                alt="AltMe Custom Figure"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>

      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

    </section>
  );
}
