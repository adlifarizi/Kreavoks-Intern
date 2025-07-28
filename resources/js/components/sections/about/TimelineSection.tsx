import { forwardRef } from "react";

const timelineData = [
    {
        year: "2018",
        title: "Fondasi Awal",
        desc: "Kreavoks didirikan dengan visi, membuat teknologi digital yang lebih mudah diakses dan dipahami oleh semua orang.",
    },
    {
        year: "2019",
        title: "Fokus pada Inovasi Digital",
        desc: "Pengembangan layanan utama, seperti pengembangan software dan desain UI/UX.",
    },
    {
        year: "2020",
        title: "Menghadirkan Pelatihan Digital",
        desc: "Menawarkan pelatihan keterampilan digital yang praktis dan aplikatif.",
    },
    {
        year: "2021",
        title: "Tumbuh Menjadi Agency Terkemuka",
        desc: "Mulai dikenal sebagai agensi digital yang terkemuka.",
    },
    {
        year: "2022",
        title: "Digital untuk Semua",
        desc: "Memastikan teknologi tetap inklusif dan dapat dimanfaatkan oleh bisnis.",
    },
];

const TimelineSection = forwardRef<HTMLDivElement>((_, ref) => (
    <section ref={ref} className="py-16 bg-white opacity-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl text-center font-extrabold text-blue-500 mb-16">
                Cerita Kami
            </h2>

            {/* MOBILE layout */}
            <div className="lg:hidden relative">
                {/* Garis vertikal */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300" />

                <div className="flex flex-col gap-12 relative z-10">
                    {timelineData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex items-start ${
                                idx % 2 === 0
                                    ? "justify-start pr-8"
                                    : "justify-end pl-8"
                            }`}
                        >
                            <div className="relative bg-white px-4 py-3 rounded-xl shadow-md max-w-xs border border-gray-100">
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                                <span className="block font-semibold text-xl text-blue-500">
                                    {item.year}
                                </span>
                                <span className="block font-semibold text-blue-500 text-lg mb-1">
                                    {item.title}
                                </span>
                                <p className="text-gray-600 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP layout */}
            <div className="hidden lg:block relative w-full">
                <div
                    className="absolute left-0 right-0 top-1/2 z-0 h-1 bg-gray-300"
                    style={{ transform: "translateY(-50%)" }}
                />

                <div className="relative z-10 flex flex-col gap-12">
                    {/* Top row (even years) */}
                    <div className="flex justify-between items-end">
                        {timelineData.map((item, idx) =>
                            idx % 2 === 0 ? (
                                <div
                                    key={item.year}
                                    className="flex-1 flex flex-col items-center text-center mb-8"
                                >
                                    <div className="bg-white px-2 py-3 rounded-xl shadow-md max-w-xs">
                                        <span className="block font-semibold text-xl text-blue-500">
                                            {item.year}
                                        </span>
                                        <span className="block font-semibold text-blue-500 text-lg mb-1">
                                            {item.title}
                                        </span>
                                        <div className="text-sm text-gray-600">
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div key={item.year} className="flex-1" />
                            )
                        )}
                    </div>

                    {/* Dots */}
                    <div
                        className="flex justify-between items-center relative z-10"
                        style={{ marginTop: "-24px", marginBottom: "-24px" }}
                    >
                        {timelineData.map((_, idx) => (
                            <div
                                key={idx}
                                className="flex-1 flex justify-center"
                            >
                                <div className="w-20 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                            </div>
                        ))}
                    </div>

                    {/* Bottom row (odd years) */}
                    <div className="flex justify-between items-start">
                        {timelineData.map((item, idx) =>
                            idx % 2 === 1 ? (
                                <div
                                    key={item.year}
                                    className="flex-1 flex flex-col items-center text-center mt-8"
                                >
                                    <div className="bg-white px-2 py-3 rounded-xl shadow-md max-w-xs">
                                        <span className="block font-semibold text-xl text-blue-500">
                                            {item.year}
                                        </span>
                                        <span className="block font-semibold text-blue-500 text-lg mb-1">
                                            {item.title}
                                        </span>
                                        <div className="text-sm text-gray-600">
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div key={item.year} className="flex-1" />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
));

export default TimelineSection;
