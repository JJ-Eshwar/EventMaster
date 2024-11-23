// RevealOnScroll.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delay = 0 }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
       observer?.disconnect(); // Use disconnect and optional chaining
    };
  }, []); // empty dependency array is ideal here


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.8, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;

