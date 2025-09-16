"use client";
import { Card, CardContent } from "./ui/Card";
import { Eye, Heart } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function VisionMissionSection() {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const visionAnimation = useScrollAnimation({ threshold: 0.2 });
  const missionAnimation = useScrollAnimation({ threshold: 0.2 });

  // Debug logs
  console.log("Header visible:", headerAnimation.isVisible);
  console.log("Vision visible:", visionAnimation.isVisible);
  console.log("Mission visible:", missionAnimation.isVisible);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-[#f0f8ff]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <div
          ref={headerAnimation.elementRef}
          className={`text-center mb-12 sm:mb-16 scroll-animate ${
            headerAnimation.isVisible ? "visible" : ""
          }`}
          style={{
            // Inline styles untuk debugging
            opacity: headerAnimation.isVisible ? 1 : 0,
            transform: headerAnimation.isVisible
              ? "translateY(0)"
              : "translateY(50px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            <span className="font-bold text-[#000000]">Visi & </span>
            <span className="font-bold text-[#4EC0E6]">Misi Kami </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Memberdayakan para pendidik di seluruh dunia dengan teknologi AI
            mutakhir untuk menciptakan pengalaman belajar yang lebih menarik dan
            efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Vision Card */}
          <div
            ref={visionAnimation.elementRef}
            className={`scroll-animate-left stagger-1 h-full ${
              visionAnimation.isVisible ? "visible" : ""
            }`}
            style={{
              // Inline styles untuk debugging
              opacity: visionAnimation.isVisible ? 1 : 0,
              transform: visionAnimation.isVisible
                ? "translateX(0)"
                : "translateX(-50px)",
              transition: "all 0.8s ease-out",
              transitionDelay: "0.1s",
            }}
          >
            <Card className="h-full p-6 sm:p-8 border-0 shadow-xl bg-gradient-to-br from-[#87CEEB]/5 to-[#7dd3fc]/5 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#87CEEB] to-[#7dd3fc] rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000000]">
                    Visi Kami
                  </h3>
                </div>
                <div className="flex-1 flex items-start">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Merevolusi pendidikan dengan menghadirkan pembelajaran yang
                    singkat, personal, dan adaptif bagi setiap siswa di seluruh
                    dunia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission Card */}
          <div
            ref={missionAnimation.elementRef}
            className={`scroll-animate-right stagger-2 h-full ${
              missionAnimation.isVisible ? "visible" : ""
            }`}
            style={{
              // Inline styles untuk debugging
              opacity: missionAnimation.isVisible ? 1 : 0,
              transform: missionAnimation.isVisible
                ? "translateX(0)"
                : "translateX(50px)",
              transition: "all 0.8s ease-out",
              transitionDelay: "0.2s",
            }}
          >
            <Card className="h-full p-6 sm:p-8 border-0 shadow-xl bg-gradient-to-br from-[#7dd3fc]/5 to-[#87CEEB]/5 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#7dd3fc] to-[#87CEEB] rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000000]">
                    Misi Kami
                  </h3>
                </div>
                <div className="flex-1 flex items-start">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Memberdayakan guru dan siswa dengan teknologi AI yang
                    menghadirkan konten pembelajaran yang cerdas, interaktif, dan
                    gamified untuk meningkatkan motivasi serta hasil belajar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}