import { motion } from 'motion/react';
import { BookOpen, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const papers = [
  {
    title: "Review on Touchless Virtual Mouse Technologies and A.I Voice Assistants",
    conference: "International Journal of Progressive Research in Engineering Management and Science",
    year: "2024",
    description: "This review paper explores the latest advancements shaping Human-Computer Interaction (HCI), with a focus on virtual mouse technologies and AI voice assistants.",
    link: "https://www.researchgate.net/publication/379654145_REVIEW_ON_TOUCHLESS_VIRTUAL_MOUSE_TECHNOLOGIES_AND_AI_VOICE_ASSISTANTS"
  },
  {
    title: "ChatGPT: A Breakthrough in NLP And its Implication For Conversational AI",
    conference: "VIVA TECH-NEXT",
    year: "2024",
    description: "In this research paper, we investigated the capabilities and limitations of ChatGPT in engaging in natural language conversations and interactions with users.",
    link: "https://www.researchgate.net/publication/378144363_ChatGPT_A_Breakthrough_in_NLP_And_its_Implication_For_Conversational_AI"
  },
  {
    title: "Vi-Sahay: A Comprehensive Disaster Alert and Communication System",
    conference: "VIVA TECH-NEXT",
    year: "2023",
    description: "This research paper introduces Vi-Sahay, a unified Android/iOS and web-based platform designed to enhance disaster response coordination between NDRF and NSS/NCC volunteers.",
    link: "https://www.researchgate.net/publication/373360315_Vi-Sahay_A_Comprehensive_Disaster_Alert_and_Communication_System"
  }
];

export default function Research() {
  return (
    <section id="research" className="py-24 relative bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Research & Innovation"
          subtitle="Exploring ideas at the intersection of AI and real-world problems."
        />

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full group hover:-translate-y-1 transition-all duration-300 border-white/5 hover:border-accent-blue/30"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue group-hover:bg-accent-blue/20 transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-accent-cyan border border-white/10 uppercase tracking-wider">
                  {paper.year}
                </span>
              </div>
              
              <div className="flex flex-col gap-4 flex-grow">
                {/* Title with min-height for uniformity */}
                <h3 className="text-xl font-bold text-white leading-tight min-h-[3.5rem] group-hover:text-accent-blue transition-colors">
                  {paper.title}
                </h3>
                
                {/* Conference with min-height for uniformity */}
                <div className="min-h-[2.5rem]">
                  <p className="text-xs uppercase tracking-widest font-mono text-accent-purple font-semibold">
                    {paper.conference}
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  {paper.description}
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/5 mt-auto">
                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-cyan transition-colors"
                >
                  View Publication <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
