import { useFormStatus } from "react-dom";
import React, { FC } from 'react';

const EventFormSubmit: FC = () => {
    const { pending }: { pending: boolean } = useFormStatus();
  
    if (pending) {
      return (
        <p className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
          Adding...
        </p>
      );
    }
  
    return (
      <button
        type="submit"
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
      >
        Add Event
      </button>
    );
}

export default EventFormSubmit;