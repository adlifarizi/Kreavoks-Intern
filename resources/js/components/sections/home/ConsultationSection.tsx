import { forwardRef } from "react";
import CTAButton from "@/components/buttons/CTAButton";
import { IoLogoWhatsapp } from "react-icons/io";

const ConsultationSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className="w-full px-6 md:px-12 lg:px-16 md:py-10">
            <div className="w-full max-w-[90vw] mx-auto bg-[#F1F7FF] rounded-xl flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-6 gap-4 shadow-sm">
                {/* Left: Image & Text */}
                <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="flex-shrink-0">
                        <img
                            src="/images/consultation-people.png"
                            alt="Consultation"
                            className="rounded-full object-cover w-20 lg:w-28 hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg md:text-2xl font-semibold text-gray-900 leading-snug mb-1">
                            Masih Bingung atau belum
                            <br className="hidden md:block" /> merasa ada yang
                            cocok?
                        </p>
                        <p className="text-gray-500 text-sm md:text-base">
                            Konsultasikan bersama kami
                        </p>
                    </div>
                </div>

                {/* Right: Button */}
                <CTAButton
                    href="#"
                    icon={IoLogoWhatsapp}
                    className="text-white"
                >
                    Konsultasi Gratis
                </CTAButton>
            </div>
        </section>
    );
});

export default ConsultationSection;
