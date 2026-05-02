import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractionSounds from './components/InteractionSounds';

const CustomCursor = lazy(() => import('./components/CustomCursor'));
const ScrollProgress = lazy(() => import('./components/ScrollProgress'));

function App() {
  return (
    <div className="app-shell min-h-screen bg-bg-primary text-text-primary overflow-x-hidden cursor-none">
      <div className="app-backdrop" aria-hidden="true" />
      <InteractionSounds />
      <Suspense fallback={null}>
        <CustomCursor />
        <ScrollProgress />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
