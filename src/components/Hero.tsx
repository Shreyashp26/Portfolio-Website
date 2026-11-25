import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

// Profile photo. Best practice: put the file in /public (e.g. public/profile.jpg)
// and set this to '/profile.jpg' so it is served by Vercel with the site.
const PROFILE_PHOTO = 'https://i.ibb.co/N6Mz0SFn/image.png';

export default function Hero() {
  // Parallax uses motion values so mouse movement does not re-render the component.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 50, damping: 15 });
  const y = useSpring(rawY, { stiffness: 50, damping: 15 });
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 20);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rawX, rawY]);

  // Random values computed once, so the particles do not jump on every render.
  const particles = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        left: 20 + Math.random() * 60,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">Shreyash Patil</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-text-secondary">
            <span className="text-gradient">AI/ML Engineer</span> & Innovator
          </h2>
          
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
            Designing and developing AI systems across NLP, computer vision, and generative AI to solve real-world problems.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="#projects" 
              className="group relative px-6 py-3 bg-white text-bg-primary font-semibold rounded-lg overflow-hidden flex items-center gap-2 transition-transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="https://drive.google.com/file/d/17Ggu-2_iWTmRIPT72bMvxb0603eeGxoY/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 hover:border-accent-purple/50 rounded-lg font-medium flex items-center gap-2 transition-all hover:bg-white/5"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ x, y }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center h-[300px] sm:h-[380px] lg:h-[600px]"
        >
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] flex items-center justify-center">
            {/* Deep Blue Background Glow */}
            <div className="absolute w-[100%] h-[100%] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute w-[70%] h-[70%] bg-cyan-500/10 rounded-full blur-[80px] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Rotating Interactive Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[110%] h-[110%] border border-accent-purple/20 rounded-full border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[120%] h-[120%] border border-accent-blue/10 rounded-full border-dashed"
            />

            {/* Elegant Static Image Container */}
            <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] xl:w-[450px] xl:h-[450px] z-10">
              {/* Outer Glass Ring */}
              <div className="absolute -inset-6 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-[0_0_80px_rgba(37,99,235,0.2)]" />
              
              {/* Inner Image Wrapper with Gradient Border */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-b from-accent-cyan/40 via-accent-purple/10 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#050B14] group">
                  
                  {/* Image */}
                  {photoFailed ? (
                    // Never fall back to a stranger's stock photo: show initials instead.
                    <div className="w-full h-full flex items-center justify-center font-heading font-bold text-6xl lg:text-8xl text-white/80">
                      SP
                    </div>
                  ) : (
                    <img
                      src={PROFILE_PHOTO}
                      alt="Shreyash Patil"
                      width={450}
                      height={450}
                      fetchPriority="high"
                      className="w-full h-full object-cover object-top filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={() => setPhotoFailed(true)}
                    />
                  )}
                  
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050B14]/80 via-transparent to-transparent mix-blend-overlay" />
                  
                  {/* Hover Glow Overlay */}
                  <div className="absolute inset-0 bg-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>
              </div>
            </div>

            {/* Floating Social Cards */}
            {/* GitHub */}
            <motion.a 
              href="https://github.com/Shreyashp26"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute hidden lg:flex top-[20%] left-[-5%] z-20 bg-[#0A1128]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 rounded-2xl items-center gap-3 hover:bg-white/10 transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent-purple/20 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="pr-2">
                <div className="text-sm font-bold text-white">GitHub</div>
                <div className="text-xs text-gray-400 font-medium">@Shreyashp26</div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              href="https://www.linkedin.com/in/shreyash-avinash-patil/"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute hidden lg:flex bottom-[20%] right-[-5%] z-20 bg-[#0A1128]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 rounded-2xl items-center gap-3 hover:bg-white/10 transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent-blue/20 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="pr-2">
                <div className="text-sm font-bold text-white">LinkedIn</div>
                <div className="text-xs text-gray-400 font-medium">Connect with me</div>
              </div>
            </motion.a>

            {/* Subtle Rising Particles */}
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#22d3ee]"
                style={{
                  left: `${p.left}%`,
                  bottom: '10%',
                }}
                animate={{
                  y: [0, -400],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: p.delay,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-text-secondary tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-purple to-transparent" />
      </motion.div>
    </section>
  );
}
