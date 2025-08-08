import { Head, usePage } from "@inertiajs/react";
import type { Course } from "@/types";
import AppLayout from "@/layouts/app-layout";
import ImageOverlay from "@/components/sections/detail-program/ImageOverlay";
import VideoLists, { dummyLists } from "@/components/sections/detail-program/VideoLists";
import CourseInfoSection from "@/components/sections/detail-program/CourseInfoSection";
import RecommendedSection from "@/components/sections/detail-program/RecommendedSection";

export default function CoursePage() {
    const { course, courses } = usePage<{ course: Course; courses: Course[] }>().props;

    return (
        <AppLayout>
            <Head title={course.title ?? "Course Detail"} />
            <div className="flex items-center justify-center py-12 md:py-20 transition-opacity duration-500">
                <div className="w-full mx-auto px-2 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-8">
                    <ImageOverlay
                        src={course.image || "/images/placeholders/course-card.png"}
                        alt={course.title}
                        slug={course.slug}
                    />
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
                released={Array.isArray(course.released) ? course.released.join(", ") : (course.released ?? "")}
                updated={Array.isArray(course.updated) ? course.updated.join(", ") : (course.updated ?? "")}
            />
            <RecommendedSection items={courses} currentSlug={course.slug} type="course" />
        </AppLayout>
    );
}