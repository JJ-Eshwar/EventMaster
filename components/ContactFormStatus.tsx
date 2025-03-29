'use client';

import { useFormStatus } from 'react-dom';
import React, { FC } from 'react';

interface FormSubmitProps {
  submitting: boolean;
}
const FormSubmit: FC<FormSubmitProps> = ({ }) => {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <p className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
        Sending...
      </p>
    );
  }
  return (
    <button
      type="submit"
      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
    >
      Send Message
    </button>
  );
}

export default FormSubmit;
