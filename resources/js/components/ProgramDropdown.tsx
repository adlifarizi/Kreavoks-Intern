import { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";

const programItems = [
    {
        key: "software",
        label: "Jasa Pembuatan Software dan Design",
        desc: "Pengembangan & Desain Branding Profesional.",
        icon: "/images/icons/ProgramSoftware.svg",
        image: "/images/program/software.png",
        href: "/program/software",
    },
    {
        key: "ecourse",
        label: "E-Course",
        desc: "Kursus online untuk pengembangan diri.",
        icon: "/images/icons/ProgramECourse.svg",
        image: "/images/program/ecourse.png",
        href: "/program/ecourse",
    },
    {
        key: "event",
        label: "Event & Workshop",
        desc: "Gabung event & workshop eksklusif.",
        icon: "/images/icons/ProgramEvent.svg",
        image: "/images/program/event.png",
        href: "/program/event",
    },
    {
        key: "bootcamp",
        label: "Bootcamp",
        desc: "Siap bersaing dengan bootcamp intensif.",
        icon: "/images/icons/ProgramBootcamp.svg",
        image: "/images/program/bootcamp.png",
        href: "/program/bootcamp",
        badge: "Coming Soon",
    },
];

export default function ProgramDropdown({ mobile = false }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(programItems[0].key);
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

    const activeItem = programItems.find((item) => item.key === active);

    // Mobile Dropdown
    if (mobile) {
        return (
            <div className="relative w-full" ref={ref}>
                <button
                    onClick={() => setOpen(!open)}
                    className={`px-4 py-1 rounded-full flex items-center gap-2 hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${
                        open
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
                <div className={`${open ? "block" : "hidden"} w-full`}>
                    <div className="mt-2 w-full bg-white rounded-xl shadow-lg z-50 py-2">
                        {programItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop Dropdown
    return (
        <div
            className="relative"
            ref={ref}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                className={`px-4 py-1 rounded-full flex items-center gap-2 hover:text-blue-500 hover:bg-blue-50 ${
                    open
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
                        className="fixed inset-0 bg-black/30 z-[90]"
                        onClick={() => setOpen(false)}
                    ></div>
                    {/* Dropdown */}
                    <div className="fixed left-1/2 top-[100px] -translate-x-1/2 w-[90vw] max-w-[1200px] bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl flex p-8 z-[100] transition-all duration-300">
                        {/* Left menu */}
                        <div className="flex flex-col gap-4 flex-[0_0_440px] max-w-[440px]">
                            {programItems.map((item) => (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    onMouseEnter={() => setActive(item.key)}
                                    className={`flex items-center gap-3 p-2 rounded-xl transition-all cursor-pointer ${
                                        active === item.key
                                            ? "bg-blue-50"
                                            : "hover:bg-gray-50"
                                    }`}
                                >
                                    <img
                                        src={item.icon}
                                        className="w-12 h-12"
                                        alt=""
                                    />
                                    <div>
                                        <p
                                            className={`font-semibold ${
                                                active === item.key
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
                                </a>
                            ))}
                        </div>
                        {/* Right image & CTA */}
                        <div className="flex-1 flex flex-col items-start justify-center mb-4">
                            <img
                                src={activeItem?.image}
                                alt=""
                                className="rounded-2xl w-full h-auto object-cover mb-2 md:mb-4 transition-all duration-300"
                            />
                            <a
                                href={activeItem?.href}
                                className="text-blue-500 font-medium text-xs md:text-sm flex items-center self-start md:-mt-10 hover:underline"
                            >
                                Pelajari Lebih Lanjut{" "}
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
