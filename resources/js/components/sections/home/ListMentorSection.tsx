import { forwardRef } from "react";
import MentorCard from "@/components/cards/MentorCard";

interface ListMentorSectionProps {
    animate: boolean;
    mentors: any[];
}

const ListMentorSection = forwardRef<HTMLDivElement, ListMentorSectionProps>(
    ({ animate, mentors = [] }, ref) => {
        return (
            <section
                ref={ref}
                className="relative px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10 opacity-0"
            >
                {/* Gradient animasi */}
                <div
                    className={`absolute inset-0 z-0 h-72 md:h-96 transition-all duration-[2000ms] ease-out bg-gradient-to-b from-[#4082E6] via-white to-transparent
                ${
                    animate
                        ? "animate-expandGradientX"
                        : "opacity-0 scale-x-0 origin-center"
                }
                `}
                />

                <div className="relative mt-12 z-10 text-center w-full max-w-full">
                    <div className="flex flex-col items-center gap-2 mb-4 md:mb-6">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                            Mentor di Kreavoks
                        </h2>
                        <p className="text-gray-600 text-xl max-w-xl">
                            Pengalamannya ga main-main
                        </p>
                    </div>

                    <div className="relative w-full">
                        {/* Gradient mask kiri */}
                        <div className="pointer-events-none absolute -left-2 top-0 h-full w-16 md:w-24 z-20 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                        {/* Gradient mask kanan */}
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 z-20 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

                        <div
                            className="flex md:gap-8 overflow-x-auto py-2 px-8 md:px-16 scrollbar-hide"
                            style={{
                                scrollSnapType: "x mandatory",
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {mentors.length > 0 ? (
                                mentors.map((mentor, i) => (
                                    <div
                                        key={mentor.id || i}
                                        className="flex-shrink-0"
                                        style={{
                                            scrollSnapAlign: "center",
                                            width: "260px",
                                            maxWidth: "90vw",
                                        }}
                                    >
                                        <MentorCard mentor={mentor} />
                                    </div>
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-500">
                                    Belum ada mentor tersedia saat ini.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);

export default ListMentorSection;
