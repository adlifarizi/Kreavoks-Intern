import { forwardRef } from "react";

interface ProgramHeroProps {
    activeTab: HeroTab;
}

const heroData = {
    courses: {
        title: "Temukan Jalan Karirmu di Dunia Digital",
        desc: "Pilih dari berbagai program pelatihan dan event yang dirancang untuk membantu Anda menguasai keterampilan digital yang relevan dengan industri saat ini.",
        image: "/images/program/course/hero-courses-main.png",
        icons: [
            {
                src: "/images/program/course/hero-icon-play.svg",
                className: "absolute left-24 top-20 w-20 h-20 animate-wander-1",
            },
            {
                src: "/images/program/course/hero-icon-creative.svg",
                className: "absolute left-28 bottom-10 w-20 h-20 animate-wander-1",
            },
            {
                src: "/images/program/course/hero-icon-network.svg",
                className: "absolute right-0 bottom-0 w-20 h-20 animate-wander-1",
            },
        ],
        gradient: "from-blue-600 via-blue-500 to-yellow-200",
    },
    events: {
        title: "Kembangkan Skill dan Portofoliomu",
        desc: "Siap kembangkan skill dan portofolio secara praktis? Dapatkan bimbingan intensif dari para ahli di bidangnya dalam program online yang dirancang untuk kesuksesan Anda.",
        image: "/images/program/event/hero-events-main.png",
        icons: [
            {
                src: "/images/program/event/hero-icon-camera.svg",
                className: "absolute -left-5 top-20 w-38 h-38 animate-wander-1",
            },
            {
                src: "/images/program/event/hero-icon-calendar.svg",
                className: "absolute right-5 top-28 w-24 h-24 animate-wander-1",
            },
            {
                src: "/images/program/event/hero-icon-button.svg",
                className: "absolute right-5 -bottom-20 w-42 h-42",
            },
            {
                src: "/images/program/event/hero-icon-pointer.svg",
                className: "absolute right-2 -bottom-8 w-8 h-10",
            },
        ],
        gradient: "from-blue-600 via-blue-500 to-blue-50",
    },
    bootcamp: {
        title: "Kembangkan Skill dan Portofoliomu",
        desc: "Siap kembangkan skill dan portofolio secara praktis? Dapatkan bimbingan intensif dari para ahli di bidangnya dalam program online yang dirancang untuk kesuksesan Anda.",
        image: "/images/program/event/hero-events-main.png",
        icons: [
            {
                src: "/images/program/event/hero-icon-camera.svg",
                className: "absolute -left-5 top-20 w-38 h-38 animate-wander-1",
            },
            {
                src: "/images/program/event/hero-icon-calendar.svg",
                className: "absolute right-5 top-28 w-24 h-24 animate-wander-1",
            },
            {
                src: "/images/program/course/hero-icon-network.svg",
                className: "absolute right-0 bottom-0 w-20 h-20 animate-wander-1",
            },
        ],
        gradient: "from-blue-600 via-blue-500 to-yellow-200",
    },
};

const ProgramHero = forwardRef<HTMLDivElement, ProgramHeroProps>(
    ({ activeTab }, ref) => {
        const currentHero = heroData[activeTab];

        return (
            <section
                ref={ref}
                className="container mx-auto px-6 md:px-12 lg:px-16 py-12 flex justify-center mt-8"
            >
                <div
                    className={`w-full rounded-[40px] overflow-hidden relative flex flex-col md:flex-row items-center bg-gradient-to-br ${currentHero.gradient} px-4 lg:px-16 py-8 shadow-lg transform transition-all duration-500 hover:scale-[1.01] hover:shadow-xl group`}
                >
                    {/* Left: Text */}
                    <div className="flex-[2] flex flex-col justify-center items-start z-10">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-2xl transform transition-transform duration-500 hover:translate-x-2">
                            {currentHero.title}
                        </h1>
                        <p className="text-md md:text-lg text-blue-50 max-w-2xl">
                            {currentHero.desc}
                        </p>
                    </div>

                    {/* Right: Main Image & Small Icons */}
                    <div className="relative flex-1 flex justify-center items-center z-10 min-h-[220px]">
                        <img
                            src={currentHero.image}
                            alt="Hero Main"
                            className="object-cover md:-mb-8 h-full max-h-[340px] group-hover:scale-105 transition-transform duration-500"
                        />
                        {currentHero.icons.map((icon, idx) => (
                            <img
                                key={idx}
                                src={icon.src}
                                alt=""
                                className={
                                    icon.className + " pointer-events-none"
                                }
                            />
                        ))}
                    </div>

                    {/* Decorative elements */}
                    {activeTab === "events" && (
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -right-30 top-10 w-1/2 h-1/5 rotate-[50deg] bg-yellow-300 rounded-full blur-xl"></div>
                            <div className="absolute right-0 bottom-10 w-1/3 h-1/5 rotate-[15deg] bg-yellow-300 rounded-full blur-xl"></div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
);

export type HeroTab = "courses" | "events" | "bootcamp";
export default ProgramHero;
