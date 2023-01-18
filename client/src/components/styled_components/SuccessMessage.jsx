import React from 'react';
import { motion } from "framer-motion";

const SuccessMessage = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    transitionEnd>
        <h1 className="bg-green-500 p-2 text-white rounded">Your Message Was successfully Sent</h1>
    </motion.div>
  )
}

export default SuccessMessage