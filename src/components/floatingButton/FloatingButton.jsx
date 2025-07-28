import React from "react";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 max-[1000px]:bottom-0 max-[1000px]:right-0 z-50 flex flex-col max-[1000px]:flex-row max-[1000px]:w-full  min-[1000px]:gap-3">
      {/* Telegram Button */}
      <motion.a
        href="https://t.me/ziko2302"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="bg-blue-500 text-white max-[1000px]:hidden p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.9, delay: 0.3 }}
      >
        <FaTelegramPlane size={20} />
      </motion.a>

      {/* Phone Button */}
      {/* <motion.a
        href="tel:+998909361795"
        whileHover={{ scale: 1.1 }}
        className="bg-green-500 text-white max-[1000px]:hidden p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.9, delay: 0.3 }}
      >
        <FaPhoneAlt size={18} />
      </motion.a> */}
      <a
        href="https://t.me/ziko2302" // o'zingning username
        className=" bg-blue-500 min-[1000px]:hidden flex justify-center text-white hover:bg-blue-600 py-2 w-1/2"
      >
        <FaTelegramPlane size={20} />
      </a>
      <a
        href="tel:+998909361795"
        className=" bg-green-500 min-[1000px]:hidden flex justify-center text-white hover:bg-green-600 py-2 w-1/2"
      >
        <FaPhoneAlt size={18} />
      </a>
    </div>
  );
};

export default FloatingButton;
