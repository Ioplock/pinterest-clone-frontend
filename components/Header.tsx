"use client";
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from 'react';
import ThemeSwitch from './ThemeSwitch';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality or redirect
    console.log('Search Query:', searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Optional: Close the menu when pressing the Esc key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow fixed w-full z-20">
      <div className="w-full mx-0 px-2 lg:px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="h-10 w-auto dark:invert"
                src="/logo.svg"
                alt="Site Logo"
                width={10}
                height={10}
                priority
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 items-center justify-center px-4">
            <div className="w-full">
              <form onSubmit={handleSearch}>
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-200 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
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
                <p className="text-gray-700 dark:text-gray-200 hover:text-violet-500 dark:hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="text-gray-700 dark:text-gray-200 hover:text-violet-500 dark:hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-700 dark:text-gray-200 hover:text-violet-500 dark:hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </Link>
              {/* Add more menu items as needed */}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white bg-black hover:text-white hover:bg-violet-700 focus:outline-none focus:bg-violet-700 focus:text-white transition duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  // Menu closed icon
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
                ) : (
                  // Menu open icon
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Theme switcher */}
          <div className="flex items-center pl-4">
            <ThemeSwitch />
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide-in from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-30`}
        id="mobile-menu"
      >
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <p
              className="text-gray-700 hover:text-violet-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </p>
          </Link>
          <Link href="/about">
            <p
              className="text-gray-700 hover:text-violet-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </p>
          </Link>
          <Link href="/contact">
            <p
              className="text-gray-700 hover:text-violet-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </p>
          </Link>
          {/* Add more mobile menu items as needed */}
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300 z-25"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
