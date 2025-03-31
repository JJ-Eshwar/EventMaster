"use client";
import React, { FC ,useRef} from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    title: "Social Events",
    description:
      "Gather your friends and colleagues for a night of fun and networking. Our social events are designed to bring people together in a relaxed and engaging atmosphere.",
    image:
      "https://inspiredoccasionskc.com/wp-content/uploads/2020/09/1S-Starry-Dinner-1536x1024.jpg",
    href: "social-events",
  },
  {
    title: "Corporate Events",
    description:
      "From team-building activities to client-facing presentations, our corporate events are tailored to help your business succeed.",
    image:
      "https://www.cvent.com/sites/default/files/styles/column_content_width/public/image/2020-09/Cvent-Corporate-event.jpg?itok=iVB_rKva",
    href: "corporate-events",
  },
  {
    title: "Work Shops",
    description:
      "Expand your knowledge and skills through our expert-led workshops. Whether you're a beginner or an experienced professional, we have something for everyone.",
    image:
      "https://th.bing.com/th/id/OIP.q_g0dPRR3Wz09xxtF4FqkQHaE8?rs=1&pid=ImgDetMain",
    href: "work-shop",
  },
  {
    title: "Family Events",
    description:
      "Bring your loved ones together for a memorable experience. Our family-friendly events cater to all ages and create lasting memories.",
    image:
      "https://i.pinimg.com/originals/9b/8f/32/9b8f3275c79db1f3ff9f0ab974f55655.jpg",
    href: "family-event",
  },
];

const Wedo: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView: boolean = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
            What We Do
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-6 hover:bg-gray-800/80 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="flex flex-col h-full">
                <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link href={`/about/whatwedo/building`}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium 
                    hover:from-purple-600 hover:to-pink-600 transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Wedo;