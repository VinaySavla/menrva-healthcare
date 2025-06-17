'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const whatsappNumber = '+919876543210';
  const whatsappMessage = 'Hello, I would like to book a blood test at my home.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 morphing-bg"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-40"
          animate={{ y: [-50, 50, -50], x: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20"
          animate={{ scale: [0.8, 1.5, 0.8], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold neon-glow">
                🩺 Mumbai's #1 Home Blood Testing Service
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Professional Blood Tests
              <motion.span
                className="text-blue-600 block gradient-animate bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                At Your Doorstep
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Experience convenient, reliable, and affordable blood testing services 
              across Mumbai. Our certified professionals bring the lab to your home 
              with discounted rates and trusted lab partnerships.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                </motion.svg>
                <span>Book Now on WhatsApp</span>
              </motion.a>
              
              <motion.a
                href="#services"
                className="btn-interactive border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.a>
            </motion.div>

            {/* Animated Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600"
            >
              {[
                { icon: "✓", text: "Certified Professionals" },
                { icon: "⚡", text: "Same Day Results" },
                { icon: "📍", text: "Across Mumbai" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.span
                    className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive 3D Process Card */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="card-3d bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-white rounded-full"></div>
              </motion.div>
              
              <div className="relative z-10">
                <motion.div
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <motion.svg
                    className="w-12 h-12 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </motion.svg>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Quick & Easy Process
                </motion.h3>

                <div className="space-y-4 text-left max-w-sm mx-auto">
                  {[
                    "WhatsApp us your requirements",
                    "Schedule convenient time slot",
                    "Professional visits your home",
                    "Get results digitally"
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.3 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-sm"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, delay: index * 0.5, repeat: Infinity }}
                      >
                        {index + 1}
                      </motion.div>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg"
              animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              🏆
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl shadow-lg"
              animate={{ x: [-5, 5, -5], scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ✨
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-600 rounded-full mt-2"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
