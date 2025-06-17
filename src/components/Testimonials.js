'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: "32, Marketing Professional",
      location: "Bandra West",
      rating: 5,
      text: "Excellent service! The phlebotomist was very professional and made the process comfortable. Got my reports the same day via WhatsApp. Highly recommended for busy professionals.",
      test: "Complete Health Checkup"
    },
    {
      name: "Rajesh Patel",
      age: "58, Retired Teacher",
      location: "Borivali East",
      rating: 5,
      text: "Being diabetic, I need regular monitoring. Menrva Healthcare has made it so convenient with their home visits. The staff is knowledgeable and the prices are very reasonable.",
      test: "Diabetes Monitoring"
    },
    {
      name: "Anjali Mehta",
      age: "28, Software Engineer",
      location: "Powai",
      rating: 5,
      text: "Needed thyroid tests urgently. Booked through WhatsApp at 8 PM and they came the next morning! Quick, professional, and affordable. Will definitely use again.",
      test: "Thyroid Function Test"
    },
    {
      name: "Dr. Ramesh Kumar",
      age: "45, Physician",
      location: "Andheri West",
      rating: 5,
      text: "As a doctor, I appreciate their professionalism and hygiene standards. The results are accurate and from trusted labs. Great service for my elderly patients.",
      test: "Senior Citizen Package"
    },
    {
      name: "Sneha Joshi",
      age: "35, Homemaker",
      location: "Ghatkopar",
      rating: 5,
      text: "Perfect for working mothers! They accommodated my schedule and came when the kids were at school. The lady was very gentle and professional. Highly satisfied!",
      test: "Women's Health Panel"
    },
    {
      name: "Arjun Singh",
      age: "40, Business Owner",
      location: "Lower Parel",
      rating: 5,
      text: "Impressed with their service quality. Booking was easy, the technician was punctual, and results were delivered quickly. The prices are much better than traditional labs.",
      test: "Heart Health Panel"
    }
  ];
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.3, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 500,
        }}
        whileHover={{ 
          scale: 1.2,
          rotate: 180,
          transition: { duration: 0.2 }
        }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ));
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        duration: 0.7,
        ease: "easeOut",
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
    <section className="py-20 bg-white overflow-hidden">
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
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hear from thousands of satisfied customers across Mumbai who trust Menrva Healthcare 
            for their blood testing needs.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="relative group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 8,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden h-full">
                {/* Animated background glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-purple-400/0 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <motion.span 
                      className="text-sm text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      ({testimonial.rating}/5)
                    </motion.span>
                  </div>

                  {/* Testimonial Text */}
                  <motion.p 
                    className="text-gray-700 mb-4 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    "{testimonial.text}"
                  </motion.p>

                  {/* Test Type */}
                  <motion.div 
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full inline-block mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.test}
                  </motion.div>

                  {/* Customer Info */}
                  <motion.div 
                    className="border-t border-gray-200 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-semibold mr-3 shadow-md"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </motion.div>
                      <div>
                        <motion.h4 
                          className="font-semibold text-gray-900"
                          whileHover={{ color: "#3B82F6" }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <p className="text-sm text-gray-600">{testimonial.age}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Background animation elements */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Join Thousands of Satisfied Customers
            </motion.h3>
            <motion.p 
              className="text-blue-100 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Experience the convenience and quality that our customers love. 
              Book your home blood test today and see why we're Mumbai's preferred choice.
            </motion.p>
            
            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919876543210?text=Hello, I would like to book a blood test and join your satisfied customers!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
              </motion.svg>
              <span>Book Your Test Now</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[
            { number: "5000+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "99%", label: "Customer Satisfaction" },
            { number: "24hrs", label: "Average Result Time" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={statsVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1.3 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
