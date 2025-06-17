'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const CounterAnimation = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isMounted, isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isMounted && isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

const Interactive3DStats = ({ stats, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20"
          >
            <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
              {stat.icon}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {stat.prefix || ''}{stat.value}{stat.suffix || ''}
            </div>
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="relative group perspective-1000"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* 3D Card Container */}
          <motion.div
            className="relative preserve-3d cursor-pointer"
            animate={{
              rotateY: hoveredIndex === index ? 10 : 0,
              rotateX: hoveredIndex === index ? 5 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Main Card */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 relative overflow-hidden"
              style={{
                boxShadow: hoveredIndex === index 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(59, 130, 246, 0.3)'
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-indigo-400/10 rounded-xl"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating particles */}
              {hoveredIndex === index && Array.from({ length: 5 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + i * 10}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <div className="relative z-10">
                {/* Icon */}
                {stat.icon && (
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 text-blue-600"
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {stat.icon}
                  </motion.div>
                )}

                {/* Number */}
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  animate={{
                    color: hoveredIndex === index ? '#3B82F6' : '#111827',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <CounterAnimation
                    end={stat.value}
                    suffix={stat.suffix || ''}
                    prefix={stat.prefix || ''}
                    duration={1.5}
                  />
                </motion.div>

                {/* Label */}
                <motion.div
                  className="text-gray-600 font-medium"
                  animate={{
                    y: hoveredIndex === index ? -2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Shadow/Depth layer */}
            <motion.div
              className="absolute inset-0 bg-blue-600/20 rounded-xl -z-10"
              style={{
                transform: 'translateZ(-20px)',
              }}
              animate={{
                opacity: hoveredIndex === index ? 0.3 : 0,
                scale: hoveredIndex === index ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Ripple effect on click */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-blue-400"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: hoveredIndex === index ? [1, 1.2] : 1,
              opacity: hoveredIndex === index ? [0.6, 0] : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Interactive3DStats;
