"use client";
import React from "react";

import {
  Sparkles,
 
} from "lucide-react";
import { LottieAnimation } from "./LottieAnimation";

export default function HeroSection() {
  return (
    <section id="home" className="relative py-20 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#F7FBFF]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%252387CEEB%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#7dd3fc]/20 to-[#87CEEB]/20 rounded-full border border-[#7dd3fc]/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#87CEEB] mr-2 animate-pulse" />
                <span className="text-[#2D3E50] font-medium">
                  Solusi Pembelajaran Cerdas
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#000000] leading-tight">
                Belajar Lebih Singkat,
                <span className="block bg-gradient-to-r from-[#87CEEB] via-[#7dd3fc] to-[#87CEEB] bg-clip-text text-transparent animate-pulse mt-2">
                  Lebih Seru, Lebih Konsisten
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                <b>Kana </b>mengubah materi pelajaran menjadi kuis interaktif
                dan modul ringkas (nano learning). Dengan Adaptive Learning,
                setiap siswa mendapat pengalaman personal sesuai kebutuhannya,
                sementara gamifikasi menjaga motivasi tetap tinggi.
              </p>
            </div>
          </div>

          {/* Animation Section */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-[500px] rounded-3xl shadow-2xl ring-1 ring-[#87CEEB]/10 overflow-hidden bg-gradient-to-br from-[#f0f8ff] via-white to-[#7dd3fc]/10">
                <LottieAnimation
                  src="https://assets3.lottiefiles.com/packages/lf20_DMgKk1.json"
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#87CEEB]/20 via-transparent to-[#7dd3fc]/10 rounded-3xl pointer-events-none"></div>
            </div>

            {/* Animated Circles */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#7dd3fc]/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#87CEEB]/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-[#87CEEB] to-[#7dd3fc] rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
