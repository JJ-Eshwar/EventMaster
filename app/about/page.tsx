"use client"

import React, { useState, useEffect, FC, ReactNode } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ContentComp from "../../components/content";

const RevealOnScroll = dynamic(() => import("../../components/RevealOnScroll"), {
  ssr: false,
});

interface RevealOnScrollComponentProps {
  children: ReactNode;
  delay?: number;
}

const RevealOnScrollComponent: FC<RevealOnScrollComponentProps> = ({ children, delay = 0 }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.3 }
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref]);

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

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Stat {
  number: string;
  label: string;
}

const EventLanding: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features: Array<Feature> = [
    {
      title: "Luxury Events",
      description:
        "Bespoke experiences crafted with meticulous attention to detail",
      icon: "✨",
    },
    {
      title: "Global Reach",
      description:
        "Creating memorable moments across prestigious venues worldwide",
      icon: "🌎",
    },
    {
      title: "Expert Team",
      description: "Industry veterans dedicated to exceeding expectations",
      icon: "👥",
    },
  ];

  const stats: Array<Stat> = [
    { number: "500+", label: "Events Managed" },
    { number: "50+", label: "Global Venues" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <RevealOnScrollComponent>
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
                  Transform your vision into extraordinary events that leave
                  lasting impressions
                </p>
              </RevealOnScrollComponent>

              <RevealOnScrollComponent delay={0.6}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:bg-gradient-to-r hover-from-purple-600 hover-to-pink-600 transition-all duration-300"
                >
                  Start Planning
                </motion.button>
              </RevealOnScrollComponent>
            </div>
          </div>
        </section>
      </RevealOnScrollComponent>
      
      <RevealOnScrollComponent>
        <ContentComp />
      </RevealOnScrollComponent>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <RevealOnScrollComponent key={`feature-${index}`} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-pink-900/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="absolute inset-0 border border-purple-500/20 rounded-2xl group-hover:border-purple-500/40 transition-colors duration-300" />
              </motion.div>
            </RevealOnScrollComponent>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat: Stat, index: number) => (
            <RevealOnScrollComponent key={`stat-${index}`} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/30 to-purple-900/20 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            </RevealOnScrollComponent>
          ))}
        </div>
      </section>

      <RevealOnScrollComponent>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <div className="relative p-12 md:p-20 text-center">
              <RevealOnScrollComponent delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Something Extraordinary?</h2>
              </RevealOnScrollComponent>

              <RevealOnScrollComponent delay={0.4}>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Let&apos;s collaborate to bring your vision to life with our world-class event planning expertise</p>
              </RevealOnScrollComponent>

              <RevealOnScrollComponent delay={0.6}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:bg-gray-100 transform transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
              </RevealOnScrollComponent>
            </div>
          </div>
        </section>
      </RevealOnScrollComponent>
    </div>
  );
};

export default EventLanding;
