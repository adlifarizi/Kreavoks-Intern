import { forwardRef } from "react";

const advantages = [
    {
        icon: <i className="fa-solid fa-code text-xl text-blue-500"></i>,
        bg: "bg-blue-500/10",
        title: "Teknologi Terkini",
        desc: "Kami selalu menggunakan teknologi terbaru dan terbaik untuk setiap proyek yang kami kerjakan.",
    },
    {
        icon: <i className="fa-solid fa-users text-xl text-yellow-500"></i>,
        bg: "bg-yellow-300/10",
        title: "Tim Profesional",
        desc: "Tim kami terdiri dari profesional berpengalaman dengan keahlian di berbagai bidang digital.",
    },
    {
        icon: <i className="fa-solid fa-graduation-cap text-xl text-blue-500"></i>,
        bg: "bg-blue-500/10",
        title: "Kurikulum Terstruktur",
        desc: "Program pelatihan kami dirancang dengan kurikulum yang terstruktur dan sesuai kebutuhan industri.",
    },
    {
        icon: <i className="fa-solid fa-headset text-xl text-yellow-500"></i>,
        bg: "bg-yellow-300/10",
        title: "Dukungan Penuh",
        desc: "Kami memberikan dukungan penuh kepada klien dan peserta kursus kami sepanjang perjalanan mereka.",
    },
];

const AdvantagesSection = forwardRef<HTMLDivElement>((_, ref) => (
    <section ref={ref} className="py-16 opacity-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="w-32 lg:w-120 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                    Kenapa Kreavoks?
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all"
                    >
                        <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
));

export default AdvantagesSection;