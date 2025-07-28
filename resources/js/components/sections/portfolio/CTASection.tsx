import { forwardRef } from "react";
import CTAButton from "@/components/buttons/CTAButton";

const CtaSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section
            ref={ref}
            className="container mx-auto px-6 md:px-12 lg:px-16 py-12 flex justify-center mt-8"
        >
            <div className="w-full rounded-[40px] overflow-hidden relative flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-50 px-4 lg:px-16 py-4 md:py-8 shadow-lg">
                {/* Left: Text */}
                <div className="flex-[2] flex flex-col justify-center items-center md:items-start z-10">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center md:text-left mb-6 leading-tight">
                        Siap Bekerjasama Dengan Kami?
                    </h1>
                    <p className="text-md md:text-lg text-blue-50 text-center md:text-left max-w-xl mb-6">
                        Hubungi kami untuk mendiskusikan bagaimana Kreavoks
                        dapat membantu bisnis atau karir digital anda
                    </p>
                    <CTAButton href="#" className="bg-white text-blue-500 font-semibold">
                        Mulai Sekarang{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                    </CTAButton>
                </div>
                {/* Right: Image */}
                <div className="hidden flex-1 md:flex justify-end items-center z-10">
                    <img
                        src="/images/portfolio-cta-people.png"
                        alt="Portfolio CTA"
                        className="object-cover md:-mb-10 h-full"
                    />
                </div>
            </div>
        </section>
    );
});

export default CtaSection;
