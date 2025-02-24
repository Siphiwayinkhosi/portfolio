import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 bg-yellow-500 text-white p-2 rounded-full z-50"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Overlay Background */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 h-full w-64 bg-blue-600 text-white shadow-lg z-40"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;