"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import EventFormSubmit from "./EventFormStatus";

interface State {
  message?: {
    success?: boolean;
    errors?: string[];
  };
}

interface AddEventFormProps {
  formAction: (formData: FormData) => void;
  state?: State;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AddEventForm: React.FC<AddEventFormProps> = ({ formAction}) => {
  // Calculate minDate outside of useEffect
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const minDate = `${year}-${month}-${day}`;

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [feeError, setFeeError] = useState<string | null>(null);

  // Function to validate phone number input
  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target;
    const value = input.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    input.value = numericValue;

    if (numericValue.length !== 10) {
      setPhoneError("Phone number must be 10 digits.");
      input.setCustomValidity("Phone number must be 10 digits.");
    } else {
      setPhoneError(null);
      input.setCustomValidity("");
    }
  };

  // Function to validate email input (only allow gmail.com)
  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target;
    const value = input.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(value) && value.length > 0) {
      setEmailError("Please enter a valid email address.");
      input.setCustomValidity("Please enter a valid email address.");
    } else if (!value.endsWith("@gmail.com") && value.length > 0) {
      setEmailError("Please enter a valid Gmail address.");
      input.setCustomValidity("Please enter a valid Gmail address.");
    } else {
      setEmailError(null);
      input.setCustomValidity("");
    }
  };

  // Function to validate registration fee
  const handleFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    const numericValue = parseInt(value, 10);

    if (numericValue < 5) {
      setFeeError("Registration fee must be at least 5.");
      input.setCustomValidity("Registration fee must be at least 5.");
    } else {
      setFeeError(null);
      input.setCustomValidity("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInUp}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Add Event
          </motion.h1>
        </div>

        
        <motion.form
          className="space-y-6 backdrop-blur-lg bg-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl w-full"
          variants={fadeInUp}
          method="POST"
          action={formAction}
        >
          <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
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
                min={minDate} // Use the calculated minDate here
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
                onChange={handlePhoneChange}
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                required
              />
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
            </motion.div>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
              <motion.div className="space-y-2" variants={fadeInUp}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-purple-300"
                >
                  Email-Id
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleEmailChange}
                  className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </motion.div>

              <motion.div className="space-y-2" variants={fadeInUp}>
                <label
                  htmlFor="shortnote"
                  className="block text-sm font-medium text-purple-300"
                >
                  Short Note About Event
                </label>
                <input
                  type="text"
                  id="shortnote"
                  name="shortnote"
                  className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                />
              </motion.div>
            </div>
            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="event"
                className="block text-sm font-medium text-purple-300"
              >
                Type of Event
              </label>
              <input
                type="text"
                id="event"
                name="event"
                placeholder="corporate event or social event"
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
                required
              />
            </motion.div>

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
                onChange={handleFeeChange}
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out"
              />
              {feeError && (
                <p className="text-red-500 text-sm">{feeError}</p>
              )}
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
