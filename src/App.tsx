import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Features } from '@/sections/Features';
import { Process } from '@/sections/Process';
import { Gallery } from '@/sections/Gallery';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Process />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
