'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const BloodDropAnimation = ({ size = 'medium', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const sizeClasses = {
    small: 'w-8 h-10',
    medium: 'w-12 h-14',
    large: 'w-16 h-20'
  };

  useEffect(() => {
    setIsMounted(true);
    
    const interval = setInterval(() => {
      setAnimationCycle(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Don't render until mounted on client
  if (!isMounted) {
    return <div className={`${sizeClasses[size]} ${className}`} />;
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className} cursor-pointer`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main blood drop */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          y: isHovered ? -2 : 0,
          rotate: animationCycle % 2 === 0 ? [0, 2, -2, 0] : [0, -2, 2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 40 50"
          className="w-full h-full drop-shadow-lg"
          style={{
            filter: isHovered ? 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))' : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
          }}
        >
          <defs>
            <linearGradient id={`bloodGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <radialGradient id={`bloodHighlight-${size}`} cx="30%" cy="30%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="70%" stopColor="rgba(255, 255, 255, 0.1)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          
          {/* Blood drop shape */}
          <motion.path
            d="M20 5 C12 15, 5 25, 5 35 C5 42, 11 47, 20 47 C29 47, 35 42, 35 35 C35 25, 28 15, 20 5 Z"
            fill={`url(#bloodGradient-${size})`}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Highlight */}
          <ellipse
            cx="22"
            cy="18"
            rx="6"
            ry="10"
            fill={`url(#bloodHighlight-${size})`}
          />
          
          {/* Animated shimmer */}
          <motion.ellipse
            cx="18"
            cy="25"
            rx="2"
            ry="3"
            fill="rgba(255, 255, 255, 0.4)"
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: animationCycle * 0.5,
            }}
          />
        </svg>
      </motion.div>

      {/* Ripple effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-red-400"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {/* Floating particles around the drop */}
      {isHovered && Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: [0, (Math.cos(i * 60 * Math.PI / 180) * 20)],
            y: [0, (Math.sin(i * 60 * Math.PI / 180) * 20)],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default BloodDropAnimation;
