import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${isCenter ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        <span className="text-white">{title.split(' ')[0]} </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">
          {title.split(' ').slice(1).join(' ')}
        </span>
      </h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`text-lg text-text-secondary max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}
      >
        {subtitle}
      </motion.p>

      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: isCenter ? '80px' : '100px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
        className={`h-1.5 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mt-6 shadow-[0_0_15px_rgba(168,85,247,0.5)] ${isCenter ? 'mx-auto' : ''}`} 
      />
    </motion.div>
  );
}
