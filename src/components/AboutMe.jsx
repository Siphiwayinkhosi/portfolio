import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// Define the icon animation variants
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

export const AboutMe = () => {
  return (
    <motion.div id='about'
      className="about-me min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-orange-400 mb-6"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Text Section */}
      <motion.p
        className="max-w-4xl text-lg text-gray-300 text-center leading-relaxed"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        My journey in web development began with a deep curiosity for how things work, and it has 
        evolved into a career where I continuously strive to learn and adapt to new challenges. 
        I thrive in collaborative environments and enjoy solving complex problems to deliver 
        high-quality solutions. These days, I’m kind of new to 
        <span className="text-orange-400"> Next.js </span> and 
        <span className="text-orange-400"> TypeScript</span>, so I am exploring those technologies.
      </motion.p>

      {/* Technologies Section */}
      <motion.div
        className="mt-12 w-full flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
          Technologies I Work With
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-400 transition"
          >
            <SiJavascript size={40} className="text-yellow-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-400 transition"
          >
            <SiTypescript size={40} className="text-blue-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-400 transition"
          >
            <FaReact size={40} className="text-blue-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-400 transition"
          >
            <SiNextdotjs size={40} className="text-white" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-400 transition"
          >
            <FaNodeJs size={40} className="text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-400 transition"
          >
            <SiTailwindcss size={40} className="text-teal-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-400 transition"
          >
            <FaGitAlt size={40} className="text-orange-400" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;


