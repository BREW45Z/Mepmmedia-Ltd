import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex">
          <Image src="/logo.svg" alt="Logo" width={60} height={60} className="h-6 sm:h-9" />
        </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Our Profile</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Our Contact</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Our clientele</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Our Services</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-900 lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 MepMedia Multimedia Solutions Limited. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
