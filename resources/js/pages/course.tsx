import { Head, usePage } from "@inertiajs/react";
import type { Course } from "@/types";
import AppLayout from "@/layouts/app-layout";
import ImageOverlay from "@/components/sections/detail-program/ImageOverlay";
import VideoLists, {
    dummySections,
} from "@/components/sections/detail-program/VideoLists";
import CourseInfoSection from "@/components/sections/detail-program/CourseInfoSection";

export default function Rai() {
    const { course } = usePage<{ course: Course }>().props;

    return (
        <AppLayout>
            <Head title={`${course.title} | Kreavoks`} />
            <div className="flex items-center justify-center py-12 md:py-20 transition-opacity duration-500">
                <div className="w-full mx-auto px-2 md:px-10 lg:px-20 flex flex-col xl:flex-row gap-8">
                    {/* Left: Course Image */}
                    <ImageOverlay
                        src={
                            course.image ||
                            `/images/placeholders/course-card.png`
                        }
                        alt={course.title}
                    />
                    {/* Right: List of videos */}
                    <VideoLists sections={dummySections} />
                </div>
            </div>

            {/* Course Info Section */}
            <CourseInfoSection
                title={course.title}
                instructor={{
                    name: "Setiay Ibrahim Anwar",
                    role: "Developer & Instructor",
                    image: "/images/dummy/mentors/setiady.png",
                }}
                description={course.description ?? "No description available."}
                benefit={[
                    "Certificate",
                    "Resources",
                    "Articles",
                    "Consultation",
                ]}
                learn={[
                    "Build beautiful, fast and native-quality apps with Flutter",
                    "Build iOS and Android apps with just one codebase...",
                    "Build a portfolio of beautiful Flutter apps to impress any recruiter",
                    "Become proficient in one of the fastest growing technologies",
                ]}
                released="July 2021"
                updated="March 2025"
            />
        </AppLayout>
    );
}
