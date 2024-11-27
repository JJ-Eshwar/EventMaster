"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import EventImage from "./eventimage";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function ClientImageUpload(): JSX.Element {
  const [uploading, setUploading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { uploadImage } = EventImage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // Await the upload to complete and get the URL
      const url = await uploadImage(file);
      setImageUrl(url);

      // Dynamically create a hidden input field to append the image URL to the form
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "imageUrl";
      hiddenInput.value = url;
      e.target.parentElement?.appendChild(hiddenInput);

      console.log("Image uploaded successfully. URL:", url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <motion.div
      className="space-y-2 sm:col-span-2"
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
    >
      <label
        htmlFor="image"
        className="block text-sm font-medium text-purple-300"
      >
        Event Image
      </label>
      <input
        type="file"
        id="image"
        name="image"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        disabled={uploading}
        className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 text-gray-100 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ease-in-out file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600"
      />
      {uploading && (
        <div className="text-purple-300 text-sm mt-2">Uploading...</div>
      )}
      {imageUrl && (
        <div className="text-green-500 text-sm mt-2">
          Image uploaded successfully!
        </div>
      )}
    </motion.div>
  );
}

