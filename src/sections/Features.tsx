import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedText';
import { FadeInView } from '@/components/FadeInView';
import { Palette, Gem, Star, Monitor } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Full Customization',
    description: 'Designed by human artists and powered by AI assistance, each figure transforms your identity into a one-of-a-kind collectible or entirely original character.'
  },
  {
    icon: Gem,
    title: 'Premium Craftsmanship',
    description: 'Designed by human artists and enhanced by AI, each figure is created with premium 3D printing for museum-quality detail.'
  },
  {
    icon: Star,
    title: 'Exclusive Releases',
    description: 'Every figure is one-of-a-kind, personalized with your face, and produced within carefully limited series to preserve rarity and collector value.'
  },
  {
    icon: Monitor,
    title: 'Perfect for Collectors',
    description: 'Your AltMe figure shows you in another universe — a reminder that life is full of possibilities, and you can become whoever you choose to be.'
  }
];

export function Features() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeInView>
            <span className="text-sm text-blue-400 tracking-widest uppercase mb-4 block">
              Why AltMe
            </span>
          </FadeInView>
          
          <FadeInView delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Crafted for{' '}
              <span className="text-gradient">Collectors</span>
            </h2>
          </FadeInView>
          
          <FadeInView delay={0.2}>
            <p className="text-white/60 text-lg">
              Every AltMe figure is a masterpiece of design and engineering, 
              created to stand the test of time.
            </p>
          </FadeInView>
        </div>

        {/* Features Grid */}
        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
          delayChildren={0.3}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="group relative h-full"
              >
                <div className="relative h-full bg-[#111] border border-white/10 rounded-2xl p-8 transition-all duration-400 group-hover:border-blue-500/30 group-hover:bg-[#141414]">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-400"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <feature.icon className="w-7 h-7 text-blue-400" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
