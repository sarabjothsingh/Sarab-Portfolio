// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { 
//   Briefcase, 
//   GraduationCap, 
//   Trophy, 
//   FileText,
//   Calendar,
//   MapPin,
//   ExternalLink 
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button-enhanced";

// const Experience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   const experiences = [
//     {
//       type: "internship",
//       title: "AI Research Intern",
//       company: "TechCorp AI Labs",
//       location: "Remote",
//       duration: "Jun 2024 - Aug 2024",
//       description: "Developed machine learning models for natural language processing tasks. Implemented transformer-based architectures and achieved 15% improvement in model accuracy.",
//       technologies: ["Python", "PyTorch", "Transformers", "NLP", "Docker"],
//       icon: <Briefcase className="w-5 h-5" />,
//       color: "text-blue-400",
//       bgColor: "bg-blue-400/10"
//     },
//     {
//       type: "internship",
//       title: "Full Stack Developer Intern",
//       company: "StartupXYZ",
//       location: "Bangalore, India",
//       duration: "Dec 2023 - Feb 2024",
//       description: "Built responsive web applications using MERN stack. Collaborated with design team to implement UI/UX improvements that increased user engagement by 30%.",
//       technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
//       icon: <Briefcase className="w-5 h-5" />,
//       color: "text-green-400",
//       bgColor: "bg-green-400/10"
//     },
//     {
//       type: "achievement",
//       title: "Winner - AI Hackathon 2024",
//       company: "IEEE Computer Society",
//       location: "Delhi, India",
//       duration: "Mar 2024",
//       description: "Led team of 4 to develop an AI-powered healthcare assistant. Won first place among 150+ teams with our innovative solution for medical diagnosis support.",
//       technologies: ["TensorFlow", "React Native", "Flask", "MongoDB"],
//       icon: <Trophy className="w-5 h-5" />,
//       color: "text-yellow-400",
//       bgColor: "bg-yellow-400/10"
//     },
//     {
//       type: "research",
//       title: "Research Paper Published",
//       company: "International Journal of AI Research",
//       location: "Online",
//       duration: "Jan 2024",
//       description: "Co-authored paper on 'Efficient Neural Architecture Search for Edge Devices'. Proposed novel optimization techniques for mobile AI applications.",
//       technologies: ["Neural Architecture Search", "Mobile AI", "Optimization"],
//       icon: <FileText className="w-5 h-5" />,
//       color: "text-purple-400",
//       bgColor: "bg-purple-400/10",
//       link: "https://example.com/research-paper"
//     },
//     {
//       type: "certification",
//       title: "AWS Certified Developer",
//       company: "Amazon Web Services",
//       location: "Online",
//       duration: "Nov 2023",
//       description: "Achieved AWS Certified Developer - Associate certification. Demonstrated proficiency in developing and maintaining AWS-based applications.",
//       technologies: ["AWS", "Lambda", "DynamoDB", "S3", "CloudFormation"],
//       icon: <GraduationCap className="w-5 h-5" />,
//       color: "text-orange-400",
//       bgColor: "bg-orange-400/10"
//     },
//     {
//       type: "achievement",
//       title: "Runner-up - Smart India Hackathon",
//       company: "Government of India",
//       location: "Mumbai, India",
//       duration: "Sep 2023",
//       description: "Developed smart city solution for traffic management using IoT and AI. Secured second position in national-level competition with 1000+ participating teams.",
//       technologies: ["IoT", "Computer Vision", "React", "Python", "MQTT"],
//       icon: <Trophy className="w-5 h-5" />,
//       color: "text-yellow-400",
//       bgColor: "bg-yellow-400/10"
//     }
//   ];

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "internship": return <Briefcase className="w-4 h-4" />;
//       case "achievement": return <Trophy className="w-4 h-4" />;
//       case "research": return <FileText className="w-4 h-4" />;
//       case "certification": return <GraduationCap className="w-4 h-4" />;
//       default: return <Briefcase className="w-4 h-4" />;
//     }
//   };

//   const getTypeColor = (type: string) => {
//     switch (type) {
//       case "internship": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
//       case "achievement": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
//       case "research": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
//       case "certification": return "bg-green-500/10 text-green-400 border-green-500/20";
//       default: return "bg-blue-500/10 text-blue-400 border-blue-500/20";
//     }
//   };

//   return (
//     <section id="experience" className="py-20 bg-background relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
//         <div className="absolute inset-0 tech-grid opacity-5"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
//             Experience & <span className="gradient-text">Achievements</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             My journey through internships, research, competitions, and continuous learning
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>

