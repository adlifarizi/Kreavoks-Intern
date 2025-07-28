import CTAButton from "@/components/buttons/CTAButton";
import React, { forwardRef } from "react";

const CTAMentorSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section
            ref={ref}
            className="relative px-2 md:px-10 lg:px-24 py-10 w-full flex flex-col gap-6 z-10"
        >
            {/* Card */}
            <div
                className="relative flex flex-col md:flex-row items-center justify-between rounded-[40px] p-6 md:p-12 min-h-[320px] overflow-visible"
                style={{
                    background:
                        "linear-gradient(90deg, #1E90FF 0%, #2D6BC9 20%, #1E90FF 55%, #A5D8FF 80%, #1E90FF 100%)",
                }}
            >
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 rounded-[40px] opacity-100"
                    style={{
                        backgroundImage: "url('/images/mentor-cta-bg.svg')",
                        backgroundPosition: "right center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center z-15 items-start gap-6 md:pr-8">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-2">
                        Tertarik Jadi Mentor Di{" "}
                        <span className="text-yellow-300">Kreavoks?</span>
                    </h2>
                    <p className="text-white text-base md:text-lg max-w-xl font-normal mb-4">
                        Bergabunglah dengan{" "}
                        <span className="font-bold">100+ mentor</span> lainnya
                        untuk berkontribusi dan menciptakan dampak di komunitas
                        IT Indonesia. Dapatkan manfaat seperti{" "}
                        <span className="font-bold">
                            pendapatan bagi hasil, eksposur, dan akses ke proyek
                            menarik.
                        </span>
                    </p>
                    <CTAButton href="#" className="bg-white text-blue-500">
                        Gabung Sekarang
                    </CTAButton>
                </div>

                {/* Gambar Ilustrasi */}
                <div className="hidden relative xl:flex items-end justify-end md:absolute md:right-0 md:bottom-0 md:h-full md:w-auto z-10">
                    <img
                        src="/images/mentor-cta-people.png"
                        alt="CTA Mentor"
                        className="h-[340px] md:h-[480px] w-auto object-contain md:object-bottom -translate-x-5 md:-translate-x-20"
                        style={{ maxHeight: "none" }}
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
});

export default CTAMentorSection;
