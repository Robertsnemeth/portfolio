import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const SuccessMessage = () => {
  return (
    <AnimatePresence>
      <motion.div
      key="message"
      initial={{ opacity: 0}}
      exit={{ 
        opacity: 0,
        transition: { duration: 1}
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}>
          <h1 className="bg-green-500 p-2 text-white rounded">Your Message Was Successfully Sent</h1>
      </motion.div>
    </AnimatePresence>
  )
}

export default SuccessMessage