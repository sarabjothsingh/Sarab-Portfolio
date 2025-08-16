import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MorphingNavbar from "@/components/MorphingNavbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import useTheme from "@/hooks/useTheme";

const Index = () => {
  const { isDark, toggleTheme } = useTheme();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Add smooth scroll behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];

    const handleKeyDown = (event: KeyboardEvent) => {
      konamiCode.push(event.code);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
      }
      
      if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg activated!
        document.body.style.transform = 'rotate(360deg)';
        document.body.style.transition = 'transform 2s ease-in-out';
        setTimeout(() => {
          document.body.style.transform = '';
          document.body.style.transition = '';
        }, 2000);
        
        // Show a fun message
        const originalTitle = document.title;
        document.title = '🎉 You found the Easter egg! 🎉';
        setTimeout(() => {
          document.title = originalTitle;
        }, 3000);
        
        konamiCode = [];
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Mouse tracking for animated background
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Update CSS custom properties for animated background
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MorphingNavbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <div className="animated-bg">
        <ScrollRevealWrapper>
          <About />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper direction="left" delay={100}>
          <Skills />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper direction="right" delay={200}>
          <Projects />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={100}>
          <Experience />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper direction="left" delay={150}>
          <Contact />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Footer />
        </ScrollRevealWrapper>
      </div>
    </div>
  );
};

export default Index;
