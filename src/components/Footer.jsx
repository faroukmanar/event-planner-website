import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-white-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src={require('../assets/logo.png')}
              alt="Logo"
              className="h-20 w-auto " // Better dimensions for logo
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:text-yellow-500 me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500 me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-yellow-500 me-4 md:me-6">Events</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-500 me-4 md:me-6">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500 me-4 md:me-6">Contact</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-500">Gallery</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">InnovateWeb™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
