import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedText';
import { FadeInView } from '@/components/FadeInView';
import { ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryItems = [
  {
    src: '/images/hero-figure.jpg',
    title: 'The Visionary',
    description: 'Genius reimagined'
  },
  {
    src: '/images/gallery-1.jpg',
    title: 'The Guardian',
    description: 'Ancient protector'
  },
  {
    src: '/images/gallery-2.jpg',
    title: 'The Creator',
    description: 'Artistic spirit'
  },
  {
    src: '/images/gallery-3.jpg',
    title: 'The Explorer',
    description: 'Space pioneer'
  },
  {
    src: '/images/gallery-4.jpg',
    title: 'The Sage',
    description: 'Mystical wisdom'
  },
  {
    src: '/images/gallery-5.jpg',
    title: 'The Innovator',
    description: 'Tech visionary'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeInView>
            <span className="text-sm text-blue-400 tracking-widest uppercase mb-4 block">
              Gallery
            </span>
          </FadeInView>
          
          <FadeInView delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured{' '}
              <span className="text-gradient">Creations</span>
            </h2>
          </FadeInView>
          
          <FadeInView delay={0.2}>
            <p className="text-white/60 text-lg">
              Explore our collection of custom-crafted figures, each telling its own unique story.
            </p>
          </FadeInView>
        </div>

        {/* Gallery Grid */}
        <StaggerContainer 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
          delayChildren={0.3}
        >
          {galleryItems.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400" />
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex flex-col justify-end p-6"
                >
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                  
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-[#0a0a0a] border-white/10 p-0 overflow-hidden">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">{selectedImage.title}</h3>
                  <p className="text-white/60">{selectedImage.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
