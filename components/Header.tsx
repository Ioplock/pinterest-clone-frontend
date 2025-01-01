"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality or redirect
    console.log('Search Query:', searchQuery);
  };

  return (
    <header className="bg-white shadow fixed w-full z-10">
      <div className="w-full mx-0 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
                <img
                  className="h-10 w-auto"
                  src="/logo.svg" // Replace with your logo path
                  alt="Site Logo"
                />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full">
              <form onSubmit={handleSearch}>
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* Search Icon */}
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Menu */}
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-4">
              <Link href="/">
                <p className="text-gray-700 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="text-gray-700 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-700 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </Link>
              {/* Add more menu items as needed */}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              {/* Implement mobile menu toggle if needed */}
              {/* Placeholder for mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Implement mobile menu dropdown if needed */}
      {/* Placeholder for mobile menu */}
      {/* <div className="md:hidden" id="mobile-menu">
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <a className="text-gray-700 hover:text-violet-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-violet-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-violet-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </Link>
          {/* Add more mobile menu items as needed */}
        {/* </nav>
      </div> */}
    </header>
  );
};

export default Header;
