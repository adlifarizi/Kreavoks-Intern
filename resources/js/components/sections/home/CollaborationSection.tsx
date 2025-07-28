import { forwardRef, useRef } from "react";

interface CollaborationSectionProps {
    title?: string;
    logos?: {
        src: string;
        alt: string;
    }[];
}

const defaultLogos = [
    { src: "/images/bank-sinarmas-logo.svg", alt: "Bank Sinarmas" },
    { src: "/images/ecotainment.svg", alt: "Ecotainment" },
    { src: "/images/umkmgo.svg", alt: "UMKM Go" },
    { src: "/images/upala.svg", alt: "Upala" },
    { src: "/images/ipb-university-logo.svg", alt: "IPB University" },
    { src: "/images/dpma.svg", alt: "DPMA" },
    { src: "/images/ipb-university-logo.svg", alt: "IPB University 2" },
];

const chunkArray = (arr: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const CollaborationSection = forwardRef<HTMLDivElement, CollaborationSectionProps>(
    ({ title = "Kolaborasi Dalam Kesatuan", logos = defaultLogos }, ref) => {
        const sliderRef = useRef<HTMLDivElement>(null);

        // Bagi logo menjadi kolom-kolom berisi 2 logo (untuk 2 baris)
        const columnChunks = chunkArray(logos, 2);

        return (
            <section ref={ref} className="relative py-12 bg-blue-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
                        {title}
                    </h2>

                    {/* Desktop */}
                    <div className="hidden md:flex flex-wrap justify-center items-center gap-10 sm:gap-20">
                        {logos.map((logo, idx) => (
                            <img
                                key={logo.alt + idx}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-14 hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>

                    {/* Mobile: slider with 2 rows */}
                    <div className="md:hidden">
                        <div
                            ref={sliderRef}
                            className="flex overflow-x-auto gap-6 hide-scrollbar pb-2"
                            style={{ WebkitOverflowScrolling: "touch" }}
                        >
                            {columnChunks.map((column, idx) => (
                                <div key={idx} className="flex flex-col gap-4 flex-shrink-0">
                                    {column.map((logo, subIdx) => (
                                        <img
                                            key={logo.alt + subIdx}
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="h-8 w-auto hover:scale-105 transition-transform duration-300"
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);

export default CollaborationSection;