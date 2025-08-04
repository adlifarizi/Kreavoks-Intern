import { useState } from "react";
import { Link } from "@inertiajs/react";

interface CourseImageOverlayProps {
    src: string;
    alt: string;
}

export default function ImageOverlay({ src, alt }: CourseImageOverlayProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-full xl:w-2/3 rounded-2xl overflow-hidden shadow-lg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
                    hovered
                        ? "bg-black/60 opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 text-center drop-shadow-lg">
                    Yuk gabung sekarang!
                </h2>
                <Link href="/detail-course/checkout">
                    <button className="px-6 py-2 bg-blue-500 text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-600 cursor-pointer transition">
                        Beli Kelas
                    </button>
                </Link>
            </div>
        </div>
    );
}
