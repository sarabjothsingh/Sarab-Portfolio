// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';

// interface Neuron {
//   id: number;
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   size: number;
//   connections: number[];
// }

// interface Connection {
//   from: number;
//   to: number;
//   strength: number;
//   active: boolean;
// }

// const NeuronBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();
//   const [neurons, setNeurons] = useState<Neuron[]>([]);
//   const [connections, setConnections] = useState<Connection[]>([]);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [clickEffect, setClickEffect] = useState<{ x: number; y: number; timestamp: number } | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     // Initialize neurons
//     const neuronCount = Math.floor((canvas.width * canvas.height) / 15000);
//     const initialNeurons: Neuron[] = [];

//     for (let i = 0; i < neuronCount; i++) {
//       initialNeurons.push({
//         id: i,
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         size: Math.random() * 3 + 2,
//         connections: []
//       });
//     }

//     // Create initial connections
//     const initialConnections: Connection[] = [];
//     for (let i = 0; i < initialNeurons.length; i++) {
//       for (let j = i + 1; j < initialNeurons.length; j++) {
//         const distance = Math.sqrt(
//           Math.pow(initialNeurons[i].x - initialNeurons[j].x, 2) +
//           Math.pow(initialNeurons[i].y - initialNeurons[j].y, 2)
//         );
        
//         if (distance < 150 && Math.random() > 0.7) {
//           initialConnections.push({
//             from: i,
//             to: j,
//             strength: Math.random() * 0.5 + 0.2,
//             active: false
//           });
          
//           initialNeurons[i].connections.push(j);
//           initialNeurons[j].connections.push(i);
//         }
//       }
//     }

//     setNeurons(initialNeurons);
//     setConnections(initialConnections);

//     const animate = () => {
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Update and draw neurons
//       initialNeurons.forEach(neuron => {
//         // Move neurons
//         neuron.x += neuron.vx;
//         neuron.y += neuron.vy;

//         // Bounce off edges
//         if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
//         if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

//         // Mouse interaction
//         const distanceToMouse = Math.sqrt(
//           Math.pow(neuron.x - mousePos.x, 2) +
//           Math.pow(neuron.y - mousePos.y, 2)
//         );

//         let glowIntensity = 0.6;
//         if (distanceToMouse < 100) {
//           glowIntensity = 1 - (distanceToMouse / 100) * 0.6;
//         }

//         // Click effect
//         if (clickEffect) {
//           const clickDistance = Math.sqrt(
//             Math.pow(neuron.x - clickEffect.x, 2) +
//             Math.pow(neuron.y - clickEffect.y, 2)
//           );
//           const timeDiff = Date.now() - clickEffect.timestamp;
          
//           if (timeDiff < 1000 && clickDistance < 200) {
//             glowIntensity = Math.max(glowIntensity, 1 - (timeDiff / 1000));
//           }
//         }

//         // Draw neuron
//         ctx.beginPath();
//         ctx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
        
//         // Glow effect
//         const gradient = ctx.createRadialGradient(
//           neuron.x, neuron.y, 0,
//           neuron.x, neuron.y, neuron.size * 3
//         );
//         gradient.addColorStop(0, `hsla(200, 100%, 70%, ${glowIntensity})`);
//         gradient.addColorStop(0.5, `hsla(270, 100%, 70%, ${glowIntensity * 0.3})`);
//         gradient.addColorStop(1, 'transparent');
        
//         ctx.fillStyle = gradient;
//         ctx.fill();
        
//         // Core
//         ctx.fillStyle = `hsla(240, 100%, 65%, ${glowIntensity})`;
//         ctx.fill();
//       });

//       // Draw connections
//       initialConnections.forEach(connection => {
//         const fromNeuron = initialNeurons[connection.from];
//         const toNeuron = initialNeurons[connection.to];
        
//         if (!fromNeuron || !toNeuron) return;

//         const distance = Math.sqrt(
//           Math.pow(fromNeuron.x - toNeuron.x, 2) +
//           Math.pow(fromNeuron.y - toNeuron.y, 2)
//         );

//         if (distance < 150) {
//           let opacity = connection.strength * (1 - distance / 150);
          
//           // Enhance connections near mouse
//           const midX = (fromNeuron.x + toNeuron.x) / 2;
//           const midY = (fromNeuron.y + toNeuron.y) / 2;
//           const distanceToMouse = Math.sqrt(
//             Math.pow(midX - mousePos.x, 2) +
//             Math.pow(midY - mousePos.y, 2)
//           );
          
//           if (distanceToMouse < 80) {
//             opacity = Math.min(1, opacity * 2);
//           }

//           // Click propagation effect
//           if (clickEffect) {
//             const clickDistance = Math.sqrt(
//               Math.pow(midX - clickEffect.x, 2) +
//               Math.pow(midY - clickEffect.y, 2)
//             );
//             const timeDiff = Date.now() - clickEffect.timestamp;
            
//             if (timeDiff < 1500 && clickDistance < 300) {
//               const wave = Math.sin((timeDiff / 100) - (clickDistance / 50));
//               opacity = Math.max(opacity, Math.abs(wave) * 0.8);
//             }
//           }

//           ctx.beginPath();
//           ctx.moveTo(fromNeuron.x, fromNeuron.y);
//           ctx.lineTo(toNeuron.x, toNeuron.y);
//           ctx.strokeStyle = `hsla(240, 100%, 65%, ${opacity})`;
//           ctx.lineWidth = 1;
//           ctx.stroke();
//         }
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [mousePos, clickEffect]);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     setMousePos({ x: e.clientX, y: e.clientY });
//   };

//   const handleClick = (e: React.MouseEvent) => {
//     setClickEffect({
//       x: e.clientX,
//       y: e.clientY,
//       timestamp: Date.now()
//     });

//     // Clear the effect after animation
//     setTimeout(() => setClickEffect(null), 2000);
//   };

//   return (
//     <motion.canvas
//       ref={canvasRef}
//       className="absolute inset-0 pointer-events-auto cursor-crosshair"
//       onMouseMove={handleMouseMove}
//       onClick={handleClick}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2 }}
//       style={{ mixBlendMode: 'screen' }}
//     />
//   );
// };

// export default NeuronBackground;

// import LightRays from "./Lightrays";

// const NeuronBackground = () => {
//   return (
//     <div style={{ width: "100%", height: "600px", position: "relative" }}>
//       <LightRays
//         raysOrigin="top-center"
//         raysColor="#00ffff"
//         raysSpeed={1.5}
//         lightSpread={0.8}
//         rayLength={1.2}
//         followMouse={true}
//         mouseInfluence={0.1}
//         noiseAmount={0.1}
//         distortion={0.05}
//         className="custom-rays"
//       />
//     </div>
//   );
// };

// export default NeuronBackground;

import Aurora from "./Aurora";

const NeuronBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Aurora
        colorStops={["#8d00c4", "#00ea8d", "#5CE65C", "#F54927"]}
        amplitude={1.0}
        blend={3.0}
        speed={1.0}
      />
    </div>
  );
};

export default NeuronBackground;

