import { CheckCircle } from "lucide-react";

export default function WhyChooseKana() {
  const benefits = [
    "Lacak progress siswa dan analitik performa",
    "Hasilkan kuis interaktif dari berbagai jenis dokumen dengan mudah.",
    "Dirancang khusus untuk usia 6–12 tahun agar pengalaman belajar lebih menyenangkan.",
    "AI kami menyesuaikan materi agar lebih efektif untuk proses pembelajaran.",
    "Menyediakan ruang belajar yang terlindungi, nyaman, dan terpercaya.",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#000000]">Kenapa Harus </span>
              <span className="text-[#4EC0E6]">KANA? </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ribuan pendidik telah meningkatkan metode pengajaran mereka dengan
              bantuan platform AI kami — kini giliran Anda
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="flex justify-center">
            <img
              src="/kanaa.png"
              alt="KANA"
              className="max-w-xs w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
