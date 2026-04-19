import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Github, ExternalLink, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    title: "Deepfake Detection",
    description:
      "Developed a multimodal deepfake detection system using a hybrid CNN–LSTM architecture to analyze both facial video and audio signals. Trained on the FakeAVCeleb dataset, the model achieved 93% accuracy and F1-score. This project demonstrates the effectiveness of audio-visual fusion for media verification and cybersecurity applications.",
    tags: [
      "Python",
      "TensorFlow",
      "Librosa",
      "CNN",
      "LSTM",
      "MFCC",
      "Multimodal Learning"
    ],
    links: { github: "https://github.com/Shreyashp26/DeepFake-Detection", paper: "https://drive.google.com/file/d/1b06p4oqrK5PN7MdHvBk3FoZ_DDb1LSdr/view?usp=sharing" }
  },
  {
    title: "Ni-Sparsh",
    description:
      "Developed a touchless virtual mouse and voice-controlled AI assistant using MediaPipe and OpenCV for real-time gesture-based cursor control. Integrated speech recognition with a Hugging Face LLaMA model to generate intelligent responses, enhancing human–computer interaction.",
    tags: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Hugging Face",
      "Computer Vision",
      "Speech Recognition"
    ],
    links: { github: "https://github.com/Shreyashp26/Ni-Sparsh", paper: "https://drive.google.com/file/d/1qixV6X7M1hr2DqWzRN52R2tQIgWz4w3o/view" }
  },
  {
    title: "Vi-Sahay",
    description:
      "Developed Vi-Sahay, an innovative Android/iOS and web-based disaster alert and communication platform that connects NSS/NCC volunteers with the National Disaster Response Force (NDRF). The system enables real-time geo-location alerts, volunteer registration, and group chat communication to ensure efficient coordination during emergencies. Built using Flutter, Firebase, and PHP, it also supports donation management.",
    tags: [
      "Flutter",
      "Firebase",
      "Html",
      "CSS",
      "PHP",
      "Twilio"
    ],
    links: { github: "https://github.com/Shreyashp26/Vi-sahay", paper: "https://drive.google.com/file/d/1GWYEo-7LAgLjWghCwwPWyvGP0B1Ym-vN/view?usp=sharing" }
  },
  {
    title: "SevaRohi",
    description:
      "Created a web-based emergency ambulance service to connect patients with the nearest hospitals. The platform supports real-time request handling and efficient coordination between users and healthcare providers. Developed using HTML, CSS, JavaScript, PHP, and MySQL.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    links: { github: "https://github.com/Shreyashp26/Sevarohi", demo: "#" }
  }
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Projects That Define Me"
          subtitle="Real-world applications of AI, built with purpose and impact."
        />

        <div className="relative group/slider max-w-6xl mx-auto">
          {/* Navigation Buttons - More prominent and positioned outside */}
          <button className="swiper-button-prev-custom absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-accent-purple/30 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-accent-purple/60 hover:border-white hover:scale-110 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-0">
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button className="swiper-button-next-custom absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-accent-purple/30 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-accent-purple/60 hover:border-white hover:scale-110 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-0">
            <ChevronRight className="w-8 h-8" />
          </button>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full py-16 !overflow-visible"
          >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="!w-[320px] sm:!w-[400px] md:!w-[450px] px-4">
              <div className="glass-card rounded-2xl h-full flex flex-col overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] border-white/5 hover:border-accent-purple/40">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-bg-secondary relative overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-mono text-4xl font-bold">{project.title.substring(0, 2).toUpperCase()}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-accent-purple bg-accent-purple/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.links.github && (
                      <a href={project.links.github} className="text-text-secondary hover:text-white transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="text-text-secondary hover:text-white transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.paper && (
                      <a href={project.links.paper} className="text-text-secondary hover:text-white transition-colors" aria-label="Research Paper">
                        <FileText className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
