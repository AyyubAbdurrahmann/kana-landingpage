import { useEffect, useRef } from "react";

// Type definition for Lottie animation instance
interface LottieAnimationItem {
  destroy: () => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
  setSpeed: (speed: number) => void;
  setDirection: (direction: number) => void;
  goToAndStop: (value: number, isFrame?: boolean) => void;
  goToAndPlay: (value: number, isFrame?: boolean) => void;
}

// Type definition for Lottie module
interface LottieModule {
  default: {
    loadAnimation: (params: {
      container: HTMLElement;
      renderer: "svg" | "canvas" | "html";
      loop: boolean;
      autoplay: boolean;
      path: string;
    }) => LottieAnimationItem;
  };
}

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottieAnimation({
  src,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationInstance: LottieAnimationItem | null = null;

    const loadLottie = async () => {
      try {
        // Dynamically import lottie-web with proper typing
        const lottie = (await import("lottie-web")) as LottieModule;

        if (containerRef.current) {
          animationInstance = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop,
            autoplay,
            path: src,
          });
        }
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
        // Fallback: show a beautiful educational illustration
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-gradient-to-br from-kana-light via-white to-kana-accent/20 rounded-3xl relative overflow-hidden">
              <!-- Background Pattern -->
              <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%252387CEEB%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
              
              <div class="text-center relative z-10">
                <!-- Main Icon -->
                <div class="w-32 h-32 bg-gradient-to-br from-kana-primary to-kana-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                
                <!-- Title -->
                <h3 class="text-2xl font-bold text-kana-primary-dark mb-3">Kuis Otomatis dari Materi</h3>
                <p class="text-gray-600 mb-6 max-w-sm">Upload dokumen apapun, dapatkan kuis siap pakai. Hemat waktu dan tenaga Anda.</p>
                
                <!-- Feature Icons -->
                <div class="flex justify-center space-x-4">
                  <div class="w-10 h-10 bg-kana-accent/20 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-kana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                  </div>
                  <div class="w-10 h-10 bg-kana-primary/20 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-kana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div class="w-10 h-10 bg-kana-accent/20 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-kana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute top-8 right-8 w-6 h-6 bg-kana-accent/30 rounded-full animate-pulse"></div>
              <div class="absolute bottom-8 left-8 w-4 h-4 bg-kana-primary/30 rounded-full animate-pulse delay-1000"></div>
              <div class="absolute top-1/3 left-6 w-8 h-8 bg-gradient-to-br from-kana-primary/20 to-kana-accent/20 rounded-full animate-bounce delay-500"></div>
            </div>
          `;
        }
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [src, loop, autoplay]);

  return <div ref={containerRef} className={`lottie-container ${className}`} />;
}
  