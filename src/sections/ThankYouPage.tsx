// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Instagram, Twitter, Mail } from 'lucide-react';

export function ThankYouPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Thank you for Joining the Waitlist!
        </h1>
        <p className="text-white/80 text-xl mb-6">
          You're now on the list to be the first to experience the unique AltMe collectible figures when we launch on Kickstarter.
        </p>
        <p className="text-white/60 text-md">
          We appreciate your interest, and we can't wait to share more with you. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}