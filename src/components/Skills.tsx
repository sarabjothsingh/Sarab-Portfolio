// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { 
//   Code, 
//   Database, 
//   Brain, 
//   Wrench, 
//   Zap,
//   Globe,
//   Server,
//   Cpu
// } from "lucide-react";

// const Skills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: <Globe className="w-6 h-6" />,
//       color: "text-blue-400",
//       bgColor: "bg-blue-400/10",
//       borderColor: "border-blue-400/20",
//       skills: [
//         { name: "React.js", level: 95 },
//         { name: "Next.js", level: 90 },
//         { name: "TypeScript", level: 88 },
//         { name: "Tailwind CSS", level: 92 },
//         { name: "JavaScript", level: 95 },
//         { name: "HTML/CSS", level: 98 }
//       ]
//     },
//     {
//       title: "Backend",
//       icon: <Server className="w-6 h-6" />,
//       color: "text-green-400",
//       bgColor: "bg-green-400/10",
//       borderColor: "border-green-400/20",
//       skills: [
//         { name: "Node.js", level: 90 },
//         { name: "Express.js", level: 88 },
//         { name: "MongoDB", level: 85 },
//         { name: "PostgreSQL", level: 80 },
//         { name: "REST APIs", level: 92 },
//         { name: "GraphQL", level: 75 }
//       ]
//     },
//     {
//       title: "AI/ML",
//       icon: <Brain className="w-6 h-6" />,
//       color: "text-purple-400",
//       bgColor: "bg-purple-400/10",
//       borderColor: "border-purple-400/20",
//       skills: [
//         { name: "Python", level: 90 },
//         { name: "TensorFlow", level: 85 },
//         { name: "PyTorch", level: 80 },
//         { name: "Scikit-learn", level: 88 },
//         { name: "OpenCV", level: 75 },
//         { name: "NLP", level: 82 }
//       ]
//     },
//     {
//       title: "Tools & Others",
//       icon: <Wrench className="w-6 h-6" />,
//       color: "text-orange-400",
//       bgColor: "bg-orange-400/10",
//       borderColor: "border-orange-400/20",
//       skills: [
//         { name: "Git/GitHub", level: 95 },
//         { name: "Docker", level: 80 },
//         { name: "AWS", level: 75 },
//         { name: "Linux", level: 85 },
//         { name: "Figma", level: 70 },
//         { name: "Jest", level: 78 }
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-background relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
//             My <span className="gradient-text">Skills</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Here are the technologies and tools I work with to bring ideas to life
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
//               className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
//             >
//               <div className={`${category.bgColor} ${category.borderColor} border w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                 <span className={category.color}>
//                   {category.icon}
//                 </span>
//               </div>
              
