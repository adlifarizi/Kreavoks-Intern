"use client";

import { useState, useEffect, useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import type { Portfolio, SharedData } from "@/types";
import PortfolioCard from "@/components/cards/PortfolioCard";

export default function Portfolio() {
    <Head title="Kreavoks | Portfolio" />;
    const { auth } = usePage<SharedData>().props;
    const { portfolios } = usePage<SharedData & { portfolios: Portfolio[] }>()
        .props || { portfolios: [] };

    // State for filtering and pagination
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Categories for filtering - dinamis dari data
    const categories = [
        "all",
        ...new Set(portfolios.map((portfolio) => portfolio.category)),
    ];

    // Filter items based on search query and category
    const filteredItems = portfolios.filter(
        (portfolio) =>
            (selectedCategory === "all" ||
                portfolio.category === selectedCategory) &&
            (portfolio.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
                portfolio.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                portfolio.client
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()))
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory]);

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Refs for scroll animations
    const heroRef = useRef<HTMLDivElement>(null);
    const mainContentRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Page load animation
    useEffect(() => {
        setIsPageLoaded(true);

        // Set up intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe elements
        const refs = [heroRef, mainContentRef, ctaRef];

        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <AppLayout>
            <Head title="Portfolio - Kreavoks" />
            <div
                className={`flex min-h-screen flex-col bg-white text-black transition-opacity duration-500 ${
                    isPageLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Categories Filter */}
                <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-8 flex flex-wrap gap-2 items-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                                selectedCategory === category
                                    ? "bg-blue-500 text-white"
                                    : "cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {category === "all" ? "All Projects" : category}
                        </button>
                    ))}
                </div>

                {/* Hero Section */}
                <section
                    ref={heroRef}
                    className="w-full max-w-[90vw] mx-auto px-6 md:px-12 lg:px-16 py-12 flex justify-center mt-8"
                >
                    <div className="w-full rounded-[40px] overflow-hidden relative flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-50 px-4 lg:px-16 py-4 md:py-8 shadow-lg">
                        {/* Left: Text */}
                        <div className="flex-[2] flex flex-col justify-center items-start z-10">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Portofolio Karya Terbaik Kami
                            </h1>
                            <p className="text-md md:text-lg text-blue-50 max-w-xl">
                                Lihat berbagai proyek yang telah kami kerjakan
                                untuk klien dari berbagai industri setiap proyek
                                dirancang dengan perhatian terhadap detail fokus
                                pada kebutuhan pengguna
                            </p>
                        </div>
                        {/* Right: Image */}
                        <div className="hidden flex-1 md:flex justify-end items-center z-10">
                            <img
                                src="/images/portfolio-hero-people.png"
                                alt="Portfolio Hero"
                                className="object-cover md:-mb-10 h-full"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -right-30 top-10 w-1/2 h-1/5 rotate-[50deg] bg-yellow-300 rounded-full blur-xl"></div>
                            <div className="absolute right-0 bottom-10 w-1/3 h-1/5 rotate-[15deg] bg-yellow-300 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section
                    ref={mainContentRef}
                    className="container mx-auto px-6 md:px-12 lg:px-16 py-12 opacity-0"
                >
                    {/* Search and Results Count */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
                        {/* Results Count */}
                        <div className="w-full md:w-auto overflow-x-auto hide-scrollbar">
                            <div className="text-gray-600">
                                Menampilkan {filteredItems.length} portofolio
                            </div>
                        </div>
                        {/* Search */}
                        <div className="w-full md:w-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search portfolio..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fa-solid fa-search text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedItems.length > 0 ? (
                            paginatedItems.map((portfolio) => (
                                <PortfolioCard
                                    key={portfolio.id}
                                    portfolio={portfolio}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold mb-2">
                                    No results found
                                </h3>
                                <p className="text-gray-600">
                                    Try adjusting your search or filter to find
                                    what you're looking for.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() =>
                                        setCurrentPage(
                                            Math.max(1, currentPage - 1)
                                        )
                                    }
                                    disabled={currentPage === 1}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                                >
                                    <i className="fa-solid fa-chevron-left text-sm"></i>
                                </button>

                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1
                                ).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                                            currentPage === page
                                                ? "bg-blue-500 text-white"
                                                : "border border-gray-300 hover:bg-gray-100"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() =>
                                        setCurrentPage(
                                            Math.min(
                                                totalPages,
                                                currentPage + 1
                                            )
                                        )
                                    }
                                    disabled={currentPage === totalPages}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                                >
                                    <i className="fa-solid fa-chevron-right text-sm"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </section>

                {/* CTA Section */}
                <section
                    ref={ctaRef}
                    className="w-full max-w-[90vw] mx-auto px-6 md:px-12 lg:px-16 py-12 flex justify-center mt-8"
                >
                    <div className="w-full rounded-[40px] overflow-hidden relative flex flex-col md:flex-row items-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-50 px-4 lg:px-16 py-4 md:py-8 shadow-lg">
                        {/* Left: Text */}
                        <div className="flex-[2] flex flex-col justify-center items-center md:items-start z-10">
                            <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center md:text-left mb-6 leading-tight">
                                Siap Bekerjasama Dengan Kami?
                            </h1>
                            <p className="text-md md:text-lg text-blue-50 text-center md:text-left max-w-xl">
                                Hubungi kami untuk mendiskusikan bagaimana
                                Kreavoks dapat membantu bisnis atau karir
                                digital anda
                            </p>
                            <button className="flex items-center gap-2 px-6 py-2 mt-6 text-blue-500 font-semibold bg-blue-50 border border-blue-500 rounded-full hover:scale-105 transition duration-300 hover:shadow-md active:scale-95">
                                Mulai Sekarang{" "}
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                        {/* Right: Image */}
                        <div className="hidden flex-1 md:flex justify-end items-center z-10">
                            <img
                                src="/images/portfolio-cta-people.png"
                                alt="Portfolio CTA"
                                className="object-cover md:-mb-10 h-full"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
