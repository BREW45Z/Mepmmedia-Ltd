'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Divider from './Divider';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 return (
    <section>

    <nav className="bg-white py-4 lg:px-40 mt-5 dark:bg-gray-800 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={60} height={60} className="h-6 sm:h-9" />
        </a>
       <div className='flex'>
       <h2 className='font-title font-extrabold text-primary px-2'>MENU</h2>
       <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <Image src="/hamburger.svg" alt="Menu" width={40} height={40} />
        </button>
       </div>
      
      </nav>
      <div
        className={`fixed top-0 right-0 w-64 bg-black bg-opacity-75 h-full transition-transform transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white p-4 focus:outline-none absolute top-4 right-4"
        >
          X
        </button>
        <ul className="text-white mt-16">
          <li className="p-4 hover:bg-gray-700"><a href="#">Home</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Our Profile</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Our Clientele</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Our Services</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Our Team</a></li>
          <li className="p-4 hover:bg-gray-700"><a href="#">Our Contact</a></li>
        </ul>
      </div>
      <Divider />
      </section>
  );
};

export default Header;
