import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Features } from '@/sections/Features';
import { Process } from '@/sections/Process';
import { Gallery } from '@/sections/Gallery';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { ThankYouPage } from '@/sections/ThankYouPage'; // Import the ThankYouPage

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navigation />
        <main>
          <Routes>
            {/* Define routes for the main sections of your site */}
            <Route path="/" element={<><Hero /><About /><Features /><Process /><Gallery /><CTA /></>} />

            {/* Add the route for the Thank You page */}
            <Route path="/thankyou" element={<ThankYouPage />} /> {/* This will display the Thank You page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
