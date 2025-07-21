import { Head, usePage } from "@inertiajs/react";
import type { Course } from "@/types";
import { Video, Star } from "lucide-react";

// Layouts
import AppLayout from "@/layouts/app-layout";

export default function Rai() {
    const { course } = usePage<{ course: Course }>().props;

    return (
        <AppLayout>
            <Head title={course.title} />
            <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center transition-opacity duration-500">
                <div className="w-full max-w-4xl mx-auto px-2 md:px-10 lg:px-20 py-14 relative z-10">
                    {/* Card */}
                    <div className="bg-white/95 rounded-3xl shadow-2xl border border-blue-100 p-0 md:p-0 flex flex-col overflow-hidden animate-in transition-all duration-500">
                        {/* Image on Top */}
                        <div className="w-full flex items-center justify-center bg-gradient-to-b from-blue-100/60 to-white/0 pt-10 pb-6 px-8 md:px-20">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full max-w-2xl rounded-3xl shadow-xl border-4 border-blue-50 bg-blue-50 object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                            />
                        </div>
                        {/* Content */}
                        <div className="w-full flex flex-col gap-5 text-left px-8 md:px-20 pb-14 pt-2 bg-gradient-to-b from-white/80 to-blue-50/40">
                            <div className="mt-4 px-3 py-1.5 bg-blue-50 rounded-full text-blue-500 font-bold w-fit mb-2 text-base shadow-sm tracking-wide">
                                {course.category}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-2 drop-shadow-sm">
                                {course.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-md mb-2">
                                <span className="flex items-center gap-1">
                                    <Video size={22} className="text-blue-400 fill-blue-500" />
                                    {course.videos} Video
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Star size={22} className="text-yellow-400 fill-yellow-500" />
                                    {course.rating}
                                </span>
                            </div>
                            <p className="text-2xl md:text-3xl text-green-600 font-extrabold drop-shadow-sm">
                                Rp{course.price.toLocaleString()}
                            </p>
                            <p className="text-gray-800 leading-relaxed text-md mb-4 py-2 rounded-xl shadow-sm">
                                {course.description}
                            </p>
                            <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full cursor-pointer shadow-xl hover:bg-blue-700 hover:scale-105 transition duration-300 active:scale-95 w-fit mt-2 text-md">
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>
                </div>
                {/* Decorative background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]" />
            </div>
        </AppLayout>
    );
}
