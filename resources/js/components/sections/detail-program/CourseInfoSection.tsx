import { useState } from "react";
import { Globe, FolderCheck, ChevronDown, Check } from "lucide-react";

interface CourseInfoSectionProps {
    title: string;
    instructor: {
        name: string;
        role: string;
        image: string;
    };
    description: string;
    benefit: string[];
    learn: string[];
    released: string;
    updated: string;
}

export default function CourseInfoSection({
    title,
    instructor,
    description,
    benefit,
    learn,
    released,
    updated,
}: CourseInfoSectionProps) {
    const [showMore, setShowMore] = useState(false);

    const words = description.split(" ");
    const isLong = words.length > 100;
    const shortDesc = words.slice(0, 100).join(" ") + (isLong ? "..." : "");

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-6">{title}</h1>
            {/* Meta Info */}
            <div className="flex items-center gap-8 text-sm mb-6">
                <span className="flex items-center gap-2">
                    <Globe />
                    Released date {released}
                </span>
                <span className="flex items-center gap-2">
                    <FolderCheck />
                    Last updated {updated}
                </span>
            </div>
            {/* Instructor */}
            <div className="flex items-center gap-3 mb-4">
                <img
                    src={instructor.image}
                    alt="Instructor"
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <div className="font-semibold">{instructor.name}</div>
                    <div className="text-gray-500 text-sm">{instructor.role}</div>
                </div>
            </div>
            {/* Description */}
            <div className="flex flex-col gap-2 mb-12 text-base md:text-lg">
                <div className="text-gray-800">
                    {showMore || !isLong ? description : shortDesc}
                </div>
                {isLong && (
                    <div className="flex justify-center">
                        <button
                            className="text-blue-500 font-semibold flex items-center gap-1"
                            onClick={() => setShowMore((v) => !v)}
                        >
                            {showMore ? "Show less" : "Show more"}{" "}
                            <ChevronDown
                                className={showMore ? "rotate-180 transition" : ""}
                            />
                        </button>
                    </div>
                )}
            </div>
            {/* Benefit */}
            <div className="mb-6 md:mb-12">
                <h2 className="font-semibold text-xl mb-4">Benefit</h2>
                <div className="flex flex-wrap gap-3">
                    {benefit.map((b, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:text-white font-medium bg-white hover:bg-blue-500 transition"
                        >
                            {b}
                        </span>
                    ))}
                </div>
            </div>
            {/* What you'll learn */}
            <div>
                <h2 className="font-semibold text-xl mb-4">What you’ll learn</h2>
                <ul className="space-y-6">
                    {learn.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <Check />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}