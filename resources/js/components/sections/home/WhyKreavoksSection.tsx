import { forwardRef } from "react";
import {
    Fingerprint,
    ShieldUser,
    UsersRound,
    FileTerminal,
    SmilePlus,
} from "lucide-react";

const WhyKreavoksSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className="w-full py-12">
            <div className="container mx-auto px-4 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-20 xl:gap-10 items-start">
                {/* Left Side */}
                <div className="flex-1 max-w-[480px] flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-2 mb-4 md:mb-6">
                        <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-blue-500 to-blue-300/70 bg-clip-text text-transparent font-semibold leading-tight transition-transform duration-500 hover:translate-x-2">
                            Kenapa Harus Kreavoks?
                        </h2>
                        <p className="text-gray-600 text-xl max-w-xl">
                            Nih 5 alasan kenapa kreavoks tempat terbaik buat
                            solusi digitalmu!
                        </p>
                    </div>
                    <div className="hover:scale-105 transition-transform duration-500 shadow-lg">
                        <img
                            src="/images/why-people.png"
                            alt="Kenapa Kreavoks"
                            className="object-cover w-full rounded-xl"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="p-4 flex-1 flex flex-col gap-1">
                    {[
                        {
                            icon: (
                                <Fingerprint className="w-12 h-12 group-hover:text-blue-500" />
                            ),
                            title: "Solusi Digital Terpadu",
                            desc: "Layanan lengkap mulai dari desain, pengembangan, hingga strategi digital yang menyeluruh.",
                        },
                        {
                            icon: (
                                <ShieldUser className="w-12 h-12 group-hover:text-blue-500" />
                            ),
                            title: "Tim Profesional & Berpengalaman",
                            desc: "Didukung oleh tim ahli di berbagai bidang, Kreavoks siap mewujudkan ide-ide Anda menjadi kenyataan.",
                        },
                        {
                            icon: (
                                <UsersRound className="w-12 h-12 group-hover:text-blue-500" />
                            ),
                            title: "Pendekatan Kolaboratif",
                            desc: "Didukung oleh tim ahli di berbagai bidang, Kreavoks siap mewujudkan ide-ide Anda menjadi kenyataan.",
                        },
                        {
                            icon: (
                                <FileTerminal className="w-12 h-12 group-hover:text-blue-500" />
                            ),
                            title: "Pembelajaran Berbasis Proyek",
                            desc: "Pembelajaran yang melibatkan langsung dalam proyek nyata.",
                        },
                        {
                            icon: (
                                <SmilePlus className="w-12 h-12 group-hover:text-blue-500" />
                            ),
                            title: "Mengedepankan Kepuasan Klien",
                            desc: "Didukung oleh tim ahli di berbagai bidang, Kreavoks siap mewujudkan ide-ide Anda menjadi kenyataan.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center p-4 gap-6 shadow-sm rounded-lg group hover:bg-blue-50 border-b-4 border-transparent hover:border-blue-500 hover:scale-105 transition-transform duration-500"
                        >
                            <div className="w-14 h-14 flex items-center justify-center group-hover:text-blue-500">
                                {item.icon}
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-gray-800 text-xl md:text-2xl">
                                    {item.title}
                                </p>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default WhyKreavoksSection;
