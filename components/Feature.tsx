"use client";

import { Card, CardContent } from "./ui/Card";
import { Upload, Target, Brain, Clock as ClockIcon } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function EverythingSection() {
  // Define items array first
  const items = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Unggah Dokumen dengan Mudah",
      desc: "Tidak perlu keahlian teknis. Cukup seret dokumen Anda dan biarkan KANA menangani sisanya dengan pemrosesan cerdas.",
      bgColor: "bg-[#87CEEB]",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Kuis Otomatis dengan AI",
      desc: "Unggah dokumen apa saja dan saksikan AI kami langsung membuat kuis interaktif yang menarik sesuai konten Anda.",
      bgColor: "bg-[#87CEEB]",
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Kuis Siap Pakai dalam Hitungan Menit",
      desc: "Dari dokumen ke kuis interaktif dalam hitungan menit, bukan jam. Hemat waktu dan fokus pada yang terpenting - mengajar.",
      bgColor: "bg-[#87CEEB]",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Analitik Progres Siswa",
      desc: "Pantau progres siswa secara real-time dengan analitik detail dan wawasan pembelajaran yang dipersonalisasi.",
      bgColor: "bg-[#87CEEB]",
    },
  ];

  // Initialize cardAnimations after items
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardAnimations = items.map(() => useScrollAnimation({ threshold: 0.2 }));

  return (
    <section id="feature" className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <div
          ref={headerAnimation.elementRef}
          className={`text-center mb-12 scroll-animate ${
            headerAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#000000]">Solusi Lengkap Untuk </span>
            <span className="text-[#4EC0E6]">Kesuksesan Anda</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Semua fitur penting untuk membantu guru membuat, mengelola, dan
            menganalisis pembelajaran secara efisien—didukung AI yang andal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={cardAnimations[idx].elementRef}
              className={`scroll-animate-scale stagger-${idx + 1} ${
                cardAnimations[idx].isVisible ? "visible" : ""
              }`}
            >
              <Card className="group bg-white border-0 border-l-4 border-l-[#4EC0E6] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white ${item.bgColor} group-hover:scale-110 transition-all duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}