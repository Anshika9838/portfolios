import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-lg bg-bg-secondary border border-border-default flex items-center justify-center group-hover:border-accent-green/50 transition-colors">
                <Terminal className="w-5 h-5 text-accent-green" />
              </div>
              <span className="font-mono font-bold text-text-primary text-sm hidden sm:block">
                marcus<span className="text-accent-green">.dev</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent-green bg-accent-green-glow'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <div className="w-px h-5 bg-border-default mx-1" />
              <button 
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-sm py-2 px-4"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute top-16 left-4 right-4 glass-strong rounded-xl overflow-hidden shadow-2xl">
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-accent-green bg-accent-green-glow'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 mt-3 border-t border-border-default">
                  <button 
                    onClick={() => scrollTo('#contact')}
                    className="w-full btn-primary text-sm py-3"
                  >
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
