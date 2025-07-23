import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";
import ProgramDropdown from "./ProgramDropdown";
import "flag-icons/css/flag-icons.min.css";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();
    const [isScrolled, setIsScrolled] = useState(false);

    // Language dropdown state
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    const [lang, setLang] = useState("id");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close language dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                langRef.current &&
                !langRef.current.contains(e.target as Node)
            ) {
                setLangOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <nav
            className={`px-5 md:px-8 py-5 flex justify-between items-center sticky top-0 w-full z-50 shadow-none transition-all duration-300 ${
                isScrolled
                    ? "bg-white shadow-md"
                    : "bg-gradient-to-r from-white to-transparent"
            }`}
        >
            {/* Logo */}
            <Link href="/">
                <img src="/images/logo-color.svg" className="h-5 md:h-6" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
                <Link
                    href="/"
                    className={`px-4 py-1 rounded-full hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${
                        url === "/"
                            ? "text-blue-500 font-semibold bg-blue-50"
                            : "text-gray-800"
                    }`}
                >
                    Home
                </Link>
                <ProgramDropdown />
                <Link
                    href="/portfolio"
                    className={`px-4 py-1 rounded-full hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${
                        url === "/portfolio"
                            ? "text-blue-500 font-semibold bg-blue-50"
                            : "text-gray-800"
                    }`}
                >
                    Portfolio
                </Link>
                <Link
                    href="/about"
                    className={`px-4 py-1 rounded-full hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${
                        url === "/about"
                            ? "text-blue-500 font-semibold bg-blue-50"
                            : "text-gray-800"
                    }`}
                >
                    About us
                </Link>
            </div>

            {/* Languange & Auth */}
            <div className="hidden lg:flex space-x-4">
                {/* Language Selector */}
                <div className="relative" ref={langRef}>
                    <button
                        onClick={() => setLangOpen(!langOpen)}
                        className="flex items-center space-x-2 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                    >
                        {lang === "id" ? (
                            <>
                                <span className="fi fi-id w-5 h-5"></span>
                                <span className="text-sm text-gray-600">
                                    ID
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="fi fi-gb w-5 h-5"></span>
                                <span className="text-sm text-gray-600">
                                    EN
                                </span>
                            </>
                        )}
                        <i
                            className={`fa-solid fa-chevron-down text-xs ml-1 transition-transform ${
                                langOpen ? "rotate-180" : ""
                            }`}
                        ></i>
                    </button>
                    {langOpen && (
                        <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg z-50 py-2">
                            <button
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                onClick={() => {
                                    setLang("id");
                                    setLangOpen(false);
                                    // Logic ganti bahasa ke Indonesia
                                }}
                            >
                                <span className="fi fi-id w-5 h-5"></span>{" "}
                                Bahasa
                            </button>
                            <button
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                onClick={() => {
                                    setLang("en");
                                    setLangOpen(false);
                                    // Logic ganti bahasa ke English
                                }}
                            >
                                <span className="fi fi-gb w-5 h-5"></span>{" "}
                                English
                            </button>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center p-2 space-x-1 bg-blue-50 inset-shadow-sm inset-shadow-gray-400/80 rounded-full">
                    <Link
                        href="#"
                        className="px-3 py-1 rounded-full font-medium text-blue-500 hover:bg-white"
                    >
                        Sign up
                    </Link>
                    <Link
                        href="#"
                        className="px-3 py-1 rounded-full font-medium text-white bg-blue-500 hover:bg-blue-600"
                    >
                        Sign in
                    </Link>
                </div>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
                onClick={toggleMenu}
                className="lg:hidden text-xl text-gray-500"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Mobile Sidebar (bisa discroll) */}
            <div
                className={`fixed inset-y-0 right-0 w-2/3 bg-white shadow-lg transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } overflow-y-auto max-h-screen`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-gray-500 text-xl">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col items-start gap-2 px-6 pb-8">
                    <Link
                        href="/"
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-all duration-200 ${
                            url === "/"
                                ? "text-blue-500 font-semibold bg-blue-50"
                                : "text-gray-800"
                        }`}
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <ProgramDropdown mobile />
                    <Link
                        href="/portfolio"
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-all duration-200 ${
                            url === "/portfolio"
                                ? "text-blue-500 font-semibold bg-blue-50"
                                : "text-gray-800"
                        }`}
                        onClick={toggleMenu}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/about"
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-all duration-200 ${
                            url === "/about"
                                ? "text-blue-500 font-semibold bg-blue-50"
                                : "text-gray-800"
                        }`}
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
