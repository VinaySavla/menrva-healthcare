'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Don't render until mounted on client
  if (!isMounted) {
    return null;
  }
  // Generate consistent particles for SSR
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 2 + (i % 4) + 2, // Deterministic sizes
    initialX: (i * 5.26) % 100, // Deterministic positions
    initialY: (i * 7.89) % 100,
    duration: 10 + (i % 10) + 10, // Deterministic durations
    delay: (i % 10),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Medical-themed floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* DNA Helix-inspired floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 opacity-10"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-300">
          <path
            d="M20,20 Q50,10 80,20 Q50,30 20,40 Q50,50 80,60 Q50,70 20,80"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="80" cy="20" r="3" fill="currentColor" />
          <circle cx="20" cy="40" r="3" fill="currentColor" />
          <circle cx="80" cy="60" r="3" fill="currentColor" />
          <circle cx="20" cy="80" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Medical Cross floating element */}
      <motion.div
        className="absolute bottom-32 left-20 w-12 h-12 opacity-10"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-300">
          <rect x="40" y="20" width="20" height="60" fill="currentColor" />
          <rect x="20" y="40" width="60" height="20" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Test tube floating element */}
      <motion.div
        className="absolute top-1/3 left-10 w-8 h-20 opacity-10"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
        }}
      >
        <svg viewBox="0 0 40 80" className="w-full h-full text-purple-300">
          <rect x="12" y="10" width="16" height="60" rx="8" fill="currentColor" />
          <rect x="12" y="50" width="16" height="20" rx="0" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="8" r="6" fill="currentColor" />
        </svg>
      </motion.div>      {/* Microscopic cells */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`cell-${i}`}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-blue-300/20 to-purple-300/20 border border-blue-400/30"
          style={{
            left: `${(i * 12.5) % 100}%`,
            top: `${(i * 11.1) % 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: 360,
          }}
          transition={{
            duration: 10 + (i % 5) + 10,
            delay: i % 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric medical patterns */}
      <motion.div
        className="absolute top-1/2 right-10 w-20 h-20 opacity-5"
        animate={{
          rotate: -360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-300">
          <polygon
            points="50,10 90,50 50,90 10,50"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points="50,25 75,50 50,75 25,50"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingElements;
