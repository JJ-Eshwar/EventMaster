import React, { ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

