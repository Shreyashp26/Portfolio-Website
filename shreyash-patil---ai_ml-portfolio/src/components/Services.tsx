import { motion } from 'motion/react';
import { Brain, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="What I Bring to the Table"
          subtitle="How I can contribute to building impactful AI solutions."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: AI & ML Development */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning Development</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Building intelligent systems using machine learning, NLP, and computer vision through hands-on projects and real-world applications.
              </p>
              
              <ul className="space-y-3">
                {[
                  'NLP & LLM-based Applications', 
                  'Computer Vision Systems (OpenCV, MediaPipe)', 
                  'AI tools', 
                  'AI Agents'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-purple flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: AI Applications & Data Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <Layers className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">AI Applications & Data Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Applying AI and data analysis to solve real-world problems through scalable applications and data-driven insights.
              </p>
              
              <ul className="space-y-3">
                {[
                  'AI Chatbots using Hugging Face APIs', 
                  'Data Analysis & Visualization (Python, SQL, Tableau)', 
                  'Propt Engineering', 
                  'Model Development & Optimization'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
