"use client";
import { useEdgeStore } from "../lib/edgestore";

export default function EventImage() {
  const { edgestore } = useEdgeStore();

  const uploadImage = async (file: File): Promise<string> => {
    try {
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress: number) => {
          console.log(progress);
        },
      });
      return res.url; 
    } catch (error) {
      console.log("Error uploading image:", error);
      throw error;
    }
  };

  return { uploadImage };
}