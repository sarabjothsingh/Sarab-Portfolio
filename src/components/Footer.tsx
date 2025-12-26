// // import { motion } from "framer-motion";
// // import { useInView } from "framer-motion";
// // import { useRef } from "react";
// // import { Button } from "@/components/ui/button-enhanced";
// // import { Heart, Coffee, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

// // const Footer = () => {
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, amount: 0.8 });

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   const quickLinks = [
// //     { name: "About", href: "#about" },
// //     { name: "Skills", href: "#skills" },
// //     { name: "Projects", href: "#projects" },
// //     { name: "Experience", href: "#experience" },
// //     { name: "Contact", href: "#contact" }
// //   ];

// //   const socialLinks = [
// //     {
// //       name: "GitHub",
// //       href: "https://github.com",
// //       icon: <Github className="w-5 h-5" />
// //     },
// //     {
// //       name: "LinkedIn", 
// //       href: "https://linkedin.com",
// //       icon: <Linkedin className="w-5 h-5" />
// //     },
// //     {
// //       name: "Email",
// //       href: "mailto:sarab@example.com",
// //       icon: <Mail className="w-5 h-5" />
// //     }
// //   ];

// //   return (
// //     <footer className="relative bg-background border-t border-border/20">
// //       {/* Background Pattern */}
// //       <div className="absolute inset-0 tech-grid opacity-5"></div>
      
// //       <div className="relative z-10" ref={ref}>
// //         {/* Main Footer Content */}
// //         <div className="max-w-6xl mx-auto px-6 py-16">
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={isInView ? { opacity: 1, y: 0 } : {}}
// //             transition={{ duration: 0.8 }}
// //             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
// //           >
// //             {/* Brand Section */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               animate={isInView ? { opacity: 1, x: 0 } : {}}
// //               transition={{ duration: 0.8, delay: 0.1 }}
// //               className="lg:col-span-2"
// //             >
// //               <h3 className="text-2xl font-bold gradient-text mb-4">Sarab</h3>
// //               <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
// //                 AI & MERN Developer passionate about creating intelligent solutions 
// //                 that make a real-world impact. Always excited to learn and build something amazing.
// //               </p>
              
// //               {/* Social Links */}
// //               <div className="flex gap-4">
// //                 {socialLinks.map((social, index) => (
// //                   <motion.a
// //                     key={social.name}
// //                     href={social.href}
// //                     target={social.href.startsWith('http') ? '_blank' : undefined}
// //                     rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
// //                     initial={{ opacity: 0, scale: 0.8 }}
// //                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
// //                     transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
// //                     className="p-3 glass rounded-lg hover:scale-110 hover:text-primary transition-all duration-300 group"
// //                     aria-label={social.name}
// //                   >
// //                     {social.icon}
// //                   </motion.a>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* Quick Links */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               animate={isInView ? { opacity: 1, x: 0 } : {}}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //             >
// //               <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
// //               <nav className="space-y-3">
// //                 {quickLinks.map((link, index) => (
// //                   <motion.div
// //                     key={link.name}
// //                     initial={{ opacity: 0, x: -20 }}
// //                     animate={isInView ? { opacity: 1, x: 0 } : {}}
// //                     transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
// //                   >
// //                     <a
// //                       href={link.href}
// //                       className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
// //                       onClick={(e) => {
// //                         e.preventDefault();
// //                         document.getElementById(link.href.substring(1))?.scrollIntoView({ 
// //                           behavior: 'smooth' 
// //                         });
// //                       }}
// //                     >
// //                       {link.name}
// //                     </a>
// //                   </motion.div>
// //                 ))}
// //               </nav>
// //             </motion.div>

// //             {/* Contact Info */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -30 }}
// //               animate={isInView ? { opacity: 1, x: 0 } : {}}
// //               transition={{ duration: 0.8, delay: 0.3 }}
// //             >
// //               <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
// //               <div className="space-y-3 text-muted-foreground">
// //                 <p className="hover:text-primary transition-colors cursor-pointer">
// //                   📧 sarab@example.com
// //                 </p>
// //                 <p>📍 India</p>
// //                 <p>🎯 Open to opportunities</p>
// //               </div>
              
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={isInView ? { opacity: 1, y: 0 } : {}}
// //                 transition={{ duration: 0.8, delay: 0.6 }}
// //                 className="mt-6"
// //               >
// //                 <Button 
// //                   variant="outline" 
// //                   size="sm"
// //                   onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
// //                 >
// //                   Let's Connect
// //                 </Button>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="border-t border-border/20">
// //           <div className="max-w-6xl mx-auto px-6 py-6">
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={isInView ? { opacity: 1 } : {}}
// //               transition={{ duration: 0.8, delay: 0.8 }}
// //               className="flex flex-col md:flex-row items-center justify-between gap-4"
// //             >
// //               {/* Copyright */}
// //               <div className="flex items-center gap-2 text-muted-foreground text-sm">
// //                 <span>Made with</span>
// //                 <motion.div
// //                   animate={{ scale: [1, 1.2, 1] }}
// //                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
// //                 >
// //                   <Heart className="w-4 h-4 text-red-400 fill-current" />
// //                 </motion.div>
// //                 <span>and</span>
// //                 <motion.div
// //                   animate={{ rotate: [0, 10, -10, 0] }}
// //                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// //                 >
// //                   <Coffee className="w-4 h-4 text-amber-400" />
// //                 </motion.div>
// //                 <span>by Sarab</span>
// //               </div>

// //               {/* Current Year and Back to Top */}
// //               <div className="flex items-center gap-4 text-sm text-muted-foreground">
// //                 <span>© {new Date().getFullYear()} All rights reserved.</span>
// //                 <Button
// //                   variant="ghost"
// //                   size="sm"
// //                   onClick={scrollToTop}
// //                   className="hover:text-primary group"
// //                 >
// //                   <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
// //                   <span className="ml-1">Top</span>
// //                 </Button>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Floating Back to Top Button - Mobile */}
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.8 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         className="fixed bottom-8 right-8 z-50 md:hidden"
// //       >
// //         <Button
// //           variant="hero"
// //           size="icon"
// //           onClick={scrollToTop}
// //           className="shadow-lg hover:shadow-xl rounded-full w-12 h-12"
// //         >
// //           <ArrowUp className="w-5 h-5" />
// //         </Button>
// //       </motion.div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Button } from "@/components/ui/button-enhanced";
// import { Heart, Coffee, ArrowUp } from "lucide-react";

// // react-icons imports
// import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
// import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.8 });

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const quickLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" }
//   ];

//   const socialLinks = [
//     { name: "GitHub", href: "https://github.com/sarabjothsingh", icon: <AiFillGithub className="w-5 h-5" /> },
//     { name: "LinkedIn", href: "https://www.linkedin.com/in/sarabjothbhatia/", icon: <AiFillLinkedin className="w-5 h-5" /> },
//     { name: "Instagram", href: "https://www.instagram.com/sarab_bhatia_/?next=%2F", icon: <FaInstagram className="w-5 h-5" /> },
//     { name: "X", href: "https://x.com/Sarabbhatia4", icon: <FaTwitter className="w-5 h-5" /> },
//     { name: "Pinterest", href: "https://in.pinterest.com/sarabjothbhatia", icon: <FaPinterestP className="w-5 h-5" /> },
//     { name: "Blogs", href: "#", icon: <Heart className="w-5 h-5" /> }, // placeholder for blogs
//     { name: "Email", href: "mailto:sarabjothbhatia@gmail.com", icon: <AiOutlineMail className="w-5 h-5" /> }
//   ];

//   return (
//     <footer className="relative bg-background border-t border-border/20">
//       <div className="absolute inset-0 tech-grid opacity-5"></div>
//       <div className="relative z-10" ref={ref}>
//         <div className="max-w-6xl mx-auto px-6 py-16">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {/* Brand Section */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="lg:col-span-2"
//             >
//               <h3 className="text-2xl font-bold gradient-text mb-4">Sarab</h3>
//               <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
//                 Always excited to learn and build something amazing! 
//               </p>

//               {/* Social Links */}
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={social.name}
//                     href={social.href}
//                     target={social.href.startsWith('http') ? '_blank' : undefined}
//                     rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                     className="p-3 glass rounded-lg hover:scale-110 hover:text-primary transition-all duration-300 group"
//                     aria-label={social.name}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
//               <nav className="space-y-3">
//                 {quickLinks.map((link, index) => (
//                   <motion.div
//                     key={link.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                   >
//                     <a
//                       href={link.href}
//                       className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
//                       }}
//                     >
//                       {link.name}
//                     </a>
//                   </motion.div>
//                 ))}
//               </nav>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
//               <div className="space-y-3 text-muted-foreground">
//                 <p className="hover:text-primary transition-colors cursor-pointer">📧 sarabjothbhatia@gmail.com</p>
//                 <p>📍 India</p>
//                 <p>🎯 Open to opportunities</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-border/20">
//           <div className="max-w-6xl mx-auto px-6 py-6">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex flex-col md:flex-row items-center justify-between gap-4"
//             >
//               <div className="flex items-center gap-2 text-muted-foreground text-sm">
//                 <span>Made with</span>
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <Heart className="w-4 h-4 text-red-400 fill-current" />
//                 </motion.div>
//                 <span>and</span>
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <Coffee className="w-4 h-4 text-amber-400" />
//                 </motion.div>
//                 <span>by Sarab</span>
//               </div>

//               <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                 <span>© {new Date().getFullYear()} All rights reserved.</span>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={scrollToTop}
//                   className="hover:text-primary group"
//                 >
//                   <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
//                   <span className="ml-1">Top</span>
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="fixed bottom-8 right-8 z-50 md:hidden"
//       >
//         <Button
//           variant="hero"
//           size="icon"
//           onClick={scrollToTop}
//           className="shadow-lg hover:shadow-xl rounded-full w-12 h-12"
//         >
//           <ArrowUp className="w-5 h-5" />
//         </Button>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;


// "use client";

// import { motion, useInView } from "framer-motion";
// import { ElementType, useEffect, useRef, useState, createElement } from "react";
// import { Heart, Coffee, ArrowUp } from "lucide-react";

// // Inline React Icons components since the library is not available
// const FaInstagram = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 448 512"
//     {...props}
//   >
//     <path
//       fill="currentColor"
//       d="M224.1 129.8c-20.9 0-38 17.1-38 38s17.1 38 38 38 38-17.1 38-38-17.1-38-38-38zm241.4-129.2c-29.4-15.1-62.4-17-90.8-17h-235.4c-28.4 0-61.4 1.9-90.8 17-29.4 15.1-49.3 35.6-64.4 65-15.1 29.4-17 62.4-17 90.8v235.4c0 28.4 1.9 61.4 17 90.8 15.1 29.4 35.6 49.3 65 64.4 29.4 15.1 62.4 17 90.8 17h235.4c28.4 0 61.4-1.9 90.8-17 29.4-15.1 49.3-35.6 64.4-65 15.1-29.4 17-62.4 17-90.8v-235.4c0-28.4-1.9-61.4-17-90.8-15.1-29.4-35.6-49.3-64.4-65zm16.9 326.6c-4.4 7.2-12.8 12.1-22 12.1h-44.4c-9.2 0-17.6-4.9-22-12.1s-7.2-12.9-7.2-22c0-9.2 4.9-17.6 12.1-22h44.4c9.2 0 17.6 4.9 22 12.1s7.2 12.9 7.2 22z"
//     />
//   </svg>
// );
// const FaTwitter = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 512 512"
//     {...props}
//   >
//     <path
//       fill="currentColor"
//       d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.55-298.55 298.55-59.452 0-114.654-17.292-161.164-47.734 8.447.974 16.568 1.299 25.34 1.299 49.045 0 94.212-16.586 130.229-44.025-46.012-.974-89.379-31.28-103.794-72.964-5.263 1.025-10.297 1.349-15.368 1.349-12.046 0-23.864-1.637-34.912-4.525 13.91 43.58 53.073 75.257 99.463 87.144-12.912 3.528-26.495 5.564-40.231 5.564-9.754 0-19.141-.588-28.093-1.349 34.91 109.288 135.291 188.922 253.049 188.922 119.501 0 186.136-99.888 186.136-186.136 0-2.888-.063-5.776-.176-8.646 12.846-9.15 23.951-20.443 32.748-33.433z"
//     />
//   </svg>
// );
// const FaPinterestP = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 512 512"
//     {...props}
//   >
//     <path
//       fill="currentColor"
//       d="M256 8C119 8 8 119 8 256c0 92.5 54.1 172.4 131 209.2-3.3-35.3-2.2-76.4 7.6-118.9 9.9-42.5 50.8-216.7 50.8-216.7 1.8-7.7 3.5-12.9 6.2-16.9 2.7-4.1 6.5-6.8 10.9-8.4 4.5-1.6 8.3-2.1 11.5-.7 3.2 1.4 6.7 4 9.1 7.2 2.4 3.2 4.1 6.8 4.6 10.5.5 3.7.2 7.7-.8 11.5-1 3.8-2.6 7.4-4.8 10.8-2.2 3.4-4.7 6.6-7.5 9.4s-5.8 5.4-8.7 7.7c-2.9 2.3-5.7 4.2-8.5 5.7s-5.6 2.6-8.2 3.5c-2.6.9-5.1 1.4-7.5 1.5-2.4 0-4.6-.2-6.5-.7-1.9-.5-3.6-1.3-5.1-2.2s-2.8-2.1-3.9-3.4c-1.1-1.3-2-2.8-2.7-4.4-.7-1.6-1.1-3.3-1.1-5.1 0-1.8.4-3.6 1.2-5.4.8-1.8 2-3.6 3.7-5.4 1.7-1.8 3.8-3.5 6.3-5.1 2.5-1.6 5.4-3.1 8.7-4.4 3.3-1.3 6.9-2.5 10.8-3.5 3.9-1 7.9-1.8 12-2.3 4.1-.5 8.2-.8 12.3-.8 4.1 0 8.1.3 12.1.8 4 .5 8 .9 11.9 1.4 3.9.5 7.8 1.1 11.7 1.8 3.9.7 7.8 1.5 11.6 2.4 3.8.9 7.6 1.9 11.4 3.1 3.8 1.2 7.6 2.5 11.4 3.9 3.8 1.4 7.5 2.8 11.2 4.3 3.7 1.5 7.4 3.1 11.1 4.7 3.7 1.6 7.3 3.2 10.9 4.8 3.6 1.6 7.1 3.2 10.6 4.8 3.5 1.6 6.9 3.2 10.3 4.7 3.4 1.5 6.7 3 9.9 4.4 3.2 1.4 6.3 2.8 9.2 4.1 2.9 1.3 5.8 2.5 8.5 3.6 2.7 1.1 5.4 2 8.1 2.8s5.2 1.5 7.8 1.8c2.6.3 5.3.4 8 .4h106.6c47.8 0 86.6-38.8 86.6-86.6 0-47.8-38.8-86.6-86.6-86.6h-106.6z"
//     />
//   </svg>
// );


// interface TextTypeProps {
//   className?: string;
//   showCursor?: boolean;
//   hideCursorWhileTyping?: boolean;
//   cursorCharacter?: string | React.ReactNode;
//   cursorBlinkDuration?: number;
//   cursorClassName?: string;
//   text: string | string[];
//   as?: ElementType;
//   typingSpeed?: number;
//   initialDelay?: number;
//   pauseDuration?: number;
//   deletingSpeed?: number;
//   loop?: boolean;
//   textColors?: string[];
//   variableSpeed?: { min: number; max: number };
//   onSentenceComplete?: (sentence: string, index: number) => void;
//   startOnVisible?: boolean;
//   reverseMode?: boolean;
// }

// const TextType = ({
//   text,
//   as: Component = "div",
//   typingSpeed = 50,
//   initialDelay = 0,
//   pauseDuration = 2000,
//   deletingSpeed = 30,
//   loop = true,
//   className = "",
//   showCursor = true,
//   hideCursorWhileTyping = false,
//   cursorCharacter = "|",
//   cursorClassName = "",
//   cursorBlinkDuration = 0.5,
//   textColors = [],
//   variableSpeed,
//   onSentenceComplete,
//   startOnVisible = false,
//   reverseMode = false,
//   ...props
// }: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentCharIndex, setCurrentCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(!startOnVisible);
//   const [isCursorVisible, setIsCursorVisible] = useState(true);

//   const containerRef = useRef<HTMLElement>(null);

//   const textArray = Array.isArray(text) ? text : [text];

//   const getRandomSpeed = () => {
//     if (!variableSpeed) return typingSpeed;
//     const { min, max } = variableSpeed;
//     return Math.random() * (max - min) + min;
//   };

//   const getCurrentTextColor = () => {
//     if (textColors.length === 0) return "#ffffff";
//     return textColors[currentTextIndex % textColors.length];
//   };

//   useEffect(() => {
//     if (showCursor) {
//       const cursorInterval = setInterval(() => {
//         setIsCursorVisible((prev) => !prev);
//       }, cursorBlinkDuration * 1000);
//       return () => clearInterval(cursorInterval);
//     }
//   }, [showCursor, cursorBlinkDuration]);

//   useEffect(() => {
//     if (!startOnVisible || !containerRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, [startOnVisible]);

//   useEffect(() => {
//     if (!isVisible) return;

//     let timeout: NodeJS.Timeout;

//     const currentText = textArray[currentTextIndex];
//     const processedText = reverseMode
//       ? currentText.split("").reverse().join("")
//       : currentText;

//     const executeTypingAnimation = () => {
//       if (isDeleting) {
//         if (displayedText === "") {
//           setIsDeleting(false);
//           if (currentTextIndex === textArray.length - 1 && !loop) {
//             return;
//           }

//           if (onSentenceComplete) {
//             onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
//           }

//           setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
//           setCurrentCharIndex(0);
//           timeout = setTimeout(() => {}, pauseDuration);
//         } else {
//           timeout = setTimeout(() => {
//             setDisplayedText((prev) => prev.slice(0, -1));
//           }, deletingSpeed);
//         }
//       } else {
//         if (currentCharIndex < processedText.length) {
//           timeout = setTimeout(
//             () => {
//               setDisplayedText(
//                 (prev) => prev + processedText[currentCharIndex]
//               );
//               setCurrentCharIndex((prev) => prev + 1);
//             },
//             variableSpeed ? getRandomSpeed() : typingSpeed
//           );
//         } else if (textArray.length > 1) {
//           timeout = setTimeout(() => {
//             setIsDeleting(true);
//           }, pauseDuration);
//         }
//       }
//     };

//     if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
//       timeout = setTimeout(executeTypingAnimation, initialDelay);
//     } else {
//       executeTypingAnimation();
//     }

//     return () => clearTimeout(timeout);
//   }, [
//     currentCharIndex,
//     displayedText,
//     isDeleting,
//     typingSpeed,
//     deletingSpeed,
//     pauseDuration,
//     textArray,
//     currentTextIndex,
//     loop,
//     initialDelay,
//     isVisible,
//     reverseMode,
//     variableSpeed,
//     onSentenceComplete,
//   ]);

//   const shouldHideCursor =
//     hideCursorWhileTyping &&
//     (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

//   return createElement(
//     Component,
//     {
//       ref: containerRef,
//       className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
//       ...props,
//     },
//     <span className="inline" style={{ color: getCurrentTextColor() }}>
//       {displayedText}
//     </span>,
//     showCursor && (
//       <span
//         className={`ml-1 inline-block opacity-100 ${shouldHideCursor || !isCursorVisible ? "hidden" : ""} ${cursorClassName}`}
//       >
//         {cursorCharacter}
//       </span>
//     )
//   );
// };

// const Button = ({ children, variant, size, onClick, className, ...props }) => {
//   const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
//   const variants = {
//     ghost: "text-accent-foreground hover:bg-accent hover:text-accent-foreground",
//     hero: "bg-primary text-primary-foreground hover:bg-primary/90",
//   };
//   const sizes = {
//     sm: "h-9 px-3",
//     icon: "h-10 w-10",
//   };

//   const finalClasses = `${baseClasses} ${variants[variant] || ''} ${sizes[size] || ''} ${className || ''}`;

//   return (
//     <button onClick={onClick} className={finalClasses} {...props}>
//       {children}
//     </button>
//   );
// };


// const Footer = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.8 });

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const quickLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" }
//   ];

//   const socialLinks = [
//     { name: "Instagram", href: "https://www.instagram.com/sarab_bhatia_/?next=%2F", icon: <FaInstagram className="w-5 h-5" /> },
//     { name: "X", href: "https://x.com/Sarabbhatia4", icon: <FaTwitter className="w-5 h-5" /> },
//     { name: "Pinterest", href: "https://in.pinterest.com/sarabjothbhatia", icon: <FaPinterestP className="w-5 h-5" /> },
//     { name: "Blogs", href: "#", icon: <Heart className="w-5 h-5" /> }, // placeholder for blogs
//   ];

//   return (
//     <footer className="relative bg-background border-t border-border/20">
//       <div className="absolute inset-0 tech-grid opacity-5"></div>
//       <div className="relative z-10" ref={ref}>
//         <div className="max-w-6xl mx-auto px-6 py-16">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {/* Brand Section */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="lg:col-span-2"
//             >
//               <h3 className="text-2xl font-bold gradient-text mb-4">Sarab</h3>
//               <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
//                 <TextType
//                   text={["Always excited to learn.", "Always excited to build something amazing!"]}
//                   typingSpeed={75}
//                   pauseDuration={1500}
//                   showCursor={true}
//                   cursorCharacter="|"
//                 />
//               </p>

//               {/* Social Links */}
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={social.name}
//                     href={social.href}
//                     target={social.href.startsWith('http') ? '_blank' : undefined}
//                     rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                     className="p-3 glass rounded-lg hover:scale-110 hover:text-primary transition-all duration-300 group"
//                     aria-label={social.name}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
//               <nav className="space-y-3">
//                 {quickLinks.map((link, index) => (
//                   <motion.div
//                     key={link.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                   >
//                     <a
//                       href={link.href}
//                       className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
//                       }}
//                     >
//                       {link.name}
//                     </a>
//                   </motion.div>
//                 ))}
//               </nav>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
//               <div className="space-y-3 text-muted-foreground">
//                 <p className="hover:text-primary transition-colors cursor-pointer">📧 sarabjothbhatia@gmail.com</p>
//                 <p>📍 India</p>
//                 <p>🎯 Open to opportunities</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-border/20">
//           <div className="max-w-6xl mx-auto px-6 py-6">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex flex-col md:flex-row items-center justify-between gap-4"
//             >
//               <div className="flex items-center gap-2 text-muted-foreground text-sm">
//                 <span>Made with</span>
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <Heart className="w-4 h-4 text-red-400 fill-current" />
//                 </motion.div>
//                 <span>and</span>
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <Coffee className="w-4 h-4 text-amber-400" />
//                 </motion.div>
//                 <span>by Sarab</span>
//               </div>

//               <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                 <span>© {new Date().getFullYear()} All rights reserved.</span>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={scrollToTop}
//                   className="hover:text-primary group"
//                 >
//                   <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
//                   <span className="ml-1">Top</span>
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="fixed bottom-8 right-8 z-50 md:hidden"
//       >
//         <Button
//           variant="hero"
//           size="icon"
//           onClick={scrollToTop}
//           className="shadow-lg hover:shadow-xl rounded-full w-12 h-12"
//         >
//           <ArrowUp className="w-5 h-5" />
//         </Button>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;


// "use client";

// import { motion, useInView } from "framer-motion";
// import { ElementType, useEffect, useRef, useState, createElement } from "react";
// import { Heart, Coffee, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

// // Inline Pinterest SVG
// const Pinterest = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 512 512"
//     {...props}
//   >
//     <path
//       fill="currentColor"
//       d="M256 8C119 8 8 119 8 256c0 92.5 54.1 172.4 131 209.2-3.3-35.3-2.2-76.4 7.6-118.9 9.9-42.5 50.8-216.7 50.8-216.7 1.8-7.7 3.5-12.9 6.2-16.9 2.7-4.1 6.5-6.8 10.9-8.4 4.5-1.6 8.3-2.1 11.5-.7 3.2 1.4 6.7 4 9.1 7.2 2.4 3.2 4.1 6.8 4.6 10.5.5 3.7.2 7.7-.8 11.5-1 3.8-2.6 7.4-4.8 10.8-2.2 3.4-4.7 6.6-7.5 9.4s-5.8 5.4-8.7 7.7c-2.9 2.3-5.7 4.2-8.5 5.7s-5.6 2.6-8.2 3.5c-2.6.9-5.1 1.4-7.5 1.5-2.4 0-4.6-.2-6.5-.7-1.9-.5-3.6-1.3-5.1-2.2s-2.8-2.1-3.9-3.4c-1.1-1.3-2-2.8-2.7-4.4-.7-1.6-1.1-3.3-1.1-5.1 0-1.8.4-3.6 1.2-5.4.8-1.8 2-3.6 3.7-5.4 1.7-1.8 3.8-3.5 6.3-5.1 2.5-1.6 5.4-3.1 8.7-4.4 3.3-1.3 6.9-2.5 10.8-3.5 3.9-1 7.9-1.8 12-2.3 4.1-.5 8.2-.8 12.3-.8 4.1 0 8.1.3 12.1.8 4 .5 8 .9 11.9 1.4 3.9.5 7.8 1.1 11.7 1.8 3.9.7 7.8 1.5 11.6 2.4 3.8.9 7.6 1.9 11.4 3.1 3.8 1.2 7.6 2.5 11.4 3.9 3.8 1.4 7.5 2.8 11.2 4.3 3.7 1.5 7.4 3.1 11.1 4.7 3.7 1.6 7.3 3.2 10.9 4.8 3.6 1.6 7.1 3.2 10.6 4.8 3.5 1.6 6.9 3.2 10.3 4.7 3.4 1.5 6.7 3 9.9 4.4 3.2 1.4 6.3 2.8 9.2 4.1 2.9 1.3 5.8 2.5 8.5 3.6 2.7 1.1 5.4 2 8.1 2.8s5.2 1.5 7.8 1.8c2.6.3 5.3.4 8 .4h106.6c47.8 0 86.6-38.8 86.6-86.6 0-47.8-38.8-86.6-86.6-86.6h-106.6z"
//     />
//   </svg>
// );
// const FaTwitter = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 512 512"
//     {...props}
//   >
//     <path
//       fill="currentColor"
//       d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.55-298.55 298.55-59.452 0-114.654-17.292-161.164-47.734 8.447.974 16.568 1.299 25.34 1.299 49.045 0 94.212-16.586 130.229-44.025-46.012-.974-89.379-31.28-103.794-72.964-5.263 1.025-10.297 1.349-15.368 1.349-12.046 0-23.864-1.637-34.912-4.525 13.91 43.58 53.073 75.257 99.463 87.144-12.912 3.528-26.495 5.564-40.231 5.564-9.754 0-19.141-.588-28.093-1.349 34.91 109.288 135.291 188.922 253.049 188.922 119.501 0 186.136-99.888 186.136-186.136 0-2.888-.063-5.776-.176-8.646 12.846-9.15 23.951-20.443 32.748-33.433z"
//     />
//   </svg>
// );


// interface TextTypeProps {
//   className?: string;
//   showCursor?: boolean;
//   hideCursorWhileTyping?: boolean;
//   cursorCharacter?: string | React.ReactNode;
//   cursorBlinkDuration?: number;
//   cursorClassName?: string;
//   text: string | string[];
//   as?: ElementType;
//   typingSpeed?: number;
//   initialDelay?: number;
//   pauseDuration?: number;
//   deletingSpeed?: number;
//   loop?: boolean;
//   textColors?: string[];
//   variableSpeed?: { min: number; max: number };
//   onSentenceComplete?: (sentence: string, index: number) => void;
//   startOnVisible?: boolean;
//   reverseMode?: boolean;
// }

// const TextType = ({
//   text,
//   as: Component = "div",
//   typingSpeed = 50,
//   initialDelay = 0,
//   pauseDuration = 2000,
//   deletingSpeed = 30,
//   loop = true,
//   className = "",
//   showCursor = true,
//   hideCursorWhileTyping = false,
//   cursorCharacter = "|",
//   cursorClassName = "",
//   cursorBlinkDuration = 0.5,
//   textColors = [],
//   variableSpeed,
//   onSentenceComplete,
//   startOnVisible = false,
//   reverseMode = false,
//   ...props
// }: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentCharIndex, setCurrentCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(!startOnVisible);
//   const [isCursorVisible, setIsCursorVisible] = useState(true);

//   const containerRef = useRef<HTMLElement>(null);

//   const textArray = Array.isArray(text) ? text : [text];

//   const getRandomSpeed = () => {
//     if (!variableSpeed) return typingSpeed;
//     const { min, max } = variableSpeed;
//     return Math.random() * (max - min) + min;
//   };

//   const getCurrentTextColor = () => {
//     if (textColors.length === 0) return "#ffffff";
//     return textColors[currentTextIndex % textColors.length];
//   };

//   useEffect(() => {
//     if (showCursor) {
//       const cursorInterval = setInterval(() => {
//         setIsCursorVisible((prev) => !prev);
//       }, cursorBlinkDuration * 1000);
//       return () => clearInterval(cursorInterval);
//     }
//   }, [showCursor, cursorBlinkDuration]);

//   useEffect(() => {
//     if (!startOnVisible || !containerRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, [startOnVisible]);

//   useEffect(() => {
//     if (!isVisible) return;

//     let timeout: NodeJS.Timeout;

//     const currentText = textArray[currentTextIndex];
//     const processedText = reverseMode
//       ? currentText.split("").reverse().join("")
//       : currentText;

//     const executeTypingAnimation = () => {
//       if (isDeleting) {
//         if (displayedText === "") {
//           setIsDeleting(false);
//           if (currentTextIndex === textArray.length - 1 && !loop) {
//             return;
//           }

//           if (onSentenceComplete) {
//             onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
//           }

//           setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
//           setCurrentCharIndex(0);
//           timeout = setTimeout(() => {}, pauseDuration);
//         } else {
//           timeout = setTimeout(() => {
//             setDisplayedText((prev) => prev.slice(0, -1));
//           }, deletingSpeed);
//         }
//       } else {
//         if (currentCharIndex < processedText.length) {
//           timeout = setTimeout(
//             () => {
//               setDisplayedText(
//                 (prev) => prev + processedText[currentCharIndex]
//               );
//               setCurrentCharIndex((prev) => prev + 1);
//             },
//             variableSpeed ? getRandomSpeed() : typingSpeed
//           );
//         } else if (textArray.length > 1) {
//           timeout = setTimeout(() => {
//             setIsDeleting(true);
//           }, pauseDuration);
//         }
//       }
//     };

//     if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
//       timeout = setTimeout(executeTypingAnimation, initialDelay);
//     } else {
//       executeTypingAnimation();
//     }

//     return () => clearTimeout(timeout);
//   }, [
//     currentCharIndex,
//     displayedText,
//     isDeleting,
//     typingSpeed,
//     deletingSpeed,
//     pauseDuration,
//     textArray,
//     currentTextIndex,
//     loop,
//     initialDelay,
//     isVisible,
//     reverseMode,
//     variableSpeed,
//     onSentenceComplete,
//   ]);

//   const shouldHideCursor =
//     hideCursorWhileTyping &&
//     (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

//   return createElement(
//     Component,
//     {
//       ref: containerRef,
//       className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
//       ...props,
//     },
//     <span className="inline" style={{ color: getCurrentTextColor() }}>
//       {displayedText}
//     </span>,
//     showCursor && (
//       <span
//         className={`ml-1 inline-block opacity-100 ${shouldHideCursor || !isCursorVisible ? "hidden" : ""} ${cursorClassName}`}
//       >
//         {cursorCharacter}
//       </span>
//     )
//   );
// };

// const Button = ({ children, variant, size, onClick, className, ...props }) => {
//   const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
//   const variants = {
//     ghost: "text-accent-foreground hover:bg-accent hover:text-accent-foreground",
//     hero: "bg-primary text-primary-foreground hover:bg-primary/90",
//   };
//   const sizes = {
//     sm: "h-9 px-3",
//     icon: "h-10 w-10",
//   };

//   const finalClasses = `${baseClasses} ${variants[variant] || ''} ${sizes[size] || ''} ${className || ''}`;

//   return (
//     <button onClick={onClick} className={finalClasses} {...props}>
//       {children}
//     </button>
//   );
// };


// const Footer = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.8 });

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const quickLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" }
//   ];

//   const socialLinks = [
//     { name: "GitHub", href: "https://github.com/sarabjothsingh", icon: <Github className="w-5 h-5" /> },
//     { name: "LinkedIn", href: "https://www.linkedin.com/in/sarabjothbhatia/", icon: <Linkedin className="w-5 h-5" /> },
//     { name: "Email", href: "mailto:sarabjothbhatia@gmail.com", icon: <Mail className="w-5 h-5" /> },
//     { name: "Pinterest", href: "https://in.pinterest.com/sarabjothbhatia", icon: <Pinterest className="w-5 h-5" /> },
//   ];

//   return (
//     <footer className="relative bg-background border-t border-border/20">
//       <div className="absolute inset-0 tech-grid opacity-5"></div>
//       <div className="relative z-10" ref={ref}>
//         <div className="max-w-6xl mx-auto px-6 py-10">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {/* Brand Section */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="lg:col-span-2"
//             >
//               <h3 className="text-5xl font-bold gradient-text mb-4">Sarab</h3>
//               <div className="text-muted-foreground leading-relaxed mb-6 max-w-md">
//                 <TextType
//                   text={["Always excited to learn.", "Always excited to build something amazing!"]}
//                   typingSpeed={75}
//                   pauseDuration={1500}
//                   showCursor={true}
//                   cursorCharacter="|"
//                 />
//               </div>

//               {/* Social Links */}
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={social.name}
//                     href={social.href}
//                     target={social.href.startsWith('http') ? '_blank' : undefined}
//                     rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                     className="p-3 glass rounded-lg hover:scale-110 hover:text-primary transition-all duration-300 group"
//                     aria-label={social.name}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
//               <nav className="space-y-3">
//                 {quickLinks.map((link, index) => (
//                   <motion.div
//                     key={link.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                   >
//                     <a
//                       href={link.href}
//                       className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
//                       }}
//                     >
//                       {link.name}
//                     </a>
//                   </motion.div>
//                 ))}
//               </nav>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
//               <div className="space-y-3 text-muted-foreground">
//                 <p className="hover:text-primary transition-colors cursor-pointer">📧 sarabjothbhatia@gmail.com</p>
//                 <p>📍 India</p>
//                 <p>🎯 Open to opportunities!</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-border/20">
//           <div className="max-w-6xl mx-auto px-6 py-6">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex flex-col md:flex-row items-center justify-between gap-4"
//             >
//               <div className="flex items-center gap-2 text-muted-foreground text-sm">
//                 <span>Made with</span>
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <Heart className="w-4 h-4 text-red-400 fill-current" />
//                 </motion.div>
//                 <span>and</span>
//                 <motion.div
//                   animate={{ rotate: [0, 10, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <Coffee className="w-4 h-4 text-amber-400" />
//                 </motion.div>
//                 <span>by Sarab</span>
//               </div>

//               <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                 <span>© {new Date().getFullYear()} All rights reserved.</span>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={scrollToTop}
//                   className="hover:text-primary group"
//                 >
//                   <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
//                   <span className="ml-1">Top</span>
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Top Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="fixed bottom-8 right-8 z-50 md:hidden"
//       >
//         <Button
//           variant="hero"
//           size="icon"
//           onClick={scrollToTop}
//           className="shadow-lg hover:shadow-xl rounded-full w-12 h-12"
//         >
//           <ArrowUp className="w-5 h-5" />
//         </Button>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, ArrowUp } from "lucide-react";

/* =======================
   Smooth TextType
======================= */

interface TextTypeProps {
  texts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

const TextType = ({
  texts,
  typingSpeed = 70,
  pauseDuration = 1500,
}: TextTypeProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + currentText[charIndex]);
        setCharIndex((c) => c + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    const pause = setTimeout(() => {
      setDisplayed("");
      setCharIndex(0);
      setTextIndex((i) => (i + 1) % texts.length);
    }, pauseDuration);

    return () => clearTimeout(pause);
  }, [charIndex, textIndex, texts, typingSpeed, pauseDuration]);

  return (
    <span className="whitespace-nowrap">
      {displayed}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

/* =======================
   Footer
======================= */

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Text Animation (same position as original brand block) */}
        <div className="text-muted-foreground mb-8 max-w-md">
          <TextType
            texts={[
              "Always excited to learn.",
              "Always excited to build something amazing!",
            ]}
          />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>

            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.span>

            <span>and</span>

            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="w-4 h-4 text-amber-400" />
            </motion.span>

            <span>by Sarab</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition"
          >
            <ArrowUp className="w-4 h-4" />
            Top
          </button>
        </div>
      </div>

      {/* Mobile Floating Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 md:hidden bg-primary text-primary-foreground rounded-full w-12 h-12 shadow-lg flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
