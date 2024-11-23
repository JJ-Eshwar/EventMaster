import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll"; // Import the component

export default function ContentComp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <RevealOnScroll delay={0.2}>
          <motion.div variants={textVariants} className="mb-6 text-3xl md:text-5xl font-bold leading-relaxed tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              We are{" "}
            </span>
            <span className="text-white">
              storytellers, wizards, builders, producers, planners, problem solvers.
            </span>
          </motion.div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <motion.div variants={textVariants} className="mb-6 text-3xl md:text-5xl font-bold leading-relaxed tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              We are{" "}
            </span>
            <span className="text-white">
              creatives, innovators, disruptors, dreamers, doers.
            </span>
          </motion.div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
          <motion.div variants={textVariants} className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              We are{" "}
            </span>
            <span className="text-white">EventMaster.</span>
          </motion.div>
        </RevealOnScroll>
      </motion.section>
    </section>
  );
}
