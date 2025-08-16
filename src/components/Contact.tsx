// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Button } from "@/components/ui/button-enhanced";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { toast } from "@/hooks/use-toast";
// import { 
//   Mail, 
//   Github, 
//   Linkedin, 
//   MapPin, 
//   Phone,
//   Send,
//   MessageCircle 
// } from "lucide-react";
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Initialize EmailJS with your public key
//       // Note: In a real implementation, you'd need to configure EmailJS with your actual keys
//       await emailjs.send(
//         'your_service_id', // Replace with your EmailJS service ID
//         'your_template_id', // Replace with your EmailJS template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//           to_name: 'Sarab',
//         },
//         'your_public_key' // Replace with your EmailJS public key
//       );

//       toast({
//         title: "Message Sent! 🚀",
//         description: "Thank you for reaching out. I'll get back to you soon!",
//       });

//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('EmailJS error:', error);
//       toast({
//         title: "Oops! Something went wrong 😅",
//         description: "Please try again or contact me directly via email.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-5 h-5" />,
//       label: "Email",
//       value: "sarab@example.com",
//       href: "mailto:sarab@example.com",
//       color: "text-blue-400"
//     },
//     {
//       icon: <Github className="w-5 h-5" />,
//       label: "GitHub",
//       value: "github.com/sarab",
//       href: "https://github.com",
//       color: "text-gray-400"
//     },
//     {
//       icon: <Linkedin className="w-5 h-5" />,
//       label: "LinkedIn",
//       value: "linkedin.com/in/sarab",
//       href: "https://linkedin.com",
//       color: "text-blue-500"
//     },
//     {
//       icon: <MapPin className="w-5 h-5" />,
//       label: "Location",
//       value: "India",
//       href: "#",
//       color: "text-green-400"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-background-secondary relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
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
//             Let's <span className="gradient-text">Connect</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Have a project in mind? Want to collaborate? Or just want to say hi? 
//             I'd love to hear from you!
//           </p>
//           <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
//               <p className="text-muted-foreground leading-relaxed mb-8">
//                 I'm always excited to discuss new opportunities, innovative projects, 
//                 or potential collaborations. Whether you're a recruiter, fellow developer, 
//                 or someone with an interesting idea, feel free to reach out!
//               </p>
//             </div>

//             {/* Contact Methods */}
//             <div className="space-y-4">
//               {contactInfo.map((contact, index) => (
//                 <motion.a
//                   key={contact.label}
//                   href={contact.href}
//                   target={contact.href.startsWith('http') ? '_blank' : undefined}
//                   rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                   initial={{ opacity: 0, x: -30 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
//                   className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 transition-all duration-300 group"
//                 >
//                   <div className={`p-3 rounded-lg ${contact.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}>
//                     {contact.icon}
//                   </div>
//                   <div>
//                     <div className="font-medium text-foreground">{contact.label}</div>
//                     <div className="text-sm text-muted-foreground">{contact.value}</div>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Quick Action Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex flex-wrap gap-4 pt-4"
//             >
//               <Button variant="outline" size="lg" asChild>
//                 <a href="mailto:sarab@example.com">
//                   <Mail className="w-4 h-4 mr-2" />
//                   Email Me
//                 </a>
//               </Button>
//               <Button variant="glass" size="lg" asChild>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                   <Linkedin className="w-4 h-4 mr-2" />
//                   LinkedIn
//                 </a>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="glass p-8 rounded-2xl"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-primary/10 rounded-lg">
//                 <MessageCircle className="w-5 h-5 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-2">
//                 <Label htmlFor="name" className="text-foreground">Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Your name"
//                   required
//                   className="bg-background-tertiary border-border/50 focus:border-primary"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-foreground">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="your.email@example.com"
//                   required
//                   className="bg-background-tertiary border-border/50 focus:border-primary"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="message" className="text-foreground">Message</Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell me about your project or just say hello..."
//                   required
//                   rows={5}
//                   className="bg-background-tertiary border-border/50 focus:border-primary resize-none"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 variant="hero"
//                 size="lg"
//                 disabled={isSubmitting}
//                 className="w-full group"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>

//             <div className="mt-6 p-4 bg-background-tertiary/50 rounded-lg border border-border/20">
//               <p className="text-sm text-muted-foreground text-center">
//                 🚀 I typically respond within 24 hours
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button-enhanced";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  MessageCircle, 
  Send 
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'your_service_id',   // Replace with your EmailJS service ID
        'your_template_id',  // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sarab',
        },
        '82yByyJ--VPuRFG7g' // Your public key
      );

      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Oops! Something went wrong 😅",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sarabjothbhatia@gmail.com",
      href: "mailto:sarabjothbhatia@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/sarabjothsingh",
      href: "https://github.com/sarabjothsingh",
      color: "text-gray-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sarabjothbhatia/",
      href: "https://www.linkedin.com/in/sarabjothbhatia/",
      color: "text-blue-500"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      href: "#",
      color: "text-green-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9347676935",
      href: "tel:+919347676935",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, 
                or potential collaborations. Whether you're a recruiter, fellow developer, 
                or someone with an interesting idea, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg ${contact.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="bg-background-tertiary border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background-tertiary border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  required
                  rows={5}
                  className="bg-background-tertiary border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-background-tertiary/50 rounded-lg border border-border/20">
              <p className="text-sm text-muted-foreground text-center">
                🚀 I typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
