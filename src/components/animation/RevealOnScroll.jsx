// src/RevealOnScroll.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RevealOnScroll = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration:0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