//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={`${exp.title}-${index}`}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 className="relative flex gap-8 group"
//               >
//                 {/* Timeline Dot */}
//                 <div className="relative z-10 flex-shrink-0">
//                   <div className={`w-16 h-16 rounded-full ${exp.bgColor} border-2 border-current ${exp.color} flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
//                     {exp.icon}
//                   </div>
//                 </div>

//                 {/* Content Card */}
//                 <div className="flex-1 glass p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
//                   {/* Header */}
//                   <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
//                     <div>
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
//                         <Badge variant="secondary" className={`${getTypeColor(exp.type)} border text-xs`}>
//                           {getTypeIcon(exp.type)}
//                           <span className="ml-1 capitalize">{exp.type}</span>
//                         </Badge>
//                       </div>
//                       <p className="text-primary font-medium">{exp.company}</p>
//                     </div>
//                     {exp.link && (
//                       <Button variant="ghost" size="sm" asChild>
//                         <a href={exp.link} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="w-4 h-4" />
//                         </a>
//                       </Button>
//                     )}
//                   </div>

//                   {/* Meta Info */}
//                   <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       {exp.duration}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <MapPin className="w-4 h-4" />
//                       {exp.location}
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-muted-foreground leading-relaxed mb-4">
//                     {exp.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech) => (
//                       <Badge
//                         key={tech}
//                         variant="secondary"
//                         className="bg-background-tertiary hover:bg-primary/10 hover:text-primary transition-colors"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Summary */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {[
//             { icon: <Briefcase />, label: "Internships", count: "2" },
//             { icon: <Trophy />, label: "Competitions Won", count: "3" },
//             { icon: <FileText />, label: "Research Papers", count: "1" },
//             { icon: <GraduationCap />, label: "Certifications", count: "4" }
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
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

// export default Experience;


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Trophy, 
  FileText,
  GraduationCap,
  ExternalLink 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button-enhanced";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    // Certifications
    {
      type: "certification",
      title: "Introduction to Model Context Protocol",
      company: "Anthropic",
      location: "Online",
      duration: "Aug 2025",
      description: "Completed Anthropic's official course on Model Context Protocol to understand LLM architecture and deployment.",
      technologies: ["MCP", "LLM", "AI Concepts"],
      icon: <GraduationCap className="w-5 h-5" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      link: "https://verify.skilljar.com/c/yq9dqcgueoz2"
    },
    {
      type: "certification",
      title: "Become an LLM Engineer",
      company: "Ed Donner",
      location: "Online",
      duration: "Jul 2025",
      description: "Hands-on course for building, fine-tuning, and deploying large language models.",
      technologies: ["LLM", "Python", "Transformers"],
      icon: <GraduationCap className="w-5 h-5" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      type: "certification",
      title: "Web Development & Deployment",
      company: "Hitesh Choudhary",
      location: "Online",
      duration: "Jun 2025",
      description: "Learned modern web development with deployment pipelines, frontend/backend integration, and hosting strategies.",
      technologies: ["React", "Node.js", "MERN", "Deployment"],
      icon: <GraduationCap className="w-5 h-5" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    },
    {
      type: "certification",
      title: "Machine Learning",
      company: "Andrew Ng",
      location: "Online",
      duration: "May 2025",
      description: "Completed foundational ML course covering supervised and unsupervised learning, feature engineering, and evaluation metrics.",
      technologies: ["Machine Learning", "Python", "Pandas", "Scikit-learn"],
      icon: <GraduationCap className="w-5 h-5" />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      link: "https://www.coursera.org/account/accomplishments/verify/K5TL0NJ7S7NV"
    },

    // Achievements
    {
      type: "achievement",
      title: "Research Paper Accepted",
      company: "IEEE ICCA 2025",
      location: "Bahrain",
      duration: "Aug 2025",
      description: "Research paper on text-to-ISL translation accepted in the International Conference on Computer and Applications (IEEE ICCA 2025).",
      technologies: ["AI", "Transformers", "Pose Estimation", "Accessibility"],
      icon: <Trophy className="w-5 h-5" />,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "achievement": return <Trophy className="w-4 h-4" />;
      case "research": return <FileText className="w-4 h-4" />;
      case "certification": return <GraduationCap className="w-4 h-4" />;
      default: return <GraduationCap className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "achievement": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "research": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "certification": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default: return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 tech-grid opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Courses completed, skills earned, and research milestones achieved.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex gap-8 group"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${exp.bgColor} border-2 border-current ${exp.color} flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <Badge variant="secondary" className={`${getTypeColor(exp.type)} border text-xs`}>
                          {getTypeIcon(exp.type)}
                          <span className="ml-1 capitalize">{exp.type}</span>
                        </Badge>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    {exp.link && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-background-tertiary hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
