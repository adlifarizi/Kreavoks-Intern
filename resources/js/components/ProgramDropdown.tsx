import { useEffect, useState, useRef } from "react";
import { Code, Video, Volume2, FolderSearch, ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";

const programItems = [
    {
        key: "software",
        label: "Jasa Pembuatan Software dan Design",
        desc: "Pengembangan & Desain Branding Profesional.",
        icon: <Code className="w-12 h-12 text-blue-500" />,
        image: "/images/program/software.png",
    },
    {
        key: "ecourse",
        label: "E-Course",
        desc: "Kursus online untuk pengembangan diri.",
        icon: <Video className="w-12 h-12 text-blue-500" />,
        image: "/images/program/ecourse.png",
    },
    {
        key: "event",
        label: "Event & Workshop",
        desc: "Gabung event & workshop eksklusif.",
        icon: <Volume2 className="w-12 h-12 text-blue-500" />,
        image: "/images/program/event.png",
    },
    {
        key: "bootcamp",
        label: "Bootcamp",
        desc: "Siap bersaing dengan bootcamp intensif.",
        icon: <FolderSearch className="w-12 h-12 text-blue-500" />,
        image: "/images/program/bootcamp.png",
        badge: "Coming Soon",
    },
];

export default function ProgramDropdown({ mobile = false, isActive = false }) {
    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(programItems[0].key);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mobile) {
            function handleClick(e: MouseEvent) {
                if (ref.current && !ref.current.contains(e.target as Node)) {
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClick);
            return () => document.removeEventListener("mousedown", handleClick);
        }
    }, [mobile]);

    const activeItem = programItems.find((item) => item.key === activeKey);

    // Mobile Version
    if (mobile) {
        return (
            <div className="relative w-full" ref={ref}>
                <button
                    onClick={() => setOpen(!open)}
                    className={`px-4 py-1 rounded-full flex items-center gap-2 hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${
                        open || isActive
                            ? "text-blue-500 font-semibold bg-blue-50"
                            : "text-gray-800"
                    } w-full`}
                >
                    Program
                    <i
                        className={`fa-solid fa-chevron-down text-xs transition-transform ${
                            open ? "rotate-180" : ""
                        }`}
                    ></i>
                </button>
                {open && (
                    <div className="mt-2 w-full bg-white rounded-xl shadow-lg z-50 py-2">
                        {programItems.map((item) => (
                            <Link
                                key={item.key}
                                href="/program"
                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Desktop Version
    return (
        <div
            className="relative"
            ref={ref}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                className={`px-4 py-1 rounded-full flex items-center gap-2 cursor-pointer hover:text-blue-500 hover:bg-blue-50 ${
                    open || isActive
                        ? "text-blue-500 font-semibold bg-blue-50"
                        : "text-gray-800"
                }`}
                tabIndex={0}
            >
                Program
                <i
                    className={`fa-solid fa-chevron-down transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                    }`}
                ></i>
            </button>
            {open && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 mt-20 bg-black/20 z-[90] pointer-events-none"
                        onClick={() => setOpen(false)}
                    ></div>
                    {/* Dropdown */}
                    <div className="fixed left-1/2 top-[100px] -translate-x-1/2 w-[90vw] max-w-[1200px] bg-white backdrop-blur-lg rounded-3xl shadow-2xl flex p-8 z-[100] transition-all duration-300">
                        {/* Left Menu */}
                        <div className="flex flex-col gap-4 flex-[0_0_440px] max-w-[440px]">
                            {programItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href="/program"
                                    onMouseEnter={() => setActiveKey(item.key)}
                                    className={`flex items-center gap-3 p-2 rounded-xl transition-all cursor-pointer ${
                                        activeKey === item.key
                                            ? "bg-blue-50"
                                            : "hover:bg-gray-50"
                                    }`}
                                >
                                    {item.icon}
                                    <div>
                                        <p
                                            className={`font-semibold ${
                                                activeKey === item.key
                                                    ? "text-blue-500"
                                                    : "text-gray-800"
                                            }`}
                                        >
                                            {item.label}
                                            {item.badge && (
                                                <span className="bg-yellow-300 text-xs font-medium px-2 py-0.5 rounded-full ml-2 text-blue-500">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Right Preview */}
                        <div className="flex-1 flex flex-col items-start justify-center mb-4">
                            <img
                                src={activeItem?.image}
                                alt=""
                                className="rounded-2xl w-full h-auto object-cover mb-2 md:mb-4 transition-all duration-300"
                            />
                            <Link
                                href="/program"
                                className="text-blue-500 font-medium text-xs md:text-sm flex items-center self-start md:-mt-10 hover:underline"
                            >
                                Pelajari Lebih Lanjut{" "}
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
