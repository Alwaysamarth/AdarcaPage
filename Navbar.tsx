import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import Container from './Container';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ADARCA</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
