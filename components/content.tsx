import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

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
    <section className="min-h-screen flex items-center justify-center py-6 px-3 md:py-8 md:px-4 lg:py-12 lg:px-6">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-full sm:max-w-xs md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center"
      >
        <RevealOnScroll delay={0.2}>
          <motion.div
            variants={textVariants}
            className="mb-1 md:mb-3 lg:mb-4 text-sm md:text-xl lg:text-3xl xl:text-4xl font-bold leading-tight md:leading-relaxed tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              We are{" "}
            </span>
            <span className="text-white text-shadow">
              storytellers, wizards, builders, producers, planners, problem
              solvers.
            </span>
          </motion.div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <motion.div
            variants={textVariants}
            className="mb-1 md:mb-3 lg:mb-4 text-sm md:text-xl lg:text-3xl xl:text-4xl font-bold leading-tight md:leading-relaxed tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              We are{" "}
            </span>
            <span className="text-white text-shadow">
              creatives, innovators, disruptors, dreamers, doers.
            </span>
          </motion.div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
          <motion.div
            variants={textVariants}
            className="text-sm md:text-xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white text-shadow"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              We are{" "}
            </span>
            <span>EventMaster.</span>
          </motion.div>
        </RevealOnScroll>
      </motion.section>
    </section>
  );
}
