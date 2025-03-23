"use client";

import React from "react";
import { motion } from "framer-motion";
import EventFormSubmit from "./EventFormStatus";

interface State {
  message?: {
    success?: boolean;
    errors?: string[];
  };
}

interface AddEventFormProps {
  action: string;
  state?: State;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AddEventForm: React.FC<AddEventFormProps> = ({ action, state }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInUp}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Add Event
          </motion.h1>
        </div>

        {state?.message && (
          <div
            className={`mb-6 p-4 rounded-lg ${state.message.success ? "bg-green-500" : "bg-red-500"
              } text-white`}
          >
            {state.message.success
              ? "Event created successfully!"
              : state.message.errors?.join(", ") || "An error occurred"}
          </div>
        )}

        <motion.form
          className="space-y-8 backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl"
          variants={fadeInUp}
          method="POST"
          action={action}
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-purple-300"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                required
              />
            </motion.div>

            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="event"
                className="block text-sm font-medium text-purple-300"
              >
                Event
              </label>
              <input
                type="text"
                id="event"
                name="event"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                required
              />
            </motion.div>

            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="eventdate"
                className="block text-sm font-medium text-purple-300"
              >
                Event Date
              </label>
              <input
                type="date"
                id="eventdate"
                name="eventdate"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                required
              />
            </motion.div>



            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-purple-300"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
              />
            </motion.div>
            <div className="flex grid-col gap-4">
              <div className="flex">
                <motion.div className="space-y-2" variants={fadeInUp}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-300 flex-1"
                  >
                    Email-Id
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-85 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                  />
                </motion.div>
              </div>
              <div className="flex ">
                <motion.div className="space-y-2 sm:col-span-2" variants={fadeInUp}>
                  <label
                    htmlFor="shortnote"
                    className="block text-sm font-medium text-purple-300"
                  >
                    Short Note About The Event
                  </label>
                  <input
                    type="text"
                    id="shortnote"
                    name="shortnote"
                    className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div className="space-y-2 sm:col-span-2" variants={fadeInUp}>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-purple-300"
              >
                Description About The Event (100-1000 Words)
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
              />
            </motion.div>

            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-purple-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
              />
            </motion.div>

            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="fee"
                className="block text-sm font-medium text-purple-300"
              >
                Registration Fee
              </label>
              <input
                type="number"
                id="fee"
                name="fee"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
              />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center pt-6"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <EventFormSubmit />
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default AddEventForm;

