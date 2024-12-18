import React, { useState } from "react";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 bg-yellow-500 text-white p-2 rounded-full z-50"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar Popup */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white shadow-lg z-40`}
      >
        <motion.ul
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
            hidden: { opacity: 0, y: 20 },
          }}
          className="p-6 space-y-4 text-lg font-medium"
        >
          {["Homepage", "Services", "Portfolio", "Contact", "About"].map(
            (item, index) => (
              <motion.li
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                className="hover:underline cursor-pointer"
              >
                {item}
              </motion.li>
            )
          )}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
