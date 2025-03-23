"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { label: "What We Do", href: "/about/whatwedo" },
    // { label: "Press", href: "#press" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "/about/contact" },
    { label: "Add Event", href: "/about/add-event" },
  ];

  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href='/about'>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition-all duration-300">
              <span className="em-initial">EM</span>
              <span className="em-full">EventMaster</span>
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text group-hover:from-teal-300 group-hover:to-blue-400">
                  {item.label}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Side bar"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } md:hidden absolute top-20 inset-x-0 z-50 transition-all duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-black border-b border-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

