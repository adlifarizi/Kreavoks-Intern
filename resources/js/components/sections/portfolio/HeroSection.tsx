import { forwardRef } from "react";

const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="container mx-auto px-6 md:px-12 lg:px-16 py-12 flex justify-center mt-8"
    >
      <div className="w-full rounded-[40px] overflow-hidden relative flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-50 px-4 lg:px-16 py-4 md:py-8 shadow-lg">
        {/* Left: Text */}
        <div className="flex-[2] flex flex-col justify-center items-start z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Portofolio Karya Terbaik Kami
          </h1>
          <p className="text-md md:text-lg text-blue-50 max-w-xl">
            Lihat berbagai proyek yang telah kami kerjakan untuk klien dari berbagai industri. 
            Setiap proyek dirancang dengan perhatian terhadap detail dan fokus pada kebutuhan pengguna.
          </p>
        </div>

        {/* Right: Image */}
        <div className="hidden flex-1 md:flex justify-end items-center z-10">
          <img
            src="/images/portfolio-hero-people.png"
            alt="Portfolio Hero"
            className="object-cover md:-mb-10 h-full"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-30 top-10 w-1/2 h-1/5 rotate-[50deg] bg-yellow-300 rounded-full blur-xl"></div>
          <div className="absolute right-0 bottom-10 w-1/3 h-1/5 rotate-[15deg] bg-yellow-300 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;