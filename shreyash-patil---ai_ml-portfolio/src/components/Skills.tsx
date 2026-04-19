import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "SQL"]
  },
  {
    title: "AI / Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Computer Vision", "Deep Learning"]
  },
  {
    title: "Generative AI",
    skills: ["LLMs", "Prompt Engineering", "LangChain", "AI Agents", "NLP", "Hugging Face"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Git","Tableau", "Qualtrics", "Canva", "AI-Tools"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="My Tech Stack"
          subtitle="Tools and technologies I use to build intelligent systems."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary hover:text-white hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
