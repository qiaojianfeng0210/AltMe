import { motion } from 'framer-motion';
import { FadeInView } from '@/components/FadeInView';
import { Separator } from '@/components/ui/separator';
import { Instagram, Twitter, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Shipping Info', href: '#' }
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Email', icon: Mail, href: '#' }
];

export function Footer() {
  const HEADER_OFFSET = 80; // your header height (h-20 = 80px)

  function scrollToId(hash: string) {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      HEADER_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <FadeInView className="lg:col-span-1">
            <div>
              <img 
                src="/images/logo.png" 
                alt="AltMe Studio" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Turning identity into art. Premium 3D-printed collectible figures 
                crafted with cinematic precision.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-500/30 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Quick Links */}
          <FadeInView delay={0.1}>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToId(link.href);
                      }}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Legal */}
          <FadeInView delay={0.2}>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Studio Info */}
          <FadeInView delay={0.3}>
            <div>
              <h4 className="text-white font-semibold mb-4">AltMe Studio</h4>

              <p className="text-white/50 text-sm mb-4">
                Creators of Parallel Identity Collectibles
              </p>

              <p className="text-white/50 text-sm mb-4">
                Email: contact@altme.studio
              </p>

              <p className="text-white/50 text-sm mb-4">
                Based in California
              </p>

              <p className="text-white/50 text-sm mb-4">
                Launching on Kickstarter 2026
              </p>
            </div>
          </FadeInView>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Copyright */}
        <FadeInView delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 AltMe Studio. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Crafted with precision and passion.
            </p>
          </div>
        </FadeInView>
      </div>
    </footer>
  );
}