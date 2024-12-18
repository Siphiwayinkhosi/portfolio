import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const allItems = [
  {
    id: 2,
    title: "Portfolio Website",
    img: "heritage.png",
    Description:
      "A visually stunning portfolio website for a hair dresser which is fully responsive.",
    link: "https://portfolio-website.vercel.app",
  },
  {
    id: 3,
    title: "Marketing Agency Landing Page",
    img: "sbuko.png",
    Description: "An elegant landing page crafted for a marketing agency.Its responsive for desktop view",
    link: "https://sbuko-acres.vercel.app/",
  },
  {
    id: 4,
    title: "Tech Company Website",
    img: "1.png",
    Description:
      "A modern website built for innovative tech companies. It's fully responsive.",
    link: "https://tech-landing-page-ivory.vercel.app/",
  },
  {
    id: 5,
    title: "Restaurant Landing Page",
    img: "restuara.png",
    Description:
      "A landing page for a restaurant with some cool animations and it's fully responsive.",
    link: "https://restuarent-landing-page.vercel.app/",
  },
];

// Separate the chat item
const chatItem = {
  id: 1,
  title: "Chat Application",
  img: "chat.png",
  Description: "A real-time chat application designed for seamless communication.",
  link: "https://github.com/Siphiwayinkhosi/super-chat",
};

const Single = ({ item }) => {
  return (
    <motion.div
      className="single-item flex flex-col lg:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="image-container w-full lg:w-1/2">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text */}
      <div className="text-container w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
        <p className="text-gray-600 mt-4">{item.Description}</p>
        {/* Button */}
        {item.id === 1 ? (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 mt-6 inline-block z-10"
          >
            View Code
          </motion.a>
        ) : (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 mt-6 inline-block z-10"
          >
            See Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative py-12 bg-black text-white">
      {/* Progress Line */}
      <div className="progress sticky top-0 z-50 w-full">
        <motion.div
          style={{ scaleX }}
          className="progress-bar h-2 bg-orange-400 w-full origin-left rounded-lg"
        ></motion.div>
      </div>

      {/* Projects */}
      <div className="projects-container flex flex-col items-center gap-12 mt-8 px-6 z-10">
        <h1 className="portfolio-title text-center text-4xl font-extrabold text-white mb-4">
          Featured Works
        </h1>
        {allItems.map((item) => (
          <Single item={item} key={item.id} />
        ))}
        {/* Render Chat Application at the Bottom */}
        <Single item={chatItem} />
      </div>
    </div>
  );
};

export default Portfolio;
