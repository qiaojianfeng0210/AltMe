import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeInView } from '@/components/FadeInView';

const steps = [
  {
    number: '01',
    title: 'Identity Blueprint',
    description: 'Provide three photos (front, left, right) to define your likeness, and select the persona you want to embody — hero, badass, or beyond.'
  },
  {
    number: '02',
    title: 'Expert Design',
    description: 'Our artists powered by AI assistance craft detailed 3D models with cinematic precision, refining every detail until perfect.'
  },
  {
    number: '03',
    title: 'Face Confirmation',
    description: 'We share the sculpted face design for your review, ensuring it truly reflects you. Your feedback becomes part of the creative process, while the rest of the figure remains a carefully kept surprise until the final reveal.'
  },
  {
    number: '04',
    title: 'Precision Printing',
    description: 'Using industrial-grade 3D printers, we create your figure with micron-level accuracy.'
  }
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex gap-8"
    >
      {/* Timeline line */}
      {index < steps.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-7 top-16 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-blue-500/50 to-transparent origin-top"
        />
      )}

      {/* Number */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.2 + 0.1,
          ease: [0.34, 1.56, 0.64, 1]
        }}
        className="relative z-10 flex-shrink-0 w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center"
      >
        <span className="text-lg font-bold text-blue-400">{step.number}</span>
      </motion.div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-white/60 leading-relaxed max-w-md">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#111]">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeInView>
              <span className="text-sm text-blue-400 tracking-widest uppercase mb-4 block">
                The Process
              </span>
            </FadeInView>
            
            <FadeInView delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                From Vision to{' '}
                <span className="text-gradient">Reality</span>
              </h2>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <p className="text-white/60 text-lg leading-relaxed">
                Creating your custom figure is a journey of collaboration and craftsmanship. 
                Here&apos;s how we bring your parallel self to life.
              </p>
            </FadeInView>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
