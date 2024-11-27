import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface ContactData {
  id: string;
  event: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  description: string;
  createdAt: {
    seconds: number;
  };
}

interface ResponseProps {
  ContactData: ContactData[];
}

const Response: FC<ResponseProps> = ({ ContactData }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Response</h1>
        <div className="bg-gray-900 text-white py-8">
          {ContactData.map((contactdata) => (
            <motion.div
              key={contactdata.id}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg shadow-lg mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Event:</p>
                  <p>{contactdata.event}</p>
                </div>
                <div>
                  <p className="font-medium">Name:</p>
                  <p>{contactdata.firstname} {contactdata.lastname}</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p>{contactdata.email}</p>
                </div>
                <div>
                  <p className="font-medium">Phone:</p>
                  <p>{contactdata.phone}</p>
                </div>
                <div>
                  <p className="font-medium">Description:</p>
                  <p>{contactdata.description}</p>
                </div>
                <div>
                  <p className="font-medium">Created At:</p>
                  <p>{new Date(contactdata.createdAt.seconds * 1000).toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Response;