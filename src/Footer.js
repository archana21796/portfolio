import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='styleFooter'>
      © Copyright { year } Made by <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      style={{ fontSize: "24px", display: "inline-block" }}
    > ❤️ </motion.div> Archana Selvaraj.
    </div>
  )
}

export default Footer
