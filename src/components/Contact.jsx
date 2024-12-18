import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Animation will trigger only once
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_rxxccvh", // Replace with your Email.js Service ID
        "template_5kjm23b", // Replace with your Email.js Template ID
        formData,
        "UT06Vkxyoz1qVWljZ" // Replace with your Email.js Public Key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setSuccessMessage("Failed to send the message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="contact" ref={ref} className="bg-white px-6 py-12 lg:px-40">
      <motion.h2
        className="text-4xl font-extrabold text-center text-orange-500 mb-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Information */}
      <motion.div
        className="bg-gray-100 rounded-lg shadow-lg p-8 space-y-4 text-center lg:text-left"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={formVariants}
      >
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <span className="text-orange-500 text-xl">📞</span>
          <p className="text-gray-800 font-semibold">
            +268 78473557 / 79395882
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <span className="text-orange-500 text-xl">✉️</span>
          <p className="text-gray-800 font-semibold">
            siphiwayinkhosi.mahlalela9646@gmail.com
          </p>
        </div>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-lg shadow-lg p-8 space-y-6 mt-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={formVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={inputVariants}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </motion.div>
          <motion.div variants={inputVariants}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </motion.div>
        </div>

        <motion.div variants={inputVariants}>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </motion.div>

        <motion.div variants={inputVariants} className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-600 hover:shadow-lg transition duration-300 text-sm lg:text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.div>
      </motion.form>

      {successMessage && (
        <p className="text-center text-green-500 mt-6">{successMessage}</p>
      )}
    </div>
  );
};

export default Contact;
