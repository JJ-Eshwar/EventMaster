'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import FormSubmit from "./ContactFormStatus";


interface ContactData {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  event: string;
  description: string;
}

const Contact_Form: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null); // For success/error messages
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const contact_Data: ContactData = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      event: formData.get("event") as string,
      description: formData.get("description") as string,
    };
    console.log("Data being sent to server:", contact_Data);
    try {
      const response = await fetch('/api/contact', {  // Send data to the API route
        method: 'POST',
        body: JSON.stringify(contact_Data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Data being sent:", contact_Data);
      if (response.ok) {
        setMessage('Message sent successfully!'); // Set success message
        form.reset(); // Clear the form
      } else {
        const data = await response.json(); // Get error message from server if any.
        setMessage(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Drop us a Note
          </motion.h1>
          {message && (
            <div className="text-center mb-8">
              <p className={message.includes('successfully') ? "text-green-500" : "text-red-500"}>{message}</p>
            </div>
          )}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div whileHover={{ scale: 1.02 }} className="group">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="group">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Id
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group md:col-span-2"
                >
                  <label
                    htmlFor="event"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Event
                  </label>
                  <select
                    id="event"
                    name="event"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Event Type</option>
                    <option value="social">Social Event</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group md:col-span-2"
                >
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Tell Us About Your Event
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center"
              >
                <FormSubmit submitting={submitting}/>
              </motion.div>
              

            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact_Form;
