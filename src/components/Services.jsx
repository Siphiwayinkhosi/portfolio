import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Services = () => {
  // Create a ref to track the visibility of the component
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Adjust margin for earlier animation trigger

  return (
    <motion.div id="services"
      ref={ref} // Attach the ref to the main container
      className="about-me min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center px-8"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Animate when in view
      transition={{ duration: 1 }}
    >
      {/* Introduction Section */}
      <motion.div
        className="textContainer text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl font-medium text-gray-600 mb-4">
          I thrive on turning creative ideas into <br />
          reality and helping businesses build their online presence.
        </p>
        <hr className="border-orange-500 w-1/4 mx-auto" />
      </motion.div>

      {/* Title Section */}
      <motion.div
        className="titleContainer flex flex-col items-center gap-6 mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.8 }}
      >
        <motion.img
          src="/download.png"
          alt="Icon"
          className="w-16 h-16 mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        />
        <h1 className="text-4xl font-bold text-gray-800">
          <span className="text-orange-500">Unique </span>Ideas For Your Business
        </h1>
        <motion.button
          className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          What I do?
        </motion.button>
      </motion.div>

      {/* Services List Section */}
      <motion.div
        className="ListContainer grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {[
          {
            title: "Designing and Developing Websites",
            description:
              "I create visually appealing, functional, and user-friendly websites tailored to meet specific goals. My focus is on building responsive designs that look great on all devices, ensuring users have an enjoyable and seamless experience.",
          },
          {
            title: "Optimizing Website Performance",
            description:
              "I ensure that websites load quickly and run efficiently by optimizing code, images, and other assets. By applying techniques like lazy loading, caching, and minification, I provide a fast and reliable user experience.",
          },
          {
            title: "Building User Interfaces",
            description:
              "I design and implement intuitive user interfaces that make it easy for visitors to navigate and interact with a website. Using tools like React.js and frameworks such as Tailwind CSS, I bring sleek, interactive designs to life that align with modern web trends.",
          },
          {
            title: "Maintaining and Updating Websites",
            description:
              "I regularly update content, fix bugs, and implement new features to keep websites secure and relevant. This includes monitoring performance, addressing security vulnerabilities, and adapting to the latest web technologies.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="box bg-white rounded-lg shadow-md p-6 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <motion.button
              className="px-4 py-2 bg-orange-500 text-white rounded shadow-md hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Go
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
