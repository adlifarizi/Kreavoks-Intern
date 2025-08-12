import { forwardRef, useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1200) {
    const [count, setCount] = useState(0);
    const raf = useRef<number | null>(null);

    useEffect(() => {
        let start: number | null = null;
        function animate(ts: number) {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                raf.current = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        }
        raf.current = requestAnimationFrame(animate);
        return () => {
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [target, duration]);

    return count;
}

const HeroSection = forwardRef<HTMLElement>((_, ref) => {
    const stats = [
        { id: 1, value: 5, suffix: "+", label: "Tahun Pengalaman" },
        { id: 2, value: 100, suffix: "+", label: "Proyek Selesai" },
        { id: 3, value: 50, suffix: "+", label: "Klien Puas" },
        { id: 4, value: 2800, suffix: "+", label: "Peserta Kursus" },
    ];

    // Gunakan animasi count up untuk setiap stat
    const counts = stats.map((stat) => useCountUp(stat.value, 1200 + stat.id * 200));

    return (
        <section
            ref={ref}
            className="container mx-auto px-6 md:px-12 lg:px-16 pt-8 mb-10"
        >
            <div className="w-full rounded-3xl border border-gray-200 bg-white overflow-hidden flex flex-col md:flex-row">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col justify-center items-start px-4 py-8 md:py-12">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-500 mb-4 leading-tight">
                        Portofolio Karya Terbaik Kami
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl">
                        Lihat berbagai proyek yang telah kami kerjakan untuk klien dari berbagai industri setiap proyek dirancang dengan perhatian terhadap detail fokus pada kebutuhan pengguna
                    </p>
                </div>
                {/* Right: Stats */}
                <div className="w-full md:w-1/4 grid grid-cols-2 md:grid-cols-1 border-t md:border-t-0 md:border-l border-gray-200">
                    {stats.map((stat, idx) => (
                        <div
                            key={stat.id}
                            className={`flex flex-col items-center justify-center py-8 ${idx !== 0 && "border-t md:border-t-0 md:border-l border-gray-200"}`}
                        >
                            <div className="text-xl md:text-3xl lg:text-5xl font-bold text-blue-500 mb-1">
                                {counts[idx].toLocaleString()}<span>{stat.suffix}</span>
                            </div>
                            <div className="text-gray-500 text-sm md:text-lg lg:text-xl text-center">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default HeroSection;