"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "beranda", href: "#home" },
    { name: "tentang", href: "#about" },
    { name: "cara kerja", href: "#howitworks" },
    { name: "fitur", href: "#feature" },
  ];

  // Fungsi untuk mendeteksi section mana yang sedang aktif berdasarkan scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        name: item.name,
        element: document.getElementById(item.href.replace("#", "")),
      }));

      const scrollPosition = window.scrollY + 100; // offset untuk navbar

      // Cari section yang sedang aktif
      let currentSection = sections[0].name; // default ke beranda

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = section.name;
            break;
          }
        }
      }

      setActiveItem(currentSection);
    };

    // Jalankan handleScroll saat component mount
    handleScroll();

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener saat component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (itemName: string, href: string) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false); // Tutup mobile menu setelah klik

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const yOffset = -70; // adjust if navbar height changes
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        scrollToSection({ targetY: y, duration: 700 }); // durasi scroll 700ms
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/kana.png"
              alt="KANA Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">KANA</span>
          </div>

          {/* Navigation Items - Desktop */}
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
          <div className="md:hidden ml-auto">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="bg-[#4EC0E6] inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#3aa8cc] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {/* Simple SVG Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop untuk mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar - slide from right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <Image
              src="/kana.png"
              alt="KANA Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="ml-2 text-lg font-bold text-gray-800">KANA</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Sidebar Navigation */}
        <div className="px-4 py-6">
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.name, item.href);
                }}
                className={`group flex items-center px-4 py-3 text-base font-medium capitalize rounded-lg transition-all duration-200 ${
                  activeItem === item.name
                    ? "text-[#4EC0E6] bg-[#4EC0E6]/10 border-l-4 border-[#4EC0E6]"
                    : "text-gray-700 hover:text-[#4EC0E6] hover:bg-gray-50"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "slideInRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <span className="flex-1">{item.name}</span>
                {activeItem === item.name && (
                  <svg
                    className="w-5 h-5 text-[#4EC0E6]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer (optional) */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="text-center text-sm text-gray-500">
            © 2024 KANA. All rights reserved.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
