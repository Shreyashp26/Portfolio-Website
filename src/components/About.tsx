import { motion } from 'motion/react';
import { Brain, Code2, Database } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Years Experience', value: '1' },
    { label: 'Research Papers', value: '3' },
    { label: 'Research Reads', value: '2000+' },
  ];

  return (
    <section id="about" className="py-16 relative bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Who I Am"
          subtitle="A glimpse into my journey, passion, and vision in AI."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-text-secondary text-lg leading-relaxed"
          >
            <p>
              I am an AI/ML Engineer with a strong passion for <span className="text-white font-medium">Generative AI, Natural Language Processing, and Computer Vision</span>. I hold an <span className="text-white font-medium">MSc in Computing (Artificial Intelligence)</span> from Dublin City University and specialize in building intelligent systems that solve real-world problems.
            </p>
            <p>
             My experience includes working on AI chatbots, computer vision applications, and real-world problem-solving projects through internships and projects. I use machine learning models and fine-tuned LLMs like LLaMA and Qwen in real-world applications, including chatbots and deepfake detection.
            </p>
            <p>
              Whether it's fine-tuning LLMs or deploying AI-powered applications, I thrive at the intersection of innovation and impactful problem-solving.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-text-secondary">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards / Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 lg:-mt-24"
          >
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-accent-purple/10 rounded-lg text-accent-purple">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">AI & Generative AI</h3>
                <p className="text-text-secondary text-sm">Designing and fine-tuning machine learning models and LLM-powered applications using TensorFlow and Hugging Face.</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4 ml-0 md:ml-8">
              <div className="p-3 bg-accent-blue/10 rounded-lg text-accent-blue">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Software Engineering</h3>
                <p className="text-text-secondary text-sm">Building scalable backends, APIs, and integrating AI models into production environments.</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-accent-cyan/10 rounded-lg text-accent-cyan">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Science</h3>
                <p className="text-text-secondary text-sm">Extracting insights from large datasets using Python, SQL, and Tableau, enabling data-driven decision-making.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
