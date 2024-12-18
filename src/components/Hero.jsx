import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div id="home"  className="hero relative flex flex-col items-center justify-center h-screen bg-black text-white px-8">
      {/* Circular Hero Image with Rotating Effect */}
      <motion.div
        className="relative w-80 h-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      
        
        {/* Hero Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500 shadow-xl">
          <img
            src="/80.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Hero Text Content */}
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold text-orange-500">Hi, It’s Siphiwayinkhosi</h1>
        <p className="text-xl mt-4">
          I’m a <span className="text-orange-400">Web Developer</span>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Transforming ideas into responsive and dynamic digital solutions.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <motion.button
          className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition-transform transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hire Me
        </motion.button>
        <motion.button
          className="px-8 py-3 bg-transparent border border-orange-600 text-orange-600 font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-transform transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.button>
      </div>

      {/* Background Glow Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 opacity-20 blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default Hero;
