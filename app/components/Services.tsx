'use client';
import React from 'react';
import data from '../lib/data.json';
import Divider from './Divider';

const Services: React.FC = () => {
  const servicesData = data.services;

  return (
    <div className=" w-full overflow-hidden lg:py-10">
      <div className=" max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row ">
          {/* Left Block */}
          <div className="flex-1 md:text-left mb-8 md:mb-0">
            <h2 className="text-5xl text-primary font-bold">{servicesData.title}</h2>
          </div>

          {/* Right Block */}
          <div className="flex-1">
            {servicesData.list.map((service, index) => (
              <div key={index} className="mb-10">
                <div className="relative mb-4">
                  <img
                    src={service.imageSrc}
                    className="rounded-xl w-full"
                    alt={service.altText}
                  />
                  <div className="absolute text-white bottom-4 left-4 bg-black bg-opacity-50  px-4 py-2 rounded">
                    {service.title}
                  </div>
                </div>
              </div>
            ))}
            
            <Divider orientation="horizontal"  />
            <div>
            <a
            href="/services"
            className="inline-block mt-4 px-6 py-3 font-body text-white bg-primary hover:bg-white  hover:text-primary rounded"
          >
            Read More
          </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
