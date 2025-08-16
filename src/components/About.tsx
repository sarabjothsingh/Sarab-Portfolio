// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Code, Brain, Coffee } from "lucide-react";
// import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   return (
//     <section id="about" className="py-20 bg-background-secondary relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 tech-grid opacity-10"></div>
      
//       <div className="max-w-6xl mx-auto px-6" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
//             About <span className="gradient-text">Me</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative w-80 h-80 mx-auto lg:mx-0">
//               <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
//               <img
//                 src={avatarPlaceholder}
//                 alt="Sarab's Profile"
//                 className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-card hover:scale-105 transition-transform duration-300"
//               />
//               {/* Floating Icons */}
//               <motion.div
//                 className="absolute -top-4 -right-4 bg-primary p-3 rounded-full shadow-lg"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               >
//                 <Brain className="text-white" size={24} />
//               </motion.div>
//               <motion.div
//                 className="absolute -bottom-4 -left-4 bg-accent p-3 rounded-full shadow-lg"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 <Code className="text-white" size={24} />
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Content Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <div className="glass p-8 rounded-2xl">
//               <h3 className="text-2xl font-semibold mb-4 text-primary">Hello, I'm Sarab! 👋</h3>
//               <p className="text-lg leading-relaxed text-muted-foreground mb-6">
//                 I'm a passionate <span className="text-primary font-medium">B.Tech Computer Science & Engineering</span> student 
//                 with a specialization in <span className="text-accent font-medium">Artificial Intelligence</span>. 
//                 My journey in tech is driven by curiosity and a desire to solve complex problems.
//               </p>
              
//               <p className="text-lg leading-relaxed text-muted-foreground mb-6">
//                 I specialize in the <span className="text-primary font-medium">MERN stack</span> and have deep understanding 
//                 in <span className="text-accent font-medium">machine learning</span> and <span className="text-primary font-medium">AI, NLP research</span>. 
//                 I love building intelligent applications that make a real-world impact.
//               </p>

//               {/* Fun Fact */}
//               <div className="bg-background-tertiary p-4 rounded-lg border-l-4 border-accent">
//                 <div className="flex items-center gap-3 mb-2">
//                   <Coffee className="text-accent" size={20} />
//                   <span className="font-semibold text-accent"></span>
//                 </div>
//                 <p className="text-muted-foreground">
//                   Always curious, always experimenting. Most recent: an AI that actually understands food
//                 </p>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="text-center glass p-4 rounded-xl"
//               >
//                 <div className="text-2xl font-bold text-primary">Multiple</div>
//                 <div className="text-sm text-muted-foreground">Projects</div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className="text-center glass p-4 rounded-xl"
//               >
//                 <div className="text-2xl font-bold text-accent">3+</div>
//                 <div className="text-sm text-muted-foreground">Years</div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="text-center glass p-4 rounded-xl"
//               >
//                 <div className="text-2xl font-bold text-primary-glow">∞</div>
//                 <div className="text-sm text-muted-foreground">Coffee Cups</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Coffee } from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";
import Squares from "./Squares";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="relative py-20 bg-background-secondary min-h-screen overflow-hidden"
      ref={ref}
    >
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares 
          speed={0.35} 
          squareSize={30}
          direction='diagonal'
          borderColor='#513f67ff'
          hoverFillColor='#222'
        />
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
              <img
                src={avatarPlaceholder}
                alt="Sarab's Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-card hover:scale-105 transition-transform duration-300"
              />
              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary p-3 rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="text-white" size={24} />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-accent p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Hello, I'm Sarab! 👋</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm a passionate <span className="text-primary font-medium">B.Tech Computer Science & Engineering</span> student 
                with a specialization in <span className="text-accent font-medium">Artificial Intelligence</span>. 
                My journey in tech is driven by curiosity and a desire to solve complex problems.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I specialize in the <span className="text-primary font-medium">MERN stack</span> and have deep understanding 
                in <span className="text-accent font-medium">machine learning</span> and <span className="text-primary font-medium">AI, NLP research</span>. 
                I love building intelligent applications that make a real-world impact.
              </p>

              {/* Fun Fact */}
              <div className="bg-background-tertiary p-4 rounded-lg border-l-4 border-accent">
                <div className="flex items-center gap-3 mb-2">
                  <Coffee className="text-accent" size={20} />
                  <span className="font-semibold text-accent"></span>
                </div>
                <p className="text-muted-foreground">
                  Always curious, always experimenting. Most recent: an AI that actually understands food
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center glass p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-primary">Multiple</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center glass p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center glass p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-primary-glow">∞</div>
                <div className="text-sm text-muted-foreground">Coffee Cups</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
