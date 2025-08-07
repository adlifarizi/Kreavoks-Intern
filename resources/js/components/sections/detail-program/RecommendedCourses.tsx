import CourseCard from "@/components/cards/CourseCard";
import { Course } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function RecommendedCourses({
    courses,
    currentSlug,
}: {
    courses: Course[];
    currentSlug?: string;
}) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (sliderRef.current) {
            const scrollAmount = 320;
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Filter agar course yang sedang dibuka tidak muncul
    const filteredCourses = currentSlug
        ? courses.filter((c) => c.slug !== currentSlug)
        : courses;

    return (
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
            <h2 className="font-semibold text-xl mb-4">Recommended for you</h2>
            <div className="relative">
                <button
                    className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white border border-blue-500 shadow rounded-full w-10 h-10 items-center justify-center hover:bg-blue-100 transition"
                    onClick={() => scroll("left")}
                    aria-label="Scroll left"
                    style={{ left: "-2.5rem" }}
                >
                    <ChevronLeft className="w-6 h-6 text-blue-500" />
                </button>
                <div
                    ref={sliderRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-2 items-center max-w-full"
                    style={{
                        scrollBehavior: "smooth",
                        minHeight: "440px",
                    }}
                >
                    {filteredCourses.map((course, idx) => (
                        <div
                            key={course.id}
                            style={{
                                minWidth: "340px",
                                maxWidth: "340px",
                                flex: "0 0 340px",
                                height: "420px",
                                display: "flex",
                                alignItems: "start",
                            }}
                            className={idx > 3 ? "hidden md:flex" : ""}
                        >
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>
                <button
                    className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white border border-blue-500 shadow rounded-full w-10 h-10 items-center justify-center hover:bg-blue-100 transition"
                    onClick={() => scroll("right")}
                    aria-label="Scroll right"
                    style={{ right: "-2.5rem" }}
                >
                    <ChevronRight className="w-6 h-6 text-blue-500" />
                </button>
            </div>
        </section>
    );
}
