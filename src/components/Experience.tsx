import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "TCIA Global Pvt. Ltd.",
    location: "Mumbai, India",
    date: "Aug 2023 - Nov 2023",
    description: [
      "Developed and designed an AI-powered chatbot using Python and Hugging Face APIs, improving user engagement by 20%.",
      "Built NLP-based machine learning pipelines for intent recognition and response generation, increasing accuracy by 25%.",
      "Applied prompt engineering and model tuning techniques to enhance contextual understanding."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "ISAN Data Systems Pvt. Ltd.",
    location: "Bangalore, India",
    date: "April 2023 - June 2023",
    description: [
      "Gathered, cleaned, and validated datasets exceeding 10 million records using Python and SQL.",
      "Developed interactive Tableau dashboards to track performance metrics and communicate insights to stakeholders.",
      "Analyzed datasets to identify trends and key performance indicators (KPIs) supporting data-driven decisions."
    ]
  }
];

const education = [
  {
    degree: "MSc in Computing (Artificial Intelligence)",
    institution: "Dublin City University",
    location: "Dublin, Ireland",
    date: "2024 - 2025",
    achievements: [
      "Specialized in Artificial Intelligence with a focus on Deep Learning, Natural Language Processing, and Computer Vision.",
      "Member of the Indian Society (2024 – 2025).",
      "Conducted research on Machine learning models for Deep-Fake Detection"
    ]
  },
  {
    degree: "BE in Computer Engineering",
    institution: "Mumbai University",
    location: "Mumbai, India",
    date: "2020 - 2024",
    achievements: [
      "Marketing Lead, Entrepreneurship-Cell VIVA (2022 – 2023).",
      "Member, Computer Society of India VIVA and National Service Scheme (NSS)(2021 – 2022).",
      "Built a strong foundation in Data Structures, Algorithms, and Software Engineering, along with contributing to research publications."
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const currentData = activeTab === 'experience' ? experiences : education;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="My Journey"
          subtitle="Where I've applied my skills and created value."
          align="center"
        />

        {/* Toggle Switch */}
        <div className="text-center mb-16">
          <div className="inline-flex p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'experience' 
                ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                : 'text-text-secondary hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'education' 
                ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                : 'text-text-secondary hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              {currentData.map((item: any, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-12 relative pl-8 md:pl-12"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                  
                  <div className="glass-card p-6 md:p-8 rounded-2xl relative group hover:border-accent-purple/50 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {activeTab === 'experience' ? <Briefcase className="w-5 h-5 text-accent-cyan" /> : <GraduationCap className="w-5 h-5 text-accent-cyan" />}
                          {activeTab === 'experience' ? item.role : item.degree}
                        </h3>
                        <h4 className="text-lg text-accent-purple font-medium">
                          {activeTab === 'experience' ? item.company : item.institution}
                        </h4>
                        <div className="flex items-center gap-1.5 text-text-secondary text-sm mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary text-sm font-mono bg-white/5 px-3 py-1 rounded-full w-fit h-fit">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-text-secondary">
                      {(activeTab === 'experience' ? item.description : item.achievements).map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent-blue mt-1.5 text-xs">▹</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
