'use client';
import React from 'react';
import data from '../lib/data.json';
import Divider from './Divider';

const Clientele: React.FC = () => {
  const clienteleData = data.ourClientele;

  return (
    <div className="w-full overflow-hidden lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Block */}
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
            <h2 className="text-5xl text-primary font-bold">{clienteleData.title}</h2>
          </div>

          {/* Right Block */}
          <div className="flex-1">
            {clienteleData.clientList.map((client, index) => (
              <div key={index} className="mb-8">
                <div className="relative">
                
                </div>
                <p className="text-lg mt-2">{client.description}</p>
                {index < clienteleData.clientList.length - 1 && (
                  <Divider orientation="horizontal" />
                )}
              </div>
            ))}
            <Divider />
            <a
            href="/clientele"
            className="inline-block mt-4 mb-14 px-6 py-3 font-body text-white bg-primary hover:bg-white  hover:text-primary  rounded"
          >
            Read More
          </a>
          </div>
        </div>
      </div>
      <div className='lg:mt-10'>
      <Divider />
      </div>
    </div>
  );
};

export default Clientele;
