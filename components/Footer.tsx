"use client";

import React from "react";
import Image from "next/image";

// Fungsi smooth scroll
function scrollToSection(targetId: string, duration = 700) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;
  const yOffset = -70; // sesuaikan dengan tinggi navbar
  const targetY =
    targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(
      0,
      startY +
        diff *
          (percent < 0.5
            ? 2 * percent * percent
            : -1 + (4 - 2 * percent) * percent)
    );
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-400 to-blue-400 text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Mobile Layout - Stack Vertically */}
          <div className="block lg:hidden text-center space-y-8">
            {/* Logo and Brand */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Image
                  src="/kana.png"
                  alt="KANA Logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <h2 className="text-xl sm:text-2xl font-bold">KANA</h2>
              </div>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed px-4">
              Platform nano learning berbasis AI yang menghadirkan pembelajaran adaptif dan gamified. Belajar jadi lebih singkat, interaktif, dan menyenangkan.
              </p>

              <div className="flex items-center justify-center space-x-2">
                <Image
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{
                    filter:
                      "invert(36%) sepia(99%) saturate(7492%) hue-rotate(316deg) brightness(97%) contrast(101%)",
                  }}
                />
                <a
                  href="https://www.instagram.com/app.kana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:underline"
                >
                  @app.kana
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home", 700);
                  }}
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  Beranda
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about", 700);
                  }}
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  Tentang
                </a>
                <a
                  href="#howitworks"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("howitworks", 700);
                  }}
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  Cara Kerja
                </a>
                <a
                  href="#feature"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("feature", 700);
                  }}
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  Fitur
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between">
              {/* Left Column - Brand Info */}
              <div className="flex-1 space-y-6">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/kana.png"
                    alt="KANA Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                  <h2 className="text-2xl font-bold">KANA</h2>
                </div>

                {/* Description */}
                <p className="text-white/90 text-lg leading-relaxed max-w-md">
                   Platform nano learning berbasis AI yang menghadirkan pembelajaran adaptif dan gamified. Belajar jadi lebih singkat, interaktif, dan menyenangkan.
                </p>

                {/* Social Media */}
                <div className="flex items-center space-x-2">
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                    style={{
                      filter:
                        "invert(36%) sepia(99%) saturate(7492%) hue-rotate(316deg) brightness(97%) contrast(101%)",
                    }}
                  />
                  <a
                    href="https://www.instagram.com/app.kana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:underline"
                  >
                    @app.kana
                  </a>
                </div>
              </div>

              {/* Right Column - Quick Links */}
              <div className="flex-shrink-0">
                <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("home", 700);
                      }}
                      className="text-white/90 hover:text-white transition-colors duration-200 text-lg block"
                    >
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about", 700);
                      }}
                      className="text-white/90 hover:text-white transition-colors duration-200 text-lg block"
                    >
                      Visi Misi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#howitworks"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("howitworks", 700);
                      }}
                      className="text-white/90 hover:text-white transition-colors duration-200 text-lg block"
                    >
                      Cara Kerja
                    </a>
                  </li>
                  <li>
                    <a
                      href="#feature"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("feature", 700);
                      }}
                      className="text-white/90 hover:text-white transition-colors duration-200 text-lg block"
                    >
                      Fitur
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Bar */}
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            {/* Copyright */}
            <div className="text-white/80 text-xs sm:text-sm">
              © 2025 Kana | All Rights Reserved
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Syarat dan Ketentuan
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Bantuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
