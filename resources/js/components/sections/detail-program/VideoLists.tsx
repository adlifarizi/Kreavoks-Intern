import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Play, Download, Video, ExternalLink } from "lucide-react";

export const dummyLists = [
    {
        title: "Intro, setup & instalasi",
        videos: [
            {
                title: "Introduction of Wireframing",
                duration: "2 mins",
                status: "done",
            },
            { title: "Setup", duration: "1 mins", status: "done" },
            { title: "Installation", duration: "1 mins", status: "pending" },
        ],
    },
    {
        title: "Running your apps in physical device",
        videos: [
            {
                title: "Windows Setup Step 1 - Install the Flutter SDK",
                duration: "2 mins",
                status: "pending",
            },
            {
                title: "Windows Setup Step 2 - Install Android Studio",
                duration: "3 mins",
                status: "pending",
            },
            {
                title: "Windows Setup Step 3 - Install the Android SDK",
                duration: "4 mins",
                status: "pending",
            },
            {
                title: "Mac Setup Step 1 - Install the Flutter SDK",
                duration: "2 mins",
                status: "pending",
            },
            {
                title: "Mac Setup Step 2 - Install Android Studio",
                duration: "3 mins",
                status: "pending",
            },
            {
                title: "Linux Setup Step 1 - Install the Flutter SDK",
                duration: "2 mins",
                status: "pending",
            },
            {
                title: "Linux Setup Step 2 - Install Android Studio",
                duration: "3 mins",
                status: "pending",
            },
            {
                title: "Linux Setup Step 3 - Install the Android SDK",
                duration: "4 mins",
                status: "pending",
            },
        ],
    },
];

const dummyResources = {
    materials: [
        {
            title: "Reading Materials for Wireframing",
            type: "PDF",
            size: "2.3 MB",
            url: "/files/wireframing-materials.pdf",
        },
        {
            title: "Wireframing Example",
            type: "PDF",
            size: "1 MB",
            url: "/files/wireframing-example.pdf",
        },
    ],
    links: [
        {
            title: "Link Figma Exercise",
            url: "https://figma.com",
        },
    ],
};

interface Section {
    title: string;
    videos: { title: string; duration: string; status: string }[];
}

interface CourseVideoListProps {
    sections: Section[];
    resources?: typeof dummyResources;
}

export default function VideoLists({
    sections,
    resources = dummyResources,
}: CourseVideoListProps) {
    const [openSections, setOpenSections] = useState<boolean[]>(
        sections.map((_, idx) => idx === 0)
    );
    const [tab, setTab] = useState<"content" | "resources">("content");

    const toggleSection = (idx: number) => {
        setOpenSections((prev) => {
            const updated = [...prev];
            updated[idx] = !updated[idx];
            return updated;
        });
    };

    return (
        <div className="w-full lg:w-1/3 flex flex-col">
            <div className="bg-white rounded-xl shadow border border-blue-100 mb-4">
                <div className="flex border-b border-blue-100">
                    <button
                        className={`flex-1 px-6 py-4 flex items-center gap-2 justify-center font-semibold text-sm transition rounded-t-xl ${
                            tab === "content"
                                ? "border-b-3 border-blue-500"
                                : ""
                        }`}
                        onClick={() => setTab("content")}
                    >
                        <Video className="w-5 h-5" />
                        Content
                    </button>
                    <button
                        className={`flex-1 px-6 py-4 flex items-center gap-2 justify-center font-semibold text-sm transition rounded-t-xl ${
                            tab === "resources"
                                ? "border-b-3 border-blue-500"
                                : ""
                        }`}
                        onClick={() => setTab("resources")}
                    >
                        <Download className="w-5 h-5" />
                        Resources
                    </button>
                </div>
                <div className="p-4">
                    {tab === "content" ? (
                        <div>
                            <div className="mb-2 font-semibold text-gray-700 text-base">
                                Course Content
                            </div>
                            <div className="text-sm text-gray-500 mb-4">
                                2 of 12 lessons completed
                            </div>
                            <div className="flex flex-col gap-2 max-h-[320px] overflow-y-auto custom-scrollbar">
                                {sections.map((section, idx) => (
                                    <div key={idx}>
                                        <div className="font-semibold text-gray-600 mb-2">
                                            {section.title}
                                        </div>
                                        {section.videos.map((video, vIdx) => (
                                            <Link
                                                key={vIdx}
                                                href={`/course/video/${encodeURIComponent(
                                                    video.title
                                                )}`}
                                                className={`flex items-center justify-between px-4 py-3 rounded-xl border border-blue-100 mb-2 transition cursor-pointer
                        ${
                            video.status === "done"
                                ? "bg-blue-50 border border-blue-500"
                                : "bg-white hover:bg-blue-50"
                        }
                    `}
                                            >
                                                <div>
                                                    <div className="font-semibold mb-1 text-gray-900">
                                                        {video.title}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {video.duration}
                                                    </div>
                                                </div>
                                                <div
                                                    className={`flex items-center justify-center w-9 h-9 rounded-full ${
                                                        video.status === "done"
                                                            ? "bg-blue-500"
                                                            : "bg-blue-50"
                                                    }`}
                                                >
                                                    <Play
                                                        className={`w-5 h-5 ${
                                                            video.status ===
                                                            "done"
                                                                ? "text-white"
                                                                : "text-blue-500"
                                                        }`}
                                                    />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-2 font-semibold text-gray-700 text-base">
                                Resources
                            </div>
                            <div className="text-sm text-gray-500 mb-4">
                                Downloadable materials and useful links
                            </div>
                            <div className="mb-4">
                                <div className="font-semibold text-gray-600 mb-2">
                                    Course Materials
                                </div>
                                <div className="flex flex-col gap-3">
                                    {resources.materials.map((mat, idx) => (
                                        <a
                                            key={idx}
                                            href={mat.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 rounded-xl border border-blue-100 bg-white hover:bg-blue-50 transition"
                                        >
                                            <div>
                                                <div className="font-medium text-gray-800">
                                                    {mat.title}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {mat.type} - {mat.size}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500">
                                                <Download className="w-5 h-5 text-white" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-600 mb-2">
                                    Useful Links
                                </div>
                                <div className="flex flex-col gap-3">
                                    {resources.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 rounded-xl border border-blue-100 bg-white hover:bg-blue-50 transition"
                                        >
                                            <div>
                                                <div className="font-medium text-gray-800">
                                                    {link.title}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {link.url}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500">
                                                <ExternalLink className="w-5 h-5 text-white" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
