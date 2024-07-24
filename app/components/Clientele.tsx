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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientele;
