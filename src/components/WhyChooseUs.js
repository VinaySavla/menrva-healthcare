'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Interactive3DStats from './Interactive3DStats';
import BloodDropAnimation from './BloodDropAnimation';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Door-to-Door Service",
      description: "Professional phlebotomists visit your home at your convenient time across Mumbai.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Discounted Rates",
      description: "Up to 50% savings compared to traditional labs with no compromise on quality.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Trusted Lab Partners",
      description: "Associated with reputed laboratories ensuring accurate and reliable results.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Quick Results",
      description: "Same-day or next-day results delivered digitally to your phone and email.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Certified Professionals",
      description: "Trained and certified phlebotomists with years of experience in blood collection.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Safe & Hygienic",
      description: "Strict safety protocols, disposable equipment, and COVID-19 safety measures.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];  const stats = [
    { 
      value: 5000, 
      suffix: '+', 
      label: "Happy Customers",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      value: 50, 
      suffix: '+', 
      label: "Types of Tests",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      value: 24, 
      suffix: '/7', 
      label: "Service Available",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      value: 100, 
      suffix: '%', 
      label: "Mumbai Coverage",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose Menrva Healthcare?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experience the difference with our professional, convenient, and affordable blood testing services 
            designed to meet all your diagnostic needs from the comfort of your home.
          </motion.p>
        </motion.div>        {/* Features Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center mr-4 shadow-lg"
                      variants={iconVariants}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    {/* Add blood drop animation for specific features */}
                    {(index === 0 || index === 3) && (
                      <BloodDropAnimation size="small" className="ml-2" />
                    )}
                  </div>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section with Interactive 3D */}
        <motion.div 
          ref={statsRef}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 relative overflow-hidden mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background animation elements */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
            {/* Add floating blood drops */}
            <BloodDropAnimation size="small" className="absolute top-8 right-8 opacity-20" />
            <BloodDropAnimation size="small" className="absolute bottom-8 left-8 opacity-20" />
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our Impact in Numbers
            </motion.h3>
            <Interactive3DStats stats={stats} className="text-white" />
          </div>
        </motion.div>{/* Coverage Area */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            We Serve Across Mumbai
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "Andheri", "Bandra", "Borivali", "Dadar", "Ghatkopar", "Goregaon",
              "Juhu", "Kandivali", "Kurla", "Malad", "Mulund", "Powai",
              "Santa Cruz", "Thane", "Vashi", "Vikhroli", "Worli", "Lower Parel"
            ].map((area, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-200 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05 + 1.2,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#EBF8FF",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {area}
              </motion.div>
            ))}
          </motion.div>
          <motion.p 
            className="text-gray-600 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            Don't see your area? Contact us - we might be serving there too!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
