import { motion } from 'framer-motion';
import { FadeInView } from '@/components/FadeInView';
import { CountUp } from '@/components/CountUp';

const stats = [
  { value: 100, suffix: '%', label: 'Human Designer' },
  { value: 1, suffix: ' only', label: 'One-of-a-kind Creation' },
  { value: 100, suffix: '%', label: 'Museum-Grade Quality' }
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeInView direction="left" className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/images/gallery-1.jpg"
                  alt="AltMe Figure Craftsmanship"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -bottom-6 -right-6 bg-[#1a1a1a] border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Premium Quality</p>
                    <p className="text-white/50 text-sm">Museum-grade finish</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeInView>

          {/* Content */}
          <div className="lg:pl-8">
            <FadeInView delay={0.1}>
              <span className="text-sm text-blue-400 tracking-widest uppercase mb-4 block">
                About AltMe
              </span>
            </FadeInView>

            <FadeInView delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Where Story Meets{' '}
                <span className="text-gradient">Sculpture</span>
              </h2>
            </FadeInView>

            <FadeInView delay={0.3}>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                At AltMe, we create more than just figures — we craft personalized experiences. Our figures combine cinematic design with advanced 3D printing, resulting in unique collectibles that celebrate creativity and individuality.
              </p>
            </FadeInView>

            <FadeInView delay={0.4}>
              <p className="text-white/60 leading-relaxed mb-10">
                Using AI, we start with a creative concept, then refine it with our designers to capture your essence. You will confirm your face, and the rest remains a delightful surprise, like opening a "blind box."
              </p>
            </FadeInView>

            <FadeInView delay={0.4}>
              <p className="text-white/60 leading-relaxed mb-10">
                Finally, your figure is 3D-printed with care and precision, ready for you to discover the unique version of yourself. At AltMe, we believe everyone should see themselves as the hero of their own story.
              </p>
            </FadeInView>

            {/* Stats */}
            <FadeInView delay={0.5}>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      <CountUp end={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <p className="text-sm text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
