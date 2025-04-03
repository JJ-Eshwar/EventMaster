"use client";
import React, { FC } from "react";
import { services, Service } from "../page"; // Import the services array and the Service interface

type ServiceDetailPageProps ={
  params: { slug: string };
}

const ServiceDetailPage: FC<ServiceDetailPageProps> = ({ params }) => {
  const { slug } = params;

  const service: Service | undefined = services.find(
    (s) => s.href === slug
  );

  if (!service) {
    return <div>Service not found</div>; // Handle the case where the service is not found
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
          {service.title}
        </h1>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mb-8" />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-video overflow-hidden rounded-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
