'use client';
import React from 'react';
import data from '../lib/data.json';
import Divider from '../components/Divider'; // Import Divider component

const Hero: React.FC = () => {
  const heroData = data.hero;

  return (
    <div className="relative overflow-hidden w-full">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-4xl mx-auto ">
         
          <p className="mt-3 font-body text-xl text-muted-foreground">
            {heroData.subtitle1}
          </p>
        </div>
        <div className="mt-10 relative max-w-4xl mx-auto">
          <img
            src={heroData.imageSrc}
            className="rounded-xl"
            alt={heroData.altText}
          />
          <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
            <div className="w-48 h-48 rounded-lg bg-background/10" />
          </div>
          <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
            <div className="w-48 h-48 rounded-full bg-background/10" />
          </div>
        </div>
      </div>


      {/* Our Profile Section */}
      <div className="mt-40 max-w-5xl mx-auto flex flex-col md:flex-row items-start">
        {/* Left Block */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-5xl text-primary font-bold">{heroData.title2}</h2>
        </div>

        {/* Right Block */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg font-body text-gray-700 mb-4">{heroData.subtitle2}</p>
          <Divider />
          <a
            href="/profile"
            className="inline-block mt-4 px-6 py-3 font-body text-white bg-primary hover:bg-white  hover:text-primary  rounded"
          >
            Read More
          </a>
        </div>
      </div>
      <div className='py-5'>
       <Divider />
      </div>
    </div>
  );
};

export default Hero;
