import { motion } from 'framer-motion';
import { Terminal, Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

const footerLinks = {
  Navigation: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ],
  Content: [
    { label: 'Open Source', href: '#opensource' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: '/resume.pdf' },
  ],
  Social: [
    { label: 'GitHub', href: 'https://github.com', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { label: 'Email', href: 'mailto:hello@marcuschen.dev', icon: Mail },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-8 border-t border-border-default">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="flex items-center gap-2 mb-4 group"
              whileHover={{ x: 4 }}
            >
              <motion.div
                className="w-9 h-9 rounded-lg bg-bg-secondary border border-border-default flex items-center justify-center"
                whileHover={{ rotate: 10, borderColor: 'rgba(62,207,142,0.3)' }}
              >
                <Terminal className="w-5 h-5 text-accent-green" />
              </motion.div>
              <span className="font-mono font-bold text-text-primary">
                marcus<span className="text-accent-green">.dev</span>
              </span>
            </motion.a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Senior Software Engineer & UI/UX Designer building scalable systems 
              and beautiful interfaces. Available for freelance and full-time opportunities.
            </p>
            <div className="flex gap-3">
              {footerLinks.Social.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-bg-secondary border border-border-default flex items-center justify-center text-text-muted hover:text-accent-green hover:border-accent-green/30 transition-all"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.Navigation.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-green transition-colors inline-block"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Content</h4>
            <ul className="space-y-3">
              {footerLinks.Content.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-green transition-colors inline-block"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.Social.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-accent-green transition-colors flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-text-muted flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
          >
            Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </motion.span>{' '}
            by Marcus Chen © {new Date().getFullYear()}
          </motion.p>
          <MagneticButton strength={0.2}>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-green transition-colors"
              whileHover={{ y: -2 }}
            >
              Back to top
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
