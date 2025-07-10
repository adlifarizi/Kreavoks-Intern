import { IoLogoWhatsapp } from "react-icons/io";

export default function ConsultationSection() {
    return (
        <div className="w-full bg-[#F1F7FF] rounded-xl flex flex-col md:flex-row items-center justify-between px-6 md:px-18 py-6 gap-6 shadow-sm">
            {/* Left: Image & Text */}
            <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="flex-shrink-0">
                    <img
                        src="/images/consultation-people.png"
                        alt="Consultation"
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-1">
                        Masih Bingung atau belum
                        <br className="hidden md:block" /> merasa ada yang
                        cocok?
                    </p>
                    <p className="text-gray-500 text-base md:text-lg">
                        Konsultasikan bersama kami
                    </p>
                </div>
            </div>
            {/* Right: Button */}
            <div className="hover:scale-105 transition duration-300 active:scale-95 select-none cursor-pointer inline-flex items-center bg-blue-500 rounded-full px-4 py-2.5 gap-3 text-white font-medium text-xl z-50">
                <IoLogoWhatsapp size={20} />
                Konsultasi Gratis
            </div>
        </div>
    );
}
