"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { plans } from "./data";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white dark:text-white">
              Simple,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h2>
            <p className="text-gray-300 dark:text-gray-400 max-w-md md:max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`relative group rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-600 dark:to-pink-600"
                    : "bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700"
                } p-px`}
              >
                <div
                  className={`rounded-xl md:rounded-2xl p-4 md:p-6 h-full ${
                    plan.highlighted
                      ? "bg-gray-900 dark:bg-gray-900"
                      : "bg-transparent"
                  }`}
                >
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white dark:text-white">
                      {plan.name}
                    </h3>
                    <div className="text-2xl md:text-3xl font-bold text-white dark:text-white">
                      {plan.price}
                    </div>
                    <ul className="space-y-2 md:space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-gray-400 dark:text-gray-300 text-sm"
                        >
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full text-sm md:text-base ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                          : "bg-gray-700 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-300 dark:text-gray-100"
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
