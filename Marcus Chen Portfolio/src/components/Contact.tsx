import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Calendar, Github, Linkedin, Twitter, MessageSquare, CheckCircle, Loader2, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';
import StaggerText from './StaggerText';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@marcuschen.dev', href: 'mailto:hello@marcuschen.dev' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
    { icon: Calendar, label: 'Availability', value: 'Open to opportunities', href: null },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com', handle: '@marcuschen' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', handle: '/in/marcuschen' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', handle: '@marcus_dev' },
    { icon: MessageSquare, label: 'Discord', href: '#', handle: 'marcus#1234' },
  ];

  return (
    <SectionWrapper id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel label="Get In Touch" className="justify-center" />
          <StaggerText
            text="Let's build something amazing"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            Whether you have a project in mind, want to collaborate on open source, 
            or just want to chat about tech, I'm always happy to connect.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-bg-secondary border border-border-default flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5, borderColor: 'rgba(62,207,142,0.3)' }}
                  >
                    <item.icon className="w-5 h-5 text-accent-green" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-text-primary hover:text-accent-green transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-text-primary">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border-default">
              <h3 className="text-sm font-semibold text-text-primary mb-4">Connect Online</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary border border-border-default hover:border-accent-green/30 transition-colors group"
                  >
                    <motion.div whileHover={{ rotate: 10 }}>
                      <social.icon className="w-4 h-4 text-text-muted group-hover:text-accent-green transition-colors" />
                    </motion.div>
                    <div>
                      <div className="text-sm text-text-primary">{social.label}</div>
                      <div className="text-xs text-text-muted">{social.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <TiltCard tiltAmount={4}>
              <div className="glass rounded-xl p-5 border border-border-default top-glow-blue">
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-accent-green"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="text-sm font-medium text-text-primary">Quick Response</span>
                </div>
                <p className="text-sm text-text-secondary">
                  I typically respond within 24 hours. For urgent inquiries, 
                  reach out on Twitter or Discord.
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <TiltCard tiltAmount={3}>
              <SpotlightCard>
                <div className="glass rounded-xl p-6 sm:p-8 border border-border-default top-glow-green">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-text-muted text-xs font-mono">contact.sh</span>
                  </div>

                  {formState === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle className="w-16 h-16 text-accent-green mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h3>
                      <p className="text-text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { key: 'name', label: 'name', type: 'text', placeholder: 'John Doe' },
                          { key: 'email', label: 'email', type: 'email', placeholder: 'john@example.com' },
                        ].map((field) => (
                          <div key={field.key}>
                            <label className="block text-sm text-text-muted mb-2 font-mono">
                              <motion.span
                                className="text-accent-green"
                                animate={focusedField === field.key ? { opacity: [1, 0.5, 1] } : {}}
                                transition={{ repeat: Infinity, duration: 1 }}
                              >
                                $
                              </motion.span>{' '}
                              {field.label}
                            </label>
                            <motion.input
                              type={field.type}
                              required
                              value={formData[field.key as keyof typeof formData]}
                              onChange={e => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                              onFocus={() => setFocusedField(field.key)}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-default text-text-primary placeholder-text-muted focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green/20 transition-all"
                              placeholder={field.placeholder}
                              whileFocus={{ scale: 1.01 }}
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-sm text-text-muted mb-2 font-mono">
                          <motion.span
                            className="text-accent-green"
                            animate={focusedField === 'subject' ? { opacity: [1, 0.5, 1] } : {}}
                            transition={{ repeat: Infinity, duration: 1 }}
                          >
                            $
                          </motion.span>{' '}
                          subject
                        </label>
                        <motion.input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-default text-text-primary placeholder-text-muted focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green/20 transition-all"
                          placeholder="Project collaboration"
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-text-muted mb-2 font-mono">
                          <motion.span
                            className="text-accent-green"
                            animate={focusedField === 'message' ? { opacity: [1, 0.5, 1] } : {}}
                            transition={{ repeat: Infinity, duration: 1 }}
                          >
                            $
                          </motion.span>{' '}
                          message
                        </label>
                        <motion.textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border-default text-text-primary placeholder-text-muted focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green/20 transition-all resize-none"
                          placeholder="Tell me about your project..."
                          whileFocus={{ scale: 1.01 }}
                        />
                      </div>

                      <MagneticButton strength={0.15}>
                        <motion.button
                          type="submit"
                          disabled={formState === 'submitting'}
                          className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {formState === 'submitting' ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                              <Sparkles className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>
                      </MagneticButton>
                    </form>
                  )}
                </div>
              </SpotlightCard>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
