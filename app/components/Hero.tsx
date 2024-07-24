'use client';
import React from 'react';
import data from '../lib/data.json';
import Divider from '../components/Divider'; // Import Divider component

const Hero: React.FC = () => {
  const heroData = data.hero;

  return (
    <div className="relative overflow-hidden w-full">
      {/* Hero Section */}
      <div className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {heroData.title1}
          </h1>
          <p className="mt-3 font-body text-lg text-muted-foreground">
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

        <div>
 <Divider />
</div>
      {/* Our Profile Section */}
      <div className="mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-start">
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
            className="inline-block mt-4 px-6 py-3 font-body text-white bg-primary hover:bg-white  hover:text-primary border-2 rounded"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
