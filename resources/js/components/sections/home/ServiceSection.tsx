import { forwardRef } from "react";
import DetailButton from "@/components/buttons/DetailButton";

const ServiceSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section
            ref={ref}
            className="relative grid grid-cols-1 md:items-start justify-between gap-x-8 py-10 opacity-0"
        >
            {/* Background image */}
            <img
                src="images/backgrounds/ServiceBg.png"
                className="w-full absolute top-0 z-0"
                alt="Service Background"
            />

            {/* Main container */}
            <div className="container mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:items-start">
                {/* Left Content */}
                <div className="relative px-6 md:px-12 lg:px-16 flex flex-col items-start gap-6">
                    <div className="px-4 py-1.5 bg-blue-50 rounded-full text-blue-500 font-semibold">
                        Service
                    </div>
                    <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold leading-tight transition-transform duration-500 hover:translate-x-2">
                        Layanan Kami Dapat Jadi Solusi Masalah Kamu!
                    </h2>
                    <p className="text-gray-600 max-w-xl">
                        Kami menawarkan solusi kreatif dan teknologi untuk
                        mendukung kebutuhan bisnis dan pengembangan skill Anda.
                        Mulai dari jasa pembuatan website profesional, desain
                        grafis & UI yang menarik, hingga pelatihan skill digital
                        untuk mempersiapkan Anda menghadapi era teknologi yang
                        terus berkembang.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {[
                            "Profesional dan Terpercaya",
                            "Pendekatan Fleksibel dan Adaptif",
                            "Materi yang Sesuai dengan Kebutuhan Industri",
                            "Dedikasi untuk Solusi Berkualitas",
                        ].map((text, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300"
                            >
                                <img
                                    src="images/icons/blue-check.svg"
                                    alt="Check"
                                    className="mt-1"
                                />
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative px-6 md:px-12 lg:px-16 py-8 h-full grid grid-cols-1 sm:grid-cols-2 justify-between gap-6">
                    {/* First Column */}
                    <div className="flex flex-col justify-between h-full gap-6">
                        {/* Card 1 */}
                        <div className="flex flex-grow">
                            <div className="relative w-full h-full min-h-64 drop-shadow-[0_2px_2px_rgba(255,255,255,0.2)] rounded-b-2xl rounded-tr-2xl transition-transform duration-500 hover:scale-105 hover:shadow-lg">
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="grid grid-cols-2">
                                        <div className="flex space-x-1 p-2 bg-white/60 rounded-t-2xl backdrop-blur-sm shadow-[0_-1px_4px_rgba(0,0,0,0.1)]">
                                            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                                            <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full" />
                                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                                        </div>
                                    </div>

                                    <div className="shadow-md flex-1 flex flex-col justify-end p-6 pt-10 bg-white/60 backdrop-blur-sm rounded-b-2xl rounded-tr-2xl">
                                        <div className="flex items-center justify-center h-14 w-14 p-3 rounded-full bg-blue-50 mb-3">
                                            <img
                                                src="images/icons/JasaPembuatanWebsite.svg"
                                                className="size-8"
                                                alt="Website"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <p className="font-bold text-lg">
                                                Jasa pembuatan Website
                                                Profesional
                                            </p>
                                            <DetailButton href="/layanan/website" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative flex flex-col rounded-2xl bg-white/60 backdrop-blur-sm shadow-md p-6 transition-transform duration-500 hover:scale-105 hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-50">
                                    <img
                                        src="images/icons/JasaDesainGrafis.svg"
                                        className="size-8"
                                        alt="Design"
                                    />
                                </div>
                                <p className="font-bold text-lg">
                                    Desain Grafis & User Interface
                                </p>
                            </div>
                            <DetailButton
                                href="/layanan/desain"
                                className="self-start"
                            />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col">
                        <div className="relative flex flex-grow">
                            <div className="relative w-full h-full min-h-64 rounded-b-2xl rounded-tr-2xl transition-transform duration-500 hover:scale-105 hover:shadow-lg">
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="grid grid-cols-2">
                                        <div className="flex space-x-1 p-2 bg-blue-500 rounded-t-2xl">
                                            <div className="w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                                            <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full" />
                                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                        </div>
                                    </div>

                                    <div className="shadow-md flex-3/4 flex flex-col justify-end bg-[url(/images/service-people.png)] bg-cover bg-right-top bg-no-repeat rounded-b-2xl rounded-tr-2xl bg-blue-500 p-6 pt-10">
                                        <div className="w-fit z-10 mb-4">
                                            <div className="flex items-center justify-center h-14 w-14 p-3 rounded-full bg-blue-50">
                                                <img
                                                    src="images/icons/JasaPelatihanSkill.svg"
                                                    className="size-8"
                                                    alt="Training"
                                                />
                                            </div>
                                        </div>
                                        <p className="font-bold text-lg text-white z-10">
                                            Program Pelatihan Skill Digital
                                        </p>
                                        <DetailButton
                                            href="/layanan/pelatihan"
                                            className="mt-2 text-white hover:text-blue-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ServiceSection;
