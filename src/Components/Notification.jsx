import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Notification = () => {
  const [shake, setShake] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) {
      // Toggle shake state every 25 seconds
      const interval = setInterval(() => {
        setShake((prev) => !prev);
      }, 15000); // 25 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [visible]);

  if (!visible) return null; // Render nothing if not visible

  return (
    <div className="relative">
      <a
        href="https://quizzy.webbstack.com/?ref=schultetable.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Framer Motion wrapper for animated effects */}
        <motion.div
          className="border bg-purple-500 p-4 my-1 rounded-md font-semibold text-xs sm:text-lg  border-yellow-300 text-white tracking-wide hover:bg-purple-600 flex items-center "
          initial={{ x: 0 }}
          animate={{
            x: shake ? [0, -10, 10, -10, 10, -10, 10, 0] : [0], // Shake animation
          }}
          transition={{
            duration: 0.6, // Duration of the shake animation
            ease: "easeInOut",
            repeat: 0,
          }}
        >
          {/* Ad content */}
          Sharpen Your Mind with Our Free Brain Game – Brought to You by the
          Creators of SchulteTable.com!
        </motion.div>
      </a>
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-0 right-0 p-2 text-white hover:text-gray-300 flex items-center justify-center"
      >
        ✖
      </button>
    </div>
  );
};

export default Notification;
