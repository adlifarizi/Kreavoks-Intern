import CourseCard from "@/components/cards/CourseCard";
import Slider from "@/components/Slider";
import type { Course } from "@/types";

interface RekomendasiCourseProps {
  courses: Course[];
}

export default function RekomendasiCourse({ courses = [] }: RekomendasiCourseProps) {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-10 w-full flex flex-col gap-6 z-10">
        <h2 className="font-semibold text-xl mb-4">
          Rekomendasi Buat Kamu
        </h2>

      <Slider
        items={courses}
        renderItem={(item, index) => <CourseCard course={item} />}
      />
    </section>
  );
}