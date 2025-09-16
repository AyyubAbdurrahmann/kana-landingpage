"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import { useModal } from "./utils/UseModals";
import {
  handleKanaDemoEmailWithCustomModal,
  type KanaDemoEmailParams,
} from "./utils/emailHandler";

interface NavItem {
  name: string;
  href: string;
}

interface ModalConfig {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
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

  // Modal state management
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    message: "",
  });
  const [modalResolve, setModalResolve] = useState<
    ((value: boolean) => void) | null
  >(null);

  const navItems: NavItem[] = [
    { name: "beranda", href: "#home" },
    { name: "Visi Misi", href: "#about" },
    { name: "cara kerja", href: "#howitworks" },
    { name: "fitur", href: "#feature" },
  ];

  // Custom modal handler
  const showCustomModal = (config: ModalConfig): Promise<boolean> => {
    return new Promise((resolve) => {
      setModalConfig(config);
      setModalResolve(() => resolve);
      openModal();
    });
  };

  const handleModalConfirm = () => {
    if (modalResolve) {
      modalResolve(true);
      setModalResolve(null);
    }
    closeModal();
  };

  const handleModalClose = () => {
    if (modalResolve) {
      modalResolve(false);
      setModalResolve(null);
    }
    closeModal();
  };

  // Fungsi untuk menangani klik button Daftar dengan modal custom
  const handleDaftarClick = () => {
    // Tutup mobile menu jika terbuka
    setIsMobileMenuOpen(false);

    // Contoh dengan custom modal config
    const customModalConfig = {
      title: "Demo Kana - Learning Management System",
      message: `Halo! Terima kasih telah tertarik dengan Kana LMS.

Kami sangat senang bisa membantu sekolah Anda mengoptimalkan proses pembelajaran dengan teknologi terdepan.`,
      confirmText: "ajukan demo sekarang",
      cancelText: "Nanti Saja",
      confirmVariant: "primary" as const,
      size: "md" as const,
      showIcon: true,
    };

    // Parameter untuk email (opsional)
    const emailParams: KanaDemoEmailParams = {
      schoolName: "Sekolah Anda", // Bisa diambil dari form atau state
      customMessage:
        "Kami tertarik dengan fitur nano learning dan ingin tahu lebih lanjut tentang implementasinya di sekolah kami.",
    };

    handleKanaDemoEmailWithCustomModal(
      showCustomModal,
      emailParams,
      customModalConfig
    );
  };

  // Icon untuk button daftar
  const UserPlusIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
      />
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        name: item.name,
        element: document.getElementById(item.href.replace("#", "")),
      }));

      const scrollPosition = window.scrollY + 100;
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (itemName: string, href: string) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const yOffset = -70;
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        scrollToSection({ targetY: y, duration: 700 });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* NAVBAR - SEKARANG FIXED DI PALING ATAS TANPA SPACE */}
      <nav className="bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] fixed top-0 left-0 right-0 z-50">
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

            {/* Daftar Button - Desktop */}
            <div className="hidden md:flex items-center">
              <Button
                variant="primary"
                size="md"
                onClick={handleDaftarClick}
                className="shadow-md"
              >
                Daftar Sekarang
              </Button>
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

        {/* Mobile Sidebar */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="mobile-menu"
        >
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

            {/* Centered Text for Mobile */}
            <div className="mt-4 text-center text-sm font-medium text-gray-800 md:hidden">
              Belajar Lebih Singkat, Lebih Seru, Lebih Konsisten
            </div>

            {/* Daftar Button - Mobile */}
            <div className="mt-6 px-4">
              <Button
                variant="primary"
                size="lg"
                fullWidth={true}
                onClick={handleDaftarClick}
                className="shadow-md"
                style={{
                  animationDelay: `${navItems.length * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "slideInRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="absolute bottom-6 left-4 right-4">
            <div className="text-center text-sm text-gray-500">
              © 2025 KANA. All rights reserved.
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

      {/* Custom Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmText={modalConfig.confirmText}
        cancelText={modalConfig.cancelText}
        confirmVariant={modalConfig.confirmVariant}
        size={modalConfig.size}
        showIcon={modalConfig.showIcon}
      />
    </>
  );
};

export default Navbar;
