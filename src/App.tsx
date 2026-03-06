import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Cases from './components/Cases';
import Calculator from './components/Calculator';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Brief from './components/Brief';
import Process from './components/Process';
import MarqueeSection from './components/MarqueeSection';
import BackgroundText from './components/BackgroundText';
import { motion, useScroll, useSpring } from 'motion/react';

function ScrollToAnchor() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);
  return null;
}

function HomePage() {
  return (
    <div className="relative alcantara-bg overflow-hidden">
      {/* Fluffy 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-aura-navy/5 rounded-full blur-[120px] fluffy-blur" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-aura-navy/3 rounded-full blur-[150px] fluffy-blur" 
        />
      </div>

      <div className="relative z-20">
        <BackgroundText text="AURA" top="10%" left="-5%" rotate={-10} speed={0.5} opacity={0.04} />
        <BackgroundText text="DIGITAL" top="25%" right="-10%" rotate={15} speed={-0.3} opacity={0.03} />
        <BackgroundText text="EXCELLENCE" top="45%" left="-15%" rotate={-5} speed={0.4} opacity={0.02} />
        <BackgroundText text="FUTURE" top="65%" right="-15%" rotate={10} speed={-0.2} opacity={0.03} />
        <BackgroundText text="AURA" top="85%" left="-5%" rotate={-15} speed={0.6} opacity={0.04} />
      </div>

      <div className="relative z-30">
        <Hero />
        <About />
        <Features />
        <Process />
        <MarqueeSection />
        <Services />
        <Cases />
        <Calculator />
        <CTA />
      </div>

      {/* SVG Filter for Fluffy Effect */}
      <svg className="hidden">
        <filter id="fluffyFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
        </filter>
      </svg>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToAnchor />
      <div className="relative bg-white min-h-screen selection:bg-aura-navy selection:text-white">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-aura-navy origin-left z-[100]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/brief" element={<Brief />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
