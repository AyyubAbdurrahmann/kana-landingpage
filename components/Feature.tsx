"use client";

import { Card, CardContent } from "./ui/Card";
import {
  Upload,
  Target,
  Brain,
  Book,
  Settings,
  BarChart2,
  Clock as ClockIcon,
} from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function EverythingSection() {
  // Define items array first
  const items = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Nano Learning",
      desc: "Materi dipecah menjadi bagian-bagian kecil yang mudah dicerna, sehingga bisa dipelajari kapan saja dan di mana saja.",
      bgColor: "bg-[#87CEEB]",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Adaptive Learning",
      desc: "Tingkat kesulitan, jenis soal, dan rekomendasi belajar disesuaikan secara otomatis untuk kebutuhan unik setiap siswa.",
      bgColor: "bg-[#87CEEB]",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Gamified Experience",
      desc: "Elemen interaktif dan permainan dirancang untuk membuat belajar lebih menyenangkan dan menjaga motivasi siswa tetap tinggi.",
      bgColor: "bg-[#87CEEB]",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analitik Progres Siswa",
      desc: "Guru dapat memantau perkembangan siswa secara menyeluruh dan mendalam, memberikan intervensi yang tepat waktu.",
      bgColor: "bg-[#87CEEB]",
    },
  ];

  // Call hooks at the top level for each card
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardAnimation1 = useScrollAnimation({ threshold: 0.2 });
  const cardAnimation2 = useScrollAnimation({ threshold: 0.2 });
  const cardAnimation3 = useScrollAnimation({ threshold: 0.2 });
  const cardAnimation4 = useScrollAnimation({ threshold: 0.2 });

  // Create array of animations after calling hooks
  const cardAnimations = [
    cardAnimation1,
    cardAnimation2,
    cardAnimation3,
    cardAnimation4,
  ];

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
            <span className="text-[#000000]">Fitur </span>
            <span className="text-[#4EC0E6]">Unggulan</span>
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
                <CardContent className="p-6 text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${item.bgColor} group-hover:scale-110 transition-all duration-300`}
                    >
                      {item.icon}
                    </div>
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
