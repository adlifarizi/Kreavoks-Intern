import { forwardRef } from "react";

const MissionVisionSection = forwardRef<HTMLDivElement>((_, ref) => (
    <section
        ref={ref}
        className="py-16 bg-white opacity-0"
    >
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            {/* Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left: Image */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                    <div className="relative hover:scale-105 transition-transform duration-500">
                        <img
                            src="/images/vision-1.png"
                            alt="Vision-1"
                            className="w-[320px] md:w-[360px] rounded-2xl shadow-lg"
                        />
                        <img
                            src="/images/vision-2.png"
                            alt="Vision-2"
                            className="absolute bottom-10 right-2 lg:-right-16 w-40 md:w-52 rounded-xl shadow-xl"
                        />
                    </div>
                </div>
                {/* Right: Text */}
                <div className="order-1 lg:order-2 group">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-500 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        Visi Kami
                    </h2>
                    <ul className="space-y-4 text-base md:text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 text-xl">✔</span>
                            Menyediakan solusi digital yang inovatif dan berkualitas tinggi
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 text-xl">✔</span>
                            Memberdayakan individu dan bisnis melalui pendidikan digital yang praktis
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 text-xl">✔</span>
                            Menciptakan ekosistem digital yang inklusif dan dapat diakses oleh semua
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 text-xl">✔</span>
                            Mendorong inovasi dan kreativitas dalam setiap proyek yang kami kerjakan
                        </li>
                    </ul>
                </div>
            </div>
            {/* Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div className="group">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-blue-500 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        Misi Kami
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mb-4">
                        Menjadi pemimpin dalam transformasi digital di Indonesia dengan menyediakan solusi teknologi yang inovatif dan menyediakan solusi digital yang berkualitas.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-4">
                        Kami membayangkan masa depan di mana setiap bisnis dan individu memiliki akses ke alat dan pengetahuan digital yang mereka butuhkan untuk berkembang di era digital.
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                        Dengan fokus pada kualitas, inovasi, dan pendidikan, kami bertujuan untuk memberdayakan generasi berikutnya dari profesional digital Indonesia.
                    </p>
                </div>
                {/* Right: Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative hover:scale-105 transition-transform duration-500">
                        <img
                            src="/images/mission-1.png"
                            alt="Mission-1"
                            className="w-[300px] md:w-[320px] rounded-2xl shadow-lg"
                        />
                        <img
                            src="/images/mission-2.png"
                            alt="Mission-2"
                            className="absolute top-16 lg:-left-16 w-40 md:w-52 rounded-xl shadow-xl border-4 border-white bg-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
));

export default MissionVisionSection;