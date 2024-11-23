"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const backgroundImages: string[] = [
  "https://inspiredoccasionskc.com/wp-content/uploads/2020/09/1S-Starry-Dinner-1536x1024.jpg",
  "https://www.cvent.com/sites/default/files/styles/column_content_width/public/image/2020-09/Cvent-Corporate-event.jpg?itok=iVB_rKva",
  "https://th.bing.com/th/id/OIP.q_g0dPRR3Wz09xxtF4FqkQHaE8?rs=1&pid=ImgDetMain",
  "https://i.pinimg.com/originals/9b/8f/32/9b8f3275c79db1f3ff9f0ab974f55655.jpg",
];

const Home_Page: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
        >
          <img
            src={img}
            alt={`Background ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black/50 to-blue-900/50" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Transform Your Events
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-12 text-xl sm:text-2xl text-gray-300">
            Create unforgettable experiences with our premium event management
            platform
          </p>
          <Link href="/main">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        <div className=" absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute -top-24 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Home_Page;

