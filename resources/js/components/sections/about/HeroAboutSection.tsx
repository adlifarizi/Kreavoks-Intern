import { forwardRef } from "react";

const HeroAboutSection = forwardRef<HTMLDivElement>((_, ref) => (
    <section
        ref={ref}
        className="relative py-12 md:py-20 bg-[#F4F8FE] overflow-hidden opacity-0"
    >
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Left: Text */}
                <div className="flex-1">
                    <p className="text-blue-500 font-bold text-lg mb-2">
                        Tentang Kreavoks
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight transition-transform duration-500 hover:translate-x-2">
                        Apa itu <br className="hidden md:block" /> Kreavoks?
                    </h1>
                    <p className="text-base md:text-lg text-gray-700">
                        Kami adalah agensi digital yang berdedikasi
                        untuk membantu bisnis dan individu
                        mengembangkan kehadiran digital mereka dan
                        meningkatkan keterampilan teknologi untuk
                        masa depan.
                    </p>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/images/sv.png"
                        alt="Kreavoks Office"
                        className="w-full max-w-xl rounded-2xl object-cover shadow-md"
                    />
                </div>
            </div>
        </div>
        {/* Background accent shape */}
        <div className="hidden lg:block absolute left-0 top-0 w-2/3 h-full rounded-br-[300px] bg-blue-50 -z-10"></div>
    </section>
));

export default HeroAboutSection;