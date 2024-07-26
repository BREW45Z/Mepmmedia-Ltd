'use client';
import React from 'react';
import data from '../lib/data.json';
import Button from './Button';  // Assuming Button component is created as shown before
import Divider from './Divider';

const Team: React.FC = () => {
  const teamData = data.team;

  return (
    <div className="w-full overflow-hidden lg:py-12">
      <div className=" mx-auto">
        <h2 className="text-5xl text-primary font-bold mb-8 sm:mt-10">{teamData.title}</h2>
        <div className="lg:flex gap-3 justify-center">
          {teamData.members.map((member, index) => (
            <div key={index} className="text-center">
              <div className="">
                <img
                  src={member.imageSrc}
                  className="rounded-xl w-64"
                  alt={member.altText}
                />
                <div className=" w-full text-primary  text-lg font-bold">
                  {member.name}
                </div>
              </div>
              <p className="text-lg mt-2">{member.position}</p>
            </div>
          ))}
        </div>
        <div className='flex-col'>
        <div className="mt-12 lg:mr-[10rem] flex justify-end">
            <div className='lg:w-1/2 md:w-full sm:w-full'>
            <Divider />
            </div>
        </div>
        <div className='flex lg:justify-end  lg:mr-[44rem]'>
        <Button label="Read More" href="/team"  />
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default Team;
