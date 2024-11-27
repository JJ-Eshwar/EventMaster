"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, Building2 } from "lucide-react";

export default function Contact_Details(): JSX.Element {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Phone className="text-white" size={24} />
            </div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Phone
            </label>
            <span className="text-white text-lg font-semibold">6305867814</span>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-pink-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Mail className="text-white" size={24} />
            </div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Email
            </label>
            <span className="text-white text-lg font-semibold">
              eventmaster@event.com
            </span>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-red-500 transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br from-red-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="text-white" size={24} />
            </div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Office
            </label>
            <span className="text-white text-lg font-semibold">Online</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

