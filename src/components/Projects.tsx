// import { motion, useScroll, useTransform } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Button } from "@/components/ui/button-enhanced";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github, Brain, Bot, Code, Zap } from "lucide-react";
// import useScrollReveal from "@/hooks/useScrollReveal";

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   const projects = [
//     {
//       title: "AI-Powered Chat Assistant",
//       description: "An intelligent chatbot using natural language processing to provide contextual responses. Built with OpenAI's GPT API and real-time conversation capabilities.",
//       tech: ["React", "Node.js", "OpenAI API", "WebSocket", "MongoDB"],
//       github: "https://github.com/sarab/ai-chat-assistant",
//       demo: "https://ai-chat-demo.vercel.app",
//       icon: <Bot className="w-6 h-6" />,
//       gradient: "from-blue-500 to-purple-600",
//       featured: true
//     },
//     {
//       title: "MERN E-Commerce Platform",
//       description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Features real-time order tracking and email notifications.",
//       tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
//       github: "https://github.com/sarab/mern-ecommerce",
//       demo: "https://mern-shop-demo.vercel.app",
//       icon: <Code className="w-6 h-6" />,
//       gradient: "from-green-500 to-teal-600"
//     },
//     {
//       title: "ML Image Classification API",
//       description: "RESTful API for image classification using deep learning. Supports multiple model architectures and provides confidence scores for predictions.",
//       tech: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS S3"],
//       github: "https://github.com/sarab/ml-image-api",
//       demo: "https://ml-api-demo.herokuapp.com",
//       icon: <Brain className="w-6 h-6" />,
//       gradient: "from-purple-500 to-pink-600"
//     },
//     {
//       title: "Real-time Collaboration Tool",
//       description: "A collaborative workspace application with real-time editing, video calls, and project management features. Built for remote teams.",
//       tech: ["Next.js", "Socket.io", "WebRTC", "PostgreSQL", "Redis"],
//       github: "https://github.com/sarab/collab-tool",
//       demo: "https://collab-demo.vercel.app",
//       icon: <Zap className="w-6 h-6" />,
//       gradient: "from-orange-500 to-red-600"
//     },
//     {
//       title: "Smart IoT Dashboard",
//       description: "IoT device monitoring dashboard with data visualization, alerts, and predictive analytics. Connects to multiple sensor types and protocols.",
//       tech: ["React", "D3.js", "MQTT", "InfluxDB", "Python", "Arduino"],
//       github: "https://github.com/sarab/iot-dashboard",
//       demo: "https://iot-demo.netlify.app",
//       icon: <Code className="w-6 h-6" />,
//       gradient: "from-cyan-500 to-blue-600"
//     },
//     {
//       title: "Blockchain Voting System",
//       description: "Secure and transparent voting system using blockchain technology. Ensures vote integrity and provides real-time election results.",
//       tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
//       github: "https://github.com/sarab/blockchain-voting",
//       demo: "https://vote-blockchain-demo.vercel.app",
//       icon: <Brain className="w-6 h-6" />,
//       gradient: "from-indigo-500 to-purple-600"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-background-secondary relative overflow-hidden">
//       {/* Background Pattern with Parallax */}
//       <motion.div 
//         className="absolute inset-0 tech-grid opacity-5"
//         style={{ y }}
//       />
//       <motion.div 
//         className="absolute top-40 left-20 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"
//         style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
//       />
//       <motion.div 
//         className="absolute bottom-40 right-20 w-80 h-80 bg-electric-violet/5 rounded-full blur-3xl"
//         style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
//       />

//       <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Here are some of my recent projects that showcase my skills in AI, full-stack development, and emerging technologies
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               className={`glass rounded-2xl overflow-hidden hover-lift group relative ${
//                 project.featured ? 'lg:col-span-2' : ''
//               }`}
//             >
//               {/* Parallax Background for Each Card */}
//               <motion.div
//                 className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 rounded-2xl`}
//                 style={{
//                   y: useTransform(scrollYProgress, [0, 1], ["0%", `${10 + index * 5}%`])
//                 }}
//               />
              
//               <div className={`relative z-10 p-8 ${project.featured ? 'lg:flex lg:gap-8 lg:items-center' : ''}`}>
//                 <div className={project.featured ? 'lg:flex-1' : ''}>
//                   {/* Project Header */}
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       {project.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>
//                       {project.featured && (
//                         <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mt-1">
//                           Featured
//                         </Badge>
//                       )}
//                     </div>
//                   </div>

//                   {/* Project Description */}
//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech) => (
//                       <Badge
//                         key={tech}
//                         variant="secondary"
//                         className="bg-background-tertiary hover:bg-primary/10 hover:text-primary transition-colors"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>

//                   {/* Project Links */}
//                   <div className="flex gap-4">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       asChild
//                       className="group/btn hover:border-primary hover:text-primary"
//                     >
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
//                         Code
//                       </a>
//                     </Button>
//                     <Button
//                       variant="glow"
//                       size="sm"
//                       asChild
//                       className="group/btn"
//                     >
//                       <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
//                         Live Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Project Visualization (for featured project) */}
//                 {project.featured && (
//                   <div className="lg:flex-1 mt-8 lg:mt-0">
//                     <div className="relative">
//                       <div className={`h-64 bg-gradient-to-br ${project.gradient} rounded-xl opacity-20 blur-sm`}></div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="text-6xl opacity-30">
//                           {project.icon}
//                         </div>
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent rounded-xl"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More Projects Button */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="text-center mt-12"
//         >
//           <Button variant="glass" size="lg" asChild>
//             <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//               <Github className="w-4 h-4 mr-2" />
//               View All Projects on GitHub
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Button } from "@/components/ui/button-enhanced";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github, Brain, Bot, Code, Zap } from "lucide-react";

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   const projects = [
//     {
//       title: "Text-to-ISL Translation",
//       description: `Developed a text-to-ISL translation system focusing on accessibility and real-time gesture representation. Used vector embeddings, cosine similarity, and transformer models to generate pose sequences for effective ISL gesture mapping.`,
//       tech: ["Python", "Cosine Similarity", "Transformers", "Pose Estimation", "Vector Embeddings"],
//       github: "https://github.com/sarab/text-to-isl",
//       icon: <Bot className="w-6 h-6" />,
//       gradient: "from-blue-500 to-purple-600",
//       featured: true,
//       timeline: "Jan 2025 - Aug 2025 (Paper accepted in IEEE-ICCA-2025)"
//     },

//     {
//   title: "CLI-based MCP Document Manager",
//   description: `CLI tool for managing and editing documents with Anthropic Claude AI. Supports natural language commands, AI summarization, Markdown formatting, and smart CLI auto-completion.`,
  
//   tech: ["CLI", "Python", "Anthropic Claude AI", "MCP Architecture"],
//   github: "https://github.com/sarabjothsingh/Cli-based-MCP-Document-manager",
//   icon: <Zap className="w-6 h-6" />,
//   gradient: "from-orange-500 to-red-600",
//   timeline: "Aug 2025"
// },


//     {
//       title: "Automated Credit Scoring System using ML",
//       description: `Built the frontend for a MERN app that predicts creditworthiness using a custom ML model, featuring data visualization, Gmail-based verification, and integrated with a Dockerized Jenkins CI/CD deployment.`,
//       tech: ["React", "Node.js", "Express", "MongoDB", "Python", "ML Models"],
//       github: "https://github.com/NotYC/ML-integrated-CreditScoring",
//       icon: <Code className="w-6 h-6" />,
//       gradient: "from-green-500 to-teal-600",
//       timeline: "Feb 2025 - May 2025"
//     },
//     {
//       title: "Stock Market Research Web App",
//       description: `Built a stock research platform with real-time data visualization and historical trend analysis using a React frontend that displays company stock prices from APIs for data-driven investment decisions.`,
//       tech: ["React", "Chart.js", "APIs", "Node.js"],
//       github: "https://github.com/sarabjothsingh/stock-dashboard",
//       icon: <Brain className="w-6 h-6" />,
//       gradient: "from-purple-500 to-pink-600",
//       timeline: "Sep 2024 - Nov 2024 (Handled full project)"
//     },
//     {
//       title: "Digital Image Processing Research",
//       description: `Conducted advanced research in multimedia security combining Integer Wavelet Transform, deep learning feature extraction, and Non-Negative Matrix Factorization techniques, contributing to robust watermarking methodologies for secure content distribution.`,
//       tech: ["Python", "Deep Learning", "Wavelet Transform", "NMF", "Security"],
//       // github: "https://github.com/sarab/digital-image-research",
//       icon: <Brain className="w-6 h-6" />,
//       gradient: "from-indigo-500 to-purple-600",
//       timeline: "Feb 2024 - May 2024"
//     },
    
//   ];

//   return (
//     <section id="projects" className="py-20 bg-background-secondary relative overflow-hidden">
//       {/* Background Pattern with Parallax */}
//       <motion.div 
//         className="absolute inset-0 tech-grid opacity-5"
//         style={{ y }}
//       />
//       <motion.div 
//         className="absolute top-40 left-20 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"
//         style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
//       />
//       <motion.div 
//         className="absolute bottom-40 right-20 w-80 h-80 bg-electric-violet/5 rounded-full blur-3xl"
//         style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
//       />

//       <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Here are some of my selected projects demonstrating AI, full-stack, and research work.
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               className={`glass rounded-2xl overflow-hidden hover-lift group relative ${
//                 project.featured ? 'lg:col-span-2' : ''
//               }`}
//             >
//               {/* Parallax Background for Each Card */}
//               <motion.div
//                 className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 rounded-2xl`}
//                 style={{
//                   y: useTransform(scrollYProgress, [0, 1], ["0%", `${10 + index * 5}%`])
//                 }}
//               />
              
//               <div className={`relative z-10 p-8 ${project.featured ? 'lg:flex lg:gap-8 lg:items-center' : ''}`}>
//                 <div className={project.featured ? 'lg:flex-1' : ''}>
//                   {/* Project Header */}
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       {project.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>
//                       {project.featured && (
//                         <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mt-1">
//                           Featured
//                         </Badge>
//                       )}
//                       {project.timeline && (
//                         <p className="text-sm text-muted-foreground mt-1">{project.timeline}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Project Description */}
//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech) => (
//                       <Badge
//                         key={tech}
//                         variant="secondary"
//                         className="bg-background-tertiary hover:bg-primary/10 hover:text-primary transition-colors"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>

//                   {/* Project GitHub Link */}
//                   <div className="flex gap-4">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       asChild
//                       className="group/btn hover:border-primary hover:text-primary"
//                     >
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
//                         Code
//                       </a>
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Project Visualization (for featured project) */}
//                 {project.featured && (
//                   <div className="lg:flex-1 mt-8 lg:mt-0">
//                     <div className="relative">
//                       <div className={`h-64 bg-gradient-to-br ${project.gradient} rounded-xl opacity-20 blur-sm`}></div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="text-6xl opacity-30">
//                           {project.icon}
//                         </div>
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent rounded-xl"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button-enhanced";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Bot, Code, Zap } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const projects = [
    {
      title: "Text-to-ISL Translation",
      description: `Developed a text-to-ISL translation system focusing on accessibility and real-time gesture representation. Used vector embeddings, cosine similarity, and transformer models to generate pose sequences for effective ISL gesture mapping.`,
      tech: ["Python", "Cosine Similarity", "Transformers", "Pose Estimation", "Vector Embeddings"],
      icon: <Bot className="w-6 h-6" fill="currentColor" stroke="none" />,
      gradient: "from-blue-500 to-purple-600",
      featured: true,
      timeline: "Jan 2025 - Aug 2025 (Paper accepted in IEEE-ICCA-2025)"
    },

    {
      title: "CLI-based MCP Document Manager",
      description: `CLI tool for managing and editing documents with Anthropic Claude AI. Supports natural language commands, AI summarization, Markdown formatting, and smart CLI auto-completion.`,
      tech: ["CLI", "Python", "Anthropic Claude AI", "MCP Architecture"],
      github: "https://github.com/sarabjothsingh/Cli-based-MCP-Document-manager",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      timeline: "Aug 2025"
    },

    {
      title: "Automated Credit Scoring System using ML",
      description: `Built the frontend for a MERN app that predicts creditworthiness using a custom ML model, featuring data visualization, Gmail-based verification, and integrated with a Dockerized Jenkins CI/CD deployment.`,
      tech: ["React", "Node.js", "Express", "MongoDB", "Python", "ML Models"],
      github: "https://github.com/NotYC/ML-integrated-CreditScoring",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600",
      timeline: "Feb 2025 - May 2025"
    },

    {
      title: "Stock Market Research Web App",
      description: `Built a stock research platform with real-time data visualization and historical trend analysis using a React frontend that displays company stock prices from APIs for data-driven investment decisions.`,
      tech: ["React", "Chart.js", "APIs", "Node.js"],
      github: "https://github.com/sarabjothsingh/stock-dashboard",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      timeline: "Sep 2024 - Nov 2024 (Handled full project)"
    },

    {
      title: "Digital Image Processing Research",
      description: `Conducted advanced research in multimedia security combining Integer Wavelet Transform, deep learning feature extraction, and Non-Negative Matrix Factorization techniques, contributing to robust watermarking methodologies for secure content distribution.`,
      tech: ["Python", "Deep Learning", "Wavelet Transform", "NMF", "Security"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-600",
      timeline: "Feb 2024 - May 2024"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 tech-grid opacity-5"
        style={{ y }}
      />
      <motion.div 
        className="absolute top-40 left-20 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-80 h-80 bg-electric-violet/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my selected projects demonstrating AI, full-stack, and research work.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass rounded-2xl overflow-hidden hover-lift group relative ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Parallax Background for Each Card */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 rounded-2xl`}
                style={{
                  y: useTransform(scrollYProgress, [0, 1], ["0%", `${10 + index * 5}%`])
                }}
              />
              
              <div className={`relative z-10 p-8 ${project.featured ? 'lg:flex lg:gap-8 lg:items-center' : ''}`}>
                <div className={project.featured ? 'lg:flex-1' : ''}>
                  {/* Project Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mt-1">
                          Featured
                        </Badge>
                      )}
                      {project.timeline && (
                        <p className="text-sm text-muted-foreground mt-1">{project.timeline}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-background-tertiary hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project GitHub Link (exclude for research projects) */}
                  {project.github && (
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="group/btn hover:border-primary hover:text-primary"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Project Visualization (for featured project) */}
                {project.featured && (
                  <div className="lg:flex-1 mt-8 lg:mt-0">
                    <div className="relative">
                      <div className={`h-64 bg-gradient-to-br ${project.gradient} rounded-xl opacity-20 blur-sm`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-30">
                          {project.icon}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
