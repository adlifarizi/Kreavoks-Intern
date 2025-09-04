import { forwardRef } from "react";
import PromoCountdown from "@/components/PromoCountdown";
import PromoCard from "@/components/cards/PromoCard";

interface PromoSectionProps {
    events: any[];
}

const PromoSection = forwardRef<HTMLDivElement, PromoSectionProps>(
    ({ events }, ref) => {
        return (
            <section
                ref={ref}
                className="container mx-auto px-4 md:px-12 lg:px-16 py-8 relative"
            >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
                    {/* Promo Card */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
                        <PromoCard
                            mainEvent={events[0]}
                            stackEvent={events[1]}
                        />
                    </div>

                    {/* Countdown + Text */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
                        <PromoCountdown />

                        <div className="flex flex-col items-start gap-2 w-full">
                            <h2 className="text-2xl md:text-3xl lg:text-5xl bg-gradient-to-b from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold leading-tight text-left">
                                Penawaran Menarik Nih Buat Kamu dari Kreavoks
                            </h2>
                            <p className="text-gray-600 text-md text-left">
                                Tunggu apa lagi? Ambil kesempatan emas ini
                                sekarang juga!!
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-row justify-between items-center w-full gap-2">
                                <p className="text-xl font-medium max-w-xs text-left">
                                    Gunakan kode promo dan dapatkan diskon
                                    hingga
                                </p>
                                <div className="bg-blue-500 text-yellow-300 px-6 py-3 rounded-full flex items-center justify-center font-semibold text-2xl md:text-4xl shrink-0 mt-2 md:mt-0">
                                    20%
                                </div>
                            </div>

                            {/* Copy Code */}
                            <div
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        "KREAVOKSDIGITAL"
                                    );
                                    alert("Kode promo disalin!");
                                }}
                                className="cursor-pointer flex items-center gap-2 border-2 border-dashed border-gray-400 text-gray-700 px-4 py-3 rounded-2xl font-semibold text-base max-w-max mx-auto lg:mx-0 transition hover:bg-gray-200 hover:scale-105"
                            >
                                <div className="bg-white p-1 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6a2 2 0 012-2z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-lg md:text-base">
                                    KREAVOKSDIGITAL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Gradasi Blur */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] md:w-[220px] lg:w-[300px] h-[180px] md:h-[220px] lg:h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30 z-0" />
            </section>
        );
    }
);

export default PromoSection;
