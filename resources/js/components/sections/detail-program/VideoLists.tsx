import { useState } from "react";
import { Link } from "@inertiajs/react";
import { CirclePlay } from "lucide-react";

export const dummyLists = [
    {
        title: "Intro, setup & instalasi",
        videos: [
            { title: "Intro", duration: "1:00" },
            { title: "Setup", duration: "1:00" },
            { title: "Installation", duration: "1:00" },
        ],
    },
    {
        title: "Running your apps in physical device",
        videos: [
            {
                title: "Windows Setup Step 1 - Install the Flutter SDK",
                duration: "1:00",
            },
            {
                title: "Windows Setup Step 2 - Install Android Studio",
                duration: "1:00",
            },
            {
                title: "Windows Setup Step 3 - Install the Android SDK",
                duration: "1:00",
            },
            {
                title: "Mac Setup Step 1 - Install the Flutter SDK",
                duration: "1:00",
            },
            {
                title: "Mac Setup Step 2 - Install Android Studio",
                duration: "1:00",
            },
            {
                title: "Linux Setup Step 1 - Install the Flutter SDK",
                duration: "1:00",
            },
            {
                title: "Linux Setup Step 2 - Install Android Studio",
                duration: "1:00",
            },
            {
                title: "Linux Setup Step 3 - Install the Android SDK",
                duration: "1:00",
            },
        ],
    },
];

interface Section {
    title: string;
    videos: { title: string; duration: string }[];
}

interface CourseVideoListProps {
    sections: Section[];
}

export default function VideoLists({ sections }: CourseVideoListProps) {
    const [openSections, setOpenSections] = useState<boolean[]>(
        sections.map((_, idx) => idx === 0)
    );

    const toggleSection = (idx: number) => {
        setOpenSections((prev) => {
            const updated = [...prev];
            updated[idx] = !updated[idx];
            return updated;
        });
    };

    return (
        <div className="w-full md:w-1/3 flex flex-col">
            {sections.map((section, idx) => (
                <div
                    key={idx}
                    className={`bg-white shadow border border-blue-500 ${
                        idx === 0 ? "rounded-t-xl" : ""
                    } ${idx === sections.length - 1 ? "rounded-b-xl" : ""}`}
                >
                    <button
                        className={`w-full flex justify-between items-center px-6 py-4 text-white bg-blue-500 font-semibold text-left focus:outline-none cursor-pointer transition ${
                            idx === 0 ? "rounded-t-xl" : ""
                        } ${idx === sections.length - 1 ? "rounded-b-xl" : ""}`}
                        onClick={() => toggleSection(idx)}
                    >
                        <span>{section.title}</span>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${
                                openSections[idx] ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {openSections[idx] && (
                        <ul className="divide-y divide-blue-50 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                            {section.videos.map((video, vIdx) => (
                                <Link
                                    key={vIdx}
                                    href={`/course/video/${encodeURIComponent(
                                        video.title
                                    )}`}
                                    className="flex items-center justify-between px-6 py-3 text-blue-500 hover:bg-blue-50 transition cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <CirclePlay />
                                        <span className="max-w-xs">
                                            {video.title}
                                        </span>
                                    </div>
                                    <span>{video.duration}</span>
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
