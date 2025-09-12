'use client';

import React, { useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

// Fungsi scrollToSection untuk animasi scroll lebih smooth dan pelan
type ScrollToSectionOptions = { targetY: number; duration?: number };
function scrollToSection({ targetY, duration = 700 }: ScrollToSectionOptions) {
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutQuad(percent));
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  window.requestAnimationFrame(step);
}

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("beranda");

  const navItems: NavItem[] = [
    { name: "beranda", href: "#home" },
    { name: "tentang", href: "#about" },
    { name: "cara kerja", href: "#howitworks" },
    { name: "fitur", href: "#feature" },
  ];

  const handleItemClick = (itemName: string, href: string) => {
    setActiveItem(itemName);
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const yOffset = -70; // adjust if navbar height changes
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        scrollToSection({ targetY: y, duration: 700 }); // durasi scroll 700ms
      }
    }
  };

  return (
    <nav className="bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center absolute left-0 top-1/2 -translate-y-1/2 pl-0">
            <img src="/kana.png" alt="KANA Logo" className="w-10 h-10" />
            <span className="ml-2 text-xl font-bold text-gray-800">KANA</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.name, item.href);
                  }}
                  className={`relative px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 group ${
                    activeItem === item.name
                      ? "text-[#4EC0E6]"
                      : "text-gray-700 hover:text-[#4EC0E6]"
                  }`}
                >
                  {item.name}
                  {/* Underline effect */}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#4EC0E6] transform origin-left transition-transform duration-200 ${
                      activeItem === item.name
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              type="button"
              className="bg-[#4EC0E6] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.name, item.href);
              }}
              className={`block px-3 py-2 text-base font-medium capitalize transition-colors duration-200 ${
                activeItem === item.name
                  ? "text-[#4EC0E6] border-l-4 border-[#4EC0E6] bg-[#4EC0E6]/5"
                  : "text-gray-700 hover:text-[#4EC0E6] hover:bg-gray-50"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
