import { forwardRef } from "react";
import PromoCountdown from "@/components/PromoCountdown";
import PromoCard from "@/components/cards/PromoCard";

interface PromoSectionProps {
    events: any[];
}

const PromoSection = forwardRef<HTMLDivElement, PromoSectionProps>(({ events }, ref) => {
    return (
        <section ref={ref} className="container mx-auto px-6 md:px-12 lg:px-16 py-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 relative z-10">
                {/* Promo Card */}
                <div>
                    <PromoCard mainEvent={events[3]} stackEvent={events[0]} />
                </div>

                {/* Countdown + Text */}
                <div className="flex flex-col items-center lg:items-start gap-6">
                    <PromoCountdown />

                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-3xl md:text-4xl bg-gradient-to-b from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold leading-tight">
                            Penawaran Menarik Nih Buat Kamu dari Kreavoks
                        </h2>
                        <p className="text-gray-600 text-md">
                            Tunggu apa lagi? Ambil kesempatan emas ini sekarang
                            juga!!
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg md:text-xl max-w-sm">
                                Gunakan kode promo dan dapatkan diskon hingga
                            </p>
                            <div className="bg-blue-500 text-yellow-300 px-6 py-3 rounded-full flex items-center justify-center font-semibold text-2xl md:text-4xl shrink-0">
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
                            className="cursor-pointer flex items-center gap-2 border-2 border-dashed border-gray-400 text-gray-700 px-4 py-3 rounded-2xl font-semibold text-base max-w-max mx-auto md:mx-0 transition hover:bg-gray-200 hover:scale-105"
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
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30 z-0" />
        </section>
    );
});

export default PromoSection;
