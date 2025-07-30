import { usePage } from "@inertiajs/react";
import { Course } from "@/types";

export default function CourseDetail() {
    const { course } = usePage<{ course: Course }>().props;
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p>{course.description}</p>
        </div>
    );
}