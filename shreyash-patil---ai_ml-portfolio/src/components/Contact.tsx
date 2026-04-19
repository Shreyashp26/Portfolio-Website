import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, ExternalLink, Copy, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('shreyashpatil269@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'shreyashpatil269@gmail.com',
      link: null,
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10'
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Shreyash Patil',
      link: 'https://www.linkedin.com/in/shreyash-avinash-patil',
      color: 'text-accent-blue',
      bgColor: 'bg-accent-blue/10'
    },
    {
      id: 'github',
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'Shreyashp26',
      link: 'https://github.com/Shreyashp26',
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10'
    },
    {
      id: 'location',
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Dublin, Ireland',
      link: null,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-bg-alt border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Let’s Connect"
          subtitle="Open to AI/ML opportunities, collaborations, and interesting projects."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div 
                className={`glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-white/30 transition-all duration-300 h-full relative ${item.link ? 'cursor-pointer' : ''}`}
              >
                {item.link && (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-0"
                    aria-label={item.label}
                  />
                )}
                
                <div className={`p-4 rounded-xl ${item.bgColor} ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {item.icon}
                </div>
                <h3 className="text-xs uppercase tracking-widest text-text-secondary font-mono mb-2 relative z-10">{item.label}</h3>
                <div className="flex flex-col items-center gap-2 relative z-10 w-full overflow-hidden">
                  <p className="text-white font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-accent-cyan transition-colors max-w-full">
                    {item.value}
                    {item.link && item.id !== 'email' && <ExternalLink className="w-3 h-3 inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </p>
                  
                  {item.id === 'email' && (
                    <button 
                      onClick={handleCopyEmail}
                      className="mt-2 text-[10px] flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:bg-white/10 hover:text-white transition-all relative z-20 pointer-events-auto cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://www.linkedin.com/in/shreyash-avinash-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] hover:scale-105 transition-all duration-300"
          >
            Send a Message
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
      
      <footer className="mt-24 pb-8 text-center text-sm text-text-secondary font-mono border-t border-white/5 pt-12">
        <p>Designed & Built by Shreyash Patil</p>
        <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </section>
  );
}