//               <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
//                     className="group/skill"
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-sm font-medium text-foreground">{skill.name}</span>
//                       <span className="text-xs text-muted-foreground">{skill.level}%</span>
//                     </div>
//                     <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={isInView ? { width: `${skill.level}%` } : {}}
//                         transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
//                         className="h-full bg-gradient-primary rounded-full relative"
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Interactive Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {[
//             { icon: <Code />, label: "Languages", count: "3" },
//             { icon: <Database />, label: "Databases", count: "2" },
//             { icon: <Cpu />, label: "Frameworks", count: "" },
//             { icon: <Zap />, label: "Tools", count: "15+" }
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
//               className="text-center glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
//             >
//               <div className="text-primary mb-3 flex justify-center">
//                 {stat.icon}
//               </div>
//               <div className="text-2xl font-bold gradient-text mb-1">{stat.count}</div>
//               <div className="text-sm text-muted-foreground">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { 
//   Brain, 
//   Wrench, 
//   Globe,
//   Server
// } from "lucide-react";
// import SpotlightCard from "./Spotlight";

// const Skills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: <Globe className="w-6 h-6" />,
//       color: "text-blue-400",
//       bgColor: "bg-blue-400/10",
//       borderColor: "border-blue-400/20",
//       spotlightColor: "rgba(0, 229, 255, 0.2)",
//       skills: ["React.js", "Bootstrap", "Tailwind CSS", "JavaScript", "HTML/CSS"]
//     },
//     {
//       title: "Backend",
//       icon: <Server className="w-6 h-6" />,
//       color: "text-green-400",
//       bgColor: "bg-green-400/10",
//       borderColor: "border-green-400/20",
//       spotlightColor: "rgba(0, 255, 128, 0.2)",
//       skills: ["Node.js", "MongoDB", "MySQL"]
//     },
//     {
//       title: "AI/ML",
//       icon: <Brain className="w-6 h-6" />,
//       color: "text-purple-400",
//       bgColor: "bg-purple-400/10",
//       borderColor: "border-purple-400/20",
//       spotlightColor: "rgba(200, 0, 255, 0.2)",
//       skills: ["Python", "TensorFlow", "MCP", "OpenCV", "NLP"]
//     },
//     {
//       title: "Tools & Others",
//       icon: <Wrench className="w-6 h-6" />,
//       color: "text-orange-400",
//       bgColor: "bg-orange-400/10",
//       borderColor: "border-orange-400/20",
//       spotlightColor: "rgba(255, 165, 0, 0.2)",
//       skills: ["Git/GitHub", "Docker",  "Linux", "Figma", "Framer"]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-background relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
//             My <span className="gradient-text">Skills</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Here are the technologies and tools I work with to bring ideas to life
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
//             >
//               <SpotlightCard
//                 className="p-6 rounded-2xl h-full flex flex-col"
//                 spotlightColor={category.spotlightColor}
//               >
//                 <div className={`${category.bgColor} ${category.borderColor} border w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
//                   <span className={category.color}>{category.icon}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
//                 <ul className="space-y-2">
//                   {category.skills.map((skill, skillIndex) => (
//                     <motion.li
//                       key={skill}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : {}}
//                       transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
//                       className="text-sm font-medium text-foreground"
//                     >
//                       {skill}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </SpotlightCard>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Brain, Wrench, Globe, Server } from "lucide-react";
// import SpotlightCard from "./Spotlight";

// const Skills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: <Globe className="w-6 h-6" />,
//       color: "text-blue-400",
//       bgColor: "bg-blue-400/10",
//       borderColor: "border-blue-400/20",
//       spotlightColor: "rgba(0, 229, 255, 0.2)",
//       skills: ["React.js", "Bootstrap", "Tailwind CSS", "JavaScript", "HTML/CSS"]
//     },
//     {
//       title: "Backend",
//       icon: <Server className="w-6 h-6" />,
//       color: "text-green-400",
//       bgColor: "bg-green-400/10",
//       borderColor: "border-green-400/20",
//       spotlightColor: "rgba(0, 255, 128, 0.2)",
//       skills: ["Node.js", "MongoDB", "MySQL"]
//     },
//     {
//       title: "AI/ML",
//       icon: <Brain className="w-6 h-6" />,
//       color: "text-purple-400",
//       bgColor: "bg-purple-400/10",
//       borderColor: "border-purple-400/20",
//       spotlightColor: "rgba(200, 0, 255, 0.2)",
//       skills: ["Python", "TensorFlow", "MCP", "OpenCV", "NLP"]
//     },
//     {
//       title: "Tools & Others",
//       icon: <Wrench className="w-6 h-6" />,
//       color: "text-orange-400",
//       bgColor: "bg-orange-400/10",
//       borderColor: "border-orange-400/20",
//       spotlightColor: "rgba(255, 165, 0, 0.2)",
//       skills: ["Git/GitHub", "Docker", "Linux", "Figma", "Framer"]
//     }
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen flex flex-col justify-center py-20 bg-background relative overflow-hidden"
//       ref={ref}
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
//             My <span className="gradient-text">Skills</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Here are the technologies and tools I work with to bring ideas to life
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
//         </motion.div>

//         {/* Skill Cards Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
//             >
//               <SpotlightCard
//                 className="p-6 rounded-2xl h-full flex flex-col"
//                 spotlightColor={category.spotlightColor}
//               >
//                 <div
//                   className={`${category.bgColor} ${category.borderColor} border w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
//                 >
//                   <span className={category.color}>{category.icon}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
//                 <ul className="space-y-2">
//                   {category.skills.map((skill, skillIndex) => (
//                     <motion.li
//                       key={skill}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : {}}
//                       transition={{
//                         duration: 0.6,
//                         delay: categoryIndex * 0.2 + skillIndex * 0.1
//                       }}
//                       className="text-sm font-medium text-foreground"
//                     >
//                       {skill}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </SpotlightCard>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Wrench, Globe, Server } from "lucide-react";
import SpotlightCard from "./Spotlight";
import LightRays from "./Lightrays";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      spotlightColor: "rgba(0, 229, 255, 0.2)",
      skills: ["React.js", "Bootstrap", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
      spotlightColor: "rgba(0, 255, 128, 0.2)",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      spotlightColor: "rgba(200, 0, 255, 0.2)",
      skills: ["Python", "TensorFlow", "MCP", "OpenCV", "NLP"]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20",
      spotlightColor: "rgba(255, 165, 0, 0.2)",
      skills: ["Git/GitHub", "Docker", "Linux", "Figma", "Framer"]
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
      ref={ref}
    >
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Background Blurs / Circles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Skills Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <SpotlightCard
                className="p-6 rounded-2xl h-full flex flex-col"
                spotlightColor={category.spotlightColor}
              >
                <div
                  className={`${category.bgColor} ${category.borderColor} border w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <span className={category.color}>{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1
                      }}
                      className="text-sm font-medium text-foreground"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

