"use client";

import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Image from "next/image";

export default function WhyChooseKana() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.2 });
  const imageAnimation = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    "Belajar singkat tapi konsisten berkat Nano Learning",
    "Materi otomatis disesuaikan dengan kebutuhan setiap siswa lewat Adaptive Learning",
    "Lebih seru dengan pengalaman gamifikasi yang membuat belajar terasa seperti bermain",
    "Mudah digunakan oleh guru, menarik bagi siswa",
    "Aman, nyaman, dan ramah anak",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Header with animation */}
            <div
              ref={headerAnimation.elementRef}
              className={`scroll-animate ${
                headerAnimation.isVisible ? "visible" : ""
              }`}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-[#000000]">Mengapa </span>
                <span className="text-[#4EC0E6]">KANA? </span>
              </h2>
            
            </div>

            {/* Benefits List with animation */}
            <div
              ref={benefitsAnimation.elementRef}
              className={`space-y-4 scroll-animate-left ${
                benefitsAnimation.isVisible ? "visible" : ""
              }`}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 stagger-${index + 1}`}
                >
                  <CheckCircle className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with animation */}
          <div
            ref={imageAnimation.elementRef}
            className={`flex justify-center scroll-animate-right ${
              imageAnimation.isVisible ? "visible" : ""
            }`}
          >
            <Image
              src="/kanaa.png"
              alt="KANA"
              width={300} // wajib ada width
              height={300} // wajib ada height
              className="max-w-xs w-full h-auto"
              priority // opsional: buat gambar utama
            />
          </div>
        </div>
      </div>
    </section>
  );
}
