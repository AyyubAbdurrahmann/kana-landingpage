"use client";

import { Card, CardContent } from "./ui/Card";
import { Upload, Brain, Target, BarChart3 } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Unggah Dokumen Anda",
      description:
        "Unggah atau tarik dokumen Anda langsung ke dalam platform kami dengan mudah.",
      icon: <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    },
    {
      step: "02",
      title: "AI Memproses Konten",
      description:
        "Teknologi AI kami menganalisis materi dan menyoroti konsep pembelajaran utama secara otomatis.",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    },
    {
      step: "03",
      title: "Buat Kuis Interaktif",
      description:
        "Hasilkan kuis siap pakai dengan berbagai tipe pertanyaan dan tingkat kesulitan yang dapat disesuaikan.",
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    },
    {
      step: "04",
      title: "Pantau Progres Siswa",
      description:
        "Lacak perkembangan belajar siswa melalui analitik yang detail serta wawasan performa yang mudah dipahami.",
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
    },
  ];

  return (
    <section
      id="howitworks"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#2D3E50] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
            <span className="text-[#000000] ">Cara Kerja </span>
            <span className="text-[#4EC0E6]">Kana</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#000000] max-w-3xl mx-auto leading-relaxed opacity-90 px-4 animate-fade-in-up animation-delay-200">
            Nikmati kemudahan belajar dengan AI dalam 4 langkah sederhana.
            Mengajar jadi lebih cepat dan efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative h-full group">
              {/* Flow arrow connecting cards - only show on large screens */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 w-16 h-5 z-20 animate-pulse"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='20' viewBox='0 0 64 20'%3E%3Cpath d='M0 10 L54 10 L44 5 L54 10 L44 15 Z' fill='%234EC0E6' /%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              )}

              {/* Flow arrow for mobile/tablet - vertical */}
              {i < steps.length - 1 && (
                <div
                  className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-5 h-12 z-20 animate-pulse"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='48' viewBox='0 0 20 48'%3E%3Cpath d='M10 0 L10 38 L5 28 L10 38 L15 28 Z' fill='%234EC0E6' /%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              )}

              <Card
                className="bg-[#F7FBFF] border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out relative z-10 h-full flex flex-col animate-fade-in-up group-hover:bg-gradient-to-br group-hover:from-[#F7FBFF] group-hover:to-[#E3F2FD]"
                style={{
                  borderTop: "4px solid #4EC0E6",
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                  {/* Icon Container - Fixed centering issues */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out">
                    <div
                      className="w-full h-full rounded-2xl flex items-center justify-center animate-gradient-shift"
                      style={{
                        background:
                          "linear-gradient(135deg, #7dd3fc, #87CEEB, #4EC0E6)",
                        backgroundSize: "200% 200%",
                      }}
                    >
                      {s.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7dd3fc] mb-2 flex-shrink-0">
                    {s.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#000000] flex-shrink-0 group-hover:text-[#4EC0E6] transition-colors duration-300">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed opacity-90 flex-grow flex items-center group-hover:opacity-100 transition-opacity duration-300">
                    {s.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounce-subtle {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .group:nth-child(1) .animate-bounce-subtle {
          animation-delay: 0s;
        }

        .group:nth-child(2) .animate-bounce-subtle {
          animation-delay: 0.5s;
        }

        .group:nth-child(3) .animate-bounce-subtle {
          animation-delay: 1s;
        }

        .group:nth-child(4) .animate-bounce-subtle {
          animation-delay: 1.5s;
        }

        /* Responsive icon positioning fixes */
        @media (max-width: 640px) {
          .group .flex.items-center.justify-center {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
