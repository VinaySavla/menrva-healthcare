'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Medical3DCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  index,
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 h-full ${className}`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg">
              {icon}
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-900 mb-2">Includes:</p>
            <div className="grid grid-cols-2 gap-1">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-4 h-4 text-green-500 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative group perspective-1000 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* 3D Card Container */}
      <motion.div
        className="relative preserve-3d h-full"
        animate={{
          rotateY: isHovered ? 8 : 0,
          rotateX: isHovered ? 4 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden h-full">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full transform translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full transform -translate-x-4 translate-y-4"></div>
              {/* Medical-themed floating particles */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + i * 8}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 h-full flex flex-col">
            {/* Icon Section */}
            <div className="flex items-center mb-4">
              <motion.div
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center mr-4 shadow-lg"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {icon}
              </motion.div>
              
              {/* Medical pulse indicator */}
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <motion.div
                  className="absolute inset-0 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            </div>

            {/* Title */}
            <motion.h3
              className="text-xl font-bold text-gray-900 mb-3"
              animate={{
                color: isHovered ? '#3B82F6' : '#111827',
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-600 mb-4 flex-grow"
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            {/* Features List */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-900 mb-2">Includes:</p>
              <div className="grid grid-cols-2 gap-1">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + idx * 0.05 + 0.4,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive CTA */}
            <motion.div
              className="mt-4 pt-4 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Holographic shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"
            style={{
              background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
              transform: 'translateX(-100%)',
            }}
            animate={{
              transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* 3D depth layer */}
          <motion.div
            className="absolute inset-0 bg-blue-600/10 rounded-2xl -z-10"
            style={{
              transform: 'translateZ(-10px) translateY(4px)',
            }}
            animate={{
              opacity: isHovered ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Outer glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default Medical3DCard;
