import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

import  Logo  from '../assets/logo1.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['HOME', 'ROOFTOP', ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-4 py-2 bg-transparent">
      <div className="max-w-[1400px] mx-auto">
        <div className={`flex items-center justify-between  backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-black transition-all duration-300 
            ${isScrolled ? 'bg-white' : 'bg-transparent'}
          `} >
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={Logo}
              alt="" 
              className="h-11"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-orange-500 text-sm font-bold tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Booking Button */}
          <a href="#rooftop" className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white 
                         rounded-full hover:bg-gray-800 transition-colors duration-300">
            EXPLORE NOW!
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 mt-2 mx-4 p-4 bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-black">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-orange-500 text-sm font-medium tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 text-white 
                               rounded-full hover:bg-gray-800 transition-colors duration-300 mt-4">
                EXPLORE NOW!
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}