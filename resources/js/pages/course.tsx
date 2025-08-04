import { Head, usePage } from "@inertiajs/react";
import type { Course } from "@/types";
import AppLayout from "@/layouts/app-layout";
import ImageOverlay from "@/components/sections/detail-program/ImageOverlay";
import VideoLists, { dummyLists } from "@/components/sections/detail-program/VideoLists";
import CourseInfoSection from "@/components/sections/detail-program/CourseInfoSection";
import dummyCourses from "@/data/dummyCourses.json";

export default function CoursePage() {
    const course = dummyCourses[1];

    return (
        <AppLayout>
            <Head title={course.title ?? "Course Detail"} />
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
                    <VideoLists sections={dummyLists} />
                </div>
            </div>
            <CourseInfoSection
                title={course.title ?? ""}
                instructor={{
                    name: course.instructor?.name ?? "",
                    role: course.instructor?.role ?? "",
                    image: course.instructor?.avatar ?? "",
                }}
                description={course.description ?? ""}
                benefit={course.benefit ?? []}
                learn={course.learn ?? []}
                released={
                    Array.isArray(course.released)
                        ? course.released[0] ?? ""
                        : course.released ?? ""
                }
                updated={
                    Array.isArray(course.updated)
                        ? course.updated[0] ?? ""
                        : course.updated ?? ""
                }
            />
        </AppLayout>
    );
}
