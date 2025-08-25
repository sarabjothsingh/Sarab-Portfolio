// import { motion, useTransform, useScroll } from "framer-motion";
// import { Button } from "@/components/ui/button-enhanced";
// import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
// import NeuronBackground from "./NeuronBackground";

// const Hero = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Layered Parallax Background */}
//       <motion.div 
//         className="absolute inset-0 z-0"
//         style={{ y }}
//       >
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url(${heroBg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed'
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
//       </motion.div>

//       {/* Secondary Parallax Layer */}
//       <motion.div 
//         className="absolute inset-0 z-5 tech-grid opacity-20"
//         style={{ 
//           y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) 
//         }}
//       />

//       {/* Neuron Interactive Background */}
//       <div className="absolute inset-0 z-10">
//         <NeuronBackground />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 z-10">
//         <motion.div
//           className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full"
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full"
//           animate={{ y: [0, 30, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         />
//         <motion.div
//           className="absolute bottom-32 left-32 w-1 h-1 bg-primary-glow rounded-full"
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         />
//       </div>

//       {/* Main Content */}
//       <motion.div 
//         className="relative z-20 max-w-4xl mx-auto px-6 text-center"
//         style={{ opacity, scale }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1 
//             className="text-6xl md:text-8xl font-bold mb-6 font-heading"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <span className="electric-text">Sarab</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             AI & MERN Developer | Researcher | Problem Solver
//           </motion.p>

//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Button 
//               variant="hero" 
//               size="xl"
//               onClick={() => scrollToSection('projects')}
//               className="group"
//             >
//               View Projects
//               <motion.span
//                 className="ml-2 group-hover:translate-x-1 transition-transform"
//                 whileHover={{ x: 5 }}
//               >
//                 →
//               </motion.span>
//             </Button>
//             <Button 
//               variant="glass" 
//               size="xl"
//               onClick={() => scrollToSection('contact')}
//             >
//               Contact Me
//             </Button>
//           </motion.div>

//           <motion.div 
//             className="flex justify-center gap-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <a 
//               href="https://github.com" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
//             >
//               <Github size={24} />
//             </a>
//             <a 
//               href="https://linkedin.com" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a 
//               href="mailto:sarab@example.com"
//               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
//             >
//               <Mail size={24} />
//             </a>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         onClick={() => scrollToSection('about')}
//       >
//         <Button variant="ghost" size="icon" className="cursor-pointer hover:bg-transparent">
//           <ChevronDown className="text-muted-foreground hover:text-primary transition-colors" size={32} />
//         </Button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// import { motion, useTransform, useScroll } from "framer-motion";
// import { Button } from "@/components/ui/button-enhanced";
// import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
// import NeuronBackground from "./NeuronBackground";

// const Hero = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
//       {/* Background Image Layer - Reduced opacity */}
//       <motion.div 
//         className="absolute inset-0 z-0"
//         style={{ y }}
//       >
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             backgroundImage: `url(${heroBg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed'
//           }}
//         />
//         {/* Reduced gradient overlay opacity */}
//         <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
//       </motion.div>

//       {/* Tech Grid - Reduced opacity */}
//       <motion.div 
//         className="absolute inset-0 z-5 tech-grid opacity-10"
//         style={{ 
//           y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) 
//         }}
//       />

//       {/* Aurora Background - Higher z-index and better positioning */}
//       <div className="absolute inset-0 z-15">
//         <NeuronBackground />
//       </div>

//       {/* Floating Elements - Adjusted z-index */}
//       <div className="absolute inset-0 z-20">
//         <motion.div
//           className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full"
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full"
//           animate={{ y: [0, 30, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         />
//         <motion.div
//           className="absolute bottom-32 left-32 w-1 h-1 bg-primary-glow rounded-full"
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         />
//       </div>

//       {/* Main Content - Higher z-index */}
//       <motion.div 
//         className="relative z-30 max-w-4xl mx-auto px-6 text-center"
//         style={{ opacity, scale }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1 
//             className="text-6xl md:text-8xl font-bold mb-6 font-heading"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <span className="electric-text">Sarab</span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             AI & MERN Developer | Researcher | Problem Solver
//           </motion.p>

//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Button 
//               variant="hero" 
//               size="xl"
//               onClick={() => scrollToSection('projects')}
//               className="group"
//             >
//               View Projects
//               <motion.span
//                 className="ml-2 group-hover:translate-x-1 transition-transform"
//                 whileHover={{ x: 5 }}
//               >
//                 →
//               </motion.span>
//             </Button>
//             <Button 
//               variant="glass" 
//               size="xl"
//               onClick={() => scrollToSection('contact')}
//             >
//               Contact Me
//             </Button>
//           </motion.div>

//           <motion.div 
//             className="flex justify-center gap-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <a 
//               href="https://github.com" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
//             >
//               <Github size={24} />
//             </a>
//             <a 
//               href="https://linkedin.com" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a 
//               href="mailto:sarab@example.com"
//               className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
//             >
//               <Mail size={24} />
//             </a>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         onClick={() => scrollToSection('about')}
//       >
//         <Button variant="ghost" size="icon" className="cursor-pointer hover:bg-transparent">
//           <ChevronDown className="text-muted-foreground hover:text-primary transition-colors" size={32} />
//         </Button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// import { motion, useTransform, useScroll } from "framer-motion";
// import { Button } from "@/components/ui/button-enhanced";
// import { ChevronDown } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
// import NeuronBackground from "./NeuronBackground";
// import RotatingText from "./RotatingText";
// import { useState, useEffect } from 'react';

// // Decrypt Text Animation Component
// const DecryptText = ({ text, className }: { text: string; className?: string }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [isDecrypted, setIsDecrypted] = useState(false);
  
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
  
//   useEffect(() => {
//     let animationId: number;
//     let iteration = 0;
    
//     const animate = () => {
//       setDisplayText(
//         text
//           .split('')
//           .map((letter, index) => {
//             if (index < iteration) {
//               return letter;
//             }
//             return characters[Math.floor(Math.random() * characters.length)];
//           })
//           .join('')
//       );
      
//       if (iteration >= text.length) {
//         setIsDecrypted(true);
//         return;
//       }
      
//       iteration += 1 / 3;
//       animationId = requestAnimationFrame(animate);
//     };
    
//     const timer = setTimeout(() => {
//       animate();
//     }, 500);
    
//     return () => {
//       clearTimeout(timer);
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [text]);
  
//   return (
//     <span className={className}>
//       {displayText}
//     </span>
//   );
// };

// const Hero = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
//       {/* Background Image Layer - Reduced opacity */}
//       <motion.div 
//         className="absolute inset-0 z-0"
//         style={{ y }}
//       >
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             backgroundImage: `url(${heroBg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed'
//           }}
//         />
//         {/* Reduced gradient overlay opacity */}
//         <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
//       </motion.div>

//       {/* Tech Grid - Reduced opacity */}
//       <motion.div 
//         className="absolute inset-0 z-5 tech-grid opacity-10"
//         style={{ 
//           y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) 
//         }}
//       />

//       {/* Aurora Background */}
//       <div className="absolute inset-0 z-15">
//         <NeuronBackground />
//       </div>

//       {/* Main Content */}
//       <motion.div 
//         className="relative z-30 max-w-4xl mx-auto px-6 text-center"
//         style={{ opacity, scale }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Decrypt Animation for Name */}
//           <motion.h1 
//             className="text-6xl md:text-8xl font-bold mb-6 font-heading"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <DecryptText text="Sarab Bhatia" className="electric-text" />
//           </motion.h1>
          
//           {/* Rotating Text for Roles */}
//           <motion.div
//             className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <RotatingText
//               texts={['Exploring AI and ML', 'Exploring Web Development', 'Researcher', 'Problem Solver']}
//               mainClassName="px-3 sm:px-4 md:px-5 bg-cyan-300/20 text-cyan-300 overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg backdrop-blur-sm border border-cyan-300/30"
//               staggerFrom={"last"}
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-120%" }}
//               staggerDuration={0.025}
//               splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//               transition={{ type: "spring", damping: 30, stiffness: 400 }}
//               rotationInterval={3000}
//             />
//           </motion.div>

//           {/* Buttons */}
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <Button 
//               variant="hero" 
//               size="xl"
//               onClick={() => scrollToSection('projects')}
//               className="group"
//             >
//               View Projects
//               <motion.span
//                 className="ml-2 group-hover:translate-x-1 transition-transform"
//                 whileHover={{ x: 5 }}
//               >
//                 →
//               </motion.span>
//             </Button>
//             <Button 
//               variant="glass" 
//               size="xl"
//               onClick={() => scrollToSection('contact')}
//             >
//               Contact Me
//             </Button>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         onClick={() => scrollToSection('about')}
//       >
//         <Button variant="ghost" size="icon" className="cursor-pointer hover:bg-transparent">
//           <ChevronDown className="text-muted-foreground hover:text-primary transition-colors" size={32} />
//         </Button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// import { motion, useTransform, useScroll } from "framer-motion";
// import { Button } from "@/components/ui/button-enhanced";
// import { ChevronDown } from "lucide-react";

// // Aurora lights background only (remove image)
// import NeuronBackground from "./NeuronBackground";
// import RotatingText from "./RotatingText";
// import { useState, useEffect } from 'react';

// // DecryptText animation: No textbox, no background, only text
// const DecryptText = ({ text, className }: { text: string; className?: string }) => {
//   const [displayText, setDisplayText] = useState('');
//   useEffect(() => {
//     let animationId: number;
//     let iteration = 0;
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
//     const animate = () => {
//       setDisplayText(
//         text
//           .split('')
//           .map((letter, index) => {
//             if (index < iteration) {
//               return letter;
//             }
//             return characters[Math.floor(Math.random() * characters.length)];
//           })
//           .join('')
//       );
//       if (iteration >= text.length) {
//         return;
//       }
//       iteration += 1 / 3;
//       animationId = requestAnimationFrame(animate);
//     };
//     const timer = setTimeout(() => {
//       animate();
//     }, 500);
//     return () => {
//       clearTimeout(timer);
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [text]);
//   return (
//     <span className={className}>{displayText}</span>
//   );
// };

// const Hero = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       className="relative min-h-screen flex flex-col items-center justify-center"
//       style={{ backgroundColor: "#192B34" }} // Background color set
//     >
//       {/* Aurora/Neuron Background */}
//       <div className="absolute inset-0 z-0">
//         <NeuronBackground />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center gap-4">
//         {/* Name Animation, white text, no box */}
//         <h1 className="text-5xl font-bold text-white mb-2 select-none">
//           <DecryptText text="Sarab Bhatia" className="text-white" />
//         </h1>

//         {/* Rotating Text, dark background */}
//         <div className="text-lg text-gray-100 mb-8">
//           <RotatingText
//             texts={["AI and ML", "Web Development", "Research", "Problem Solving"]}
//             rotationInterval={2500}
//             mainClassName="text-white font-medium"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4">
//           <Button
//             onClick={() => scrollToSection('projects')}
//             className="rounded-full bg-white text-black px-6 py-2 font-semibold shadow transition hover:bg-gray-100"
//           >
//             View Projects
//           </Button>
//           <Button
//             onClick={() => scrollToSection('contact')}
//             className="rounded-full bg-white text-black px-6 py-2 font-semibold shadow transition hover:bg-gray-100"
//           >
//             Contact Me
//           </Button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <button
//           onClick={() => scrollToSection('about')}
//           className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
//         >
//           <ChevronDown />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import { motion, useTransform, useScroll } from "framer-motion";
// import { Button } from "@/components/ui/button-enhanced";
// import { ChevronDown } from "lucide-react";
// import NeuronBackground from "./NeuronBackground";
// import RotatingText from "./RotatingText";
// import ScrambledText from "./ScrambleText";

// const Hero = () => {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       className="relative min-h-screen flex flex-col items-center justify-center"
//       style={{ backgroundColor: "#120917ff" }}
//     >
//       {/* Aurora/Neuron Background */}
//       <div className="absolute inset-0 z-0">
//         <NeuronBackground />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-4 flex flex-col items-center justify-center">
//         {/* Large, custom font ScrambledText for Name */}
//         <h1 className="text-4xl font-extrabold font-serif text-white mb-0 ">
//           <ScrambledText
//             className="scrambled-text-demo text-white"
//             radius={100}
//             duration={1.2}
//             speed={0.5}
//             scrambleChars=".:."
//           >
//             Sarab Bhatia
//           </ScrambledText>
//         </h1>
//         {/* Rotating Text directly below name, no extra space */}
//         <div className="text-2xl text-gray-100 mb-0 mt-0 leading-none">
//           <RotatingText
//             texts={["AI and ML", "Web Development", "Research", "Problem Solving"]}
//             rotationInterval={2500}
//             mainClassName="text-white font-small"
//           />
//         </div>
//         {/* Buttons */}
//         <div className="flex gap-4 mt-8">
//           <Button
//             onClick={() => scrollToSection('projects')}
//             className="rounded-full bg-white text-black px-6 py-2 font-semibold shadow transition hover:bg-gray-100"
//           >
//             View Projects
//           </Button>
//           <Button
//             onClick={() => scrollToSection('contact')}
//             className="rounded-full bg-white text-black px-6 py-2 font-semibold shadow transition hover:bg-gray-100"
//           >
//             Contact Me
//           </Button>
//         </div>
//       </div>
//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//         <button
//           onClick={() => scrollToSection('about')}
//           className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
//         >
//           <ChevronDown />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button-enhanced";
import { ChevronDown } from "lucide-react";
import NeuronBackground from "./NeuronBackground";
import RotatingText from "./RotatingText";
import ScrambledText from "./ScrambleText";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#130a15ff" }}
    >
      {/* Aurora/Neuron Background */}
      <div className="absolute inset-0 z-0">
        <NeuronBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-0">
        {/* Large, custom font ScrambledText for Name */}
        <span className="block text-xl font-extrabold font-serif text-white p-0 m-0 select-none leading-tight">
          <ScrambledText
            className="scrambled-text-demo text-white p-0 m-0"
            radius={75}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            Sarab Bhatia
          </ScrambledText>
        </span>
        {/* Rotating Text directly below name, no extra space */}
        <span className="block text-l text-white p-0 mt-4 leading-tight">
          <RotatingText
            texts={["AI and ML", "Web Development", "Research", "Problem Solving"]}
            rotationInterval={2500}
            mainClassName="text-white font-medium p-0 m-0"
          />
        </span>
        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Button
            onClick={() => scrollToSection('projects')}
            className="rounded-full bg-white text-black px-6 py-1 font-semibold shadow transition hover:bg-gray-100"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-white text-black px-6 py-2 font-semibold shadow transition hover:bg-gray-100"
          >
            Contact Me
          </Button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition"
        >
          <ChevronDown />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
