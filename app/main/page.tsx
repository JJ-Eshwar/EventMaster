"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ContentComp from "../../components/content";

const RevealOnScroll = dynamic(() => import("../../components/RevealOnScroll"), {
  ssr: false,
});

interface RevealOnScrollComponentProps {
  children: React.ReactNode;
  delay?: number;
}

const RevealOnScrollComponent: React.FC<RevealOnScrollComponentProps> = ({ children, delay = 0 }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect(); // Disconnect when component unmounts
  }, []);

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


const EventLanding: React.FC = () => {

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
          <div className="text-center">
             <RevealOnScrollComponent delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
                Crafting Unforgettable Moments
              </h1>
            </RevealOnScrollComponent>

            <RevealOnScrollComponent delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Transform your vision into extraordinary events that leave lasting impressions
              </p>
            </RevealOnScrollComponent>

            <RevealOnScrollComponent delay={0.6}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Start Planning
              </motion.button>
            </RevealOnScrollComponent>
          </div>
        </div>
      </section>
      <ContentComp />
    </div>
  );
};

export default EventLanding;
