import { Card, CardContent } from "./ui/Card";
import { Eye, Heart } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-white to-[#f0f8ff]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6">
            <span className="font-bold text-[#000000]">Visi & </span>
            <span className="font-bold text-[#4EC0E6]">Misi Kami </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Memberdayakan para pendidik di seluruh dunia dengan teknologi AI
            mutakhir untuk menciptakan pengalaman belajar yang lebih menarik dan
            efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-[#87CEEB]/5 to-[#7dd3fc]/5 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#87CEEB] to-[#7dd3fc] rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000]">
                  Visi Kami
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Merevolusi pendidikan dengan menghadirkan pembelajaran
                berkualitas tinggi dan personal yang dapat diakses oleh setiap
                siswa dan guru di seluruh dunia melalui teknologi AI yang
                inovatif.
              </p>

            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-[#7dd3fc]/5 to-[#87CEEB]/5 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7dd3fc] to-[#87CEEB] rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000]">
                  Misi Kami
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Merevolusi pendidikan dengan menghadirkan pembelajaran
                berkualitas tinggi dan personal yang dapat diakses oleh setiap
                siswa dan guru di seluruh dunia melalui teknologi AI yang
                inovatif.
              </p>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
