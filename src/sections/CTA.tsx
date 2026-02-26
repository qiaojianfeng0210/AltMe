import { motion } from 'framer-motion';
import { FadeInView } from '@/components/FadeInView';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState } from "react";
import { WaitlistModal } from "@/components/WaitlistModal";

export function CTA() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-2xl mb-8"
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
          </motion.div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Meet Your{' '}
            <span className="text-gradient">Parallel Self?</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Start your custom figure journey today. Limited slots available each month 
            to ensure every piece receives the attention it deserves.
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Browse Collection
            </Button>
          </div>
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="text-sm text-white/40 mt-8">
            Free consultation • No commitment required
          </p>
        </FadeInView>
      </div>

      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

    </section>
  );
}
