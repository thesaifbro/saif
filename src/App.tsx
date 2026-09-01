import { useEffect } from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Powers } from './components/Powers';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { Manifesto } from './components/Manifesto';
import { Experiments } from './components/Experiments';
import { Contact } from './components/Contact';

export default function App() {
  // Handle direct URL navigation on page load
  useEffect(() => {
    const path = window.location.pathname.substring(1);
    if (path && path !== 'index.html') {
      setTimeout(() => {
        const target = document.querySelector(`#${path}`);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 3000); // Wait for preloader to finish
    }
  }, []);

  return (
    <CursorProvider>
      <div className="bg-[#050505] min-h-screen text-[#F5F5F0] selection:bg-[#FF3333] selection:text-white">
        <CustomCursor />
        <Preloader />
        <Navbar />
        
        <main>
          <Hero />
          <Marquee />
          <About />
          <Journey />
          <Powers />
          <Projects />
          <Experience />
          <Manifesto />
          <Experiments />
        </main>
        
        <Contact />

        {/* Global Noise Filter */}
        <div 
          className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-[100]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.65\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"/%3E%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\"/%3E%3C/svg%3E")' }}
        />
      </div>
    </CursorProvider>
  );
}
