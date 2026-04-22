/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-bg-primary text-text-primary selection:bg-accent-purple/30 selection:text-white">
      <CustomCursor />
      <BackgroundParticles />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
