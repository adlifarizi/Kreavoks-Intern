"use client";

import { useState, useEffect, useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import type { Course, Event, SharedData } from "@/types";
import CourseCard from "@/components/cards/CourseCard";
import EventCard from "@/components/cards/EventCard";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Search,
    SlidersHorizontal,
    X,
} from "lucide-react";
import ProgramHero from "@/components/sections/program/ProgramHero";
import type { HeroTab } from "@/components/sections/program/ProgramHero";
import ProgramCTA from "@/components/sections/program/ProgramCTA";

export default function Program() {
    <Head title="Kreavoks | Program" />;
    const { auth } = usePage<SharedData>().props;
    const { events } = usePage<SharedData & { events: Event[] }>().props;
    const { courses } = usePage<SharedData & { courses: Course[] }>().props;

    // State for filtering and pagination
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [activeTab, setActiveTab] = useState<HeroTab>("courses");
    const [currentPage, setCurrentPage] = useState(1);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [priceSort, setPriceSort] = useState<"none" | "asc" | "desc">("none");
    const [ratingFilter, setRatingFilter] = useState<number | null>(null);
    const itemsPerPage = 9;

    // Categories for filtering - diambil dari data yang ada
    const courseCategories = [
        "all",
        ...new Set(courses.map((course) => course.category)),
    ];
    const eventTypes = ["all", ...new Set(events.map((event) => event.type))];

    // Filter and sort items based on all criteria
    const filteredItems = (() => {
        let items =
            activeTab === "courses"
                ? courses.filter(
                      (course) =>
                          (selectedCategory === "all" ||
                              course.category === selectedCategory) &&
                          course.title
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                  )
                : events.filter(
                      (event) =>
                          (selectedCategory === "all" ||
                              event.type === selectedCategory) &&
                          event.title
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                  );

        // Apply rating filter for courses
        if (activeTab === "courses" && ratingFilter !== null) {
            items = (items as Course[]).filter(
                (item) => item.rating >= ratingFilter
            );
        }

        // Apply price sorting
        if (priceSort !== "none") {
            items =
                activeTab === "courses"
                    ? ([...items].sort((a, b) => {
                          const priceA = (a as Course).price;
                          const priceB = (b as Course).price;
                          return priceSort === "asc"
                              ? priceA - priceB
                              : priceB - priceA;
                      }) as Course[])
                    : ([...items].sort((a, b) => {
                          const priceA = (a as Event).price;
                          const priceB = (b as Event).price;
                          return priceSort === "asc"
                              ? priceA - priceB
                              : priceB - priceA;
                      }) as Event[]);
        }

        return items;
    })();

    // Calculate pagination
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, activeTab, priceSort, ratingFilter]);

    // Reset filters when tab changes
    useEffect(() => {
        setSelectedCategory("all");
        setPriceSort("none");
        setRatingFilter(null);
    }, [activeTab]);

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

    // Function to clear all filters
    const clearAllFilters = () => {
        setSearchQuery("");
        setSelectedCategory("all");
        setPriceSort("none");
        setRatingFilter(null);
    };

    return (
        <AppLayout>
            <Head title="Program - Kreavoks" />
            <style>{`
        .animate-in {
          animation: fadeIn 0.6s ease forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-wander-1 {
          animation: wander1 15s ease-in-out infinite;
        }
        
        .animate-wander-2 {
          animation: wander2 20s ease-in-out infinite;
        }
        
        @keyframes wander1 {
          0% { transform: translate(0, 0); }
          25% { transform: translate(20px, 20px); }
          50% { transform: translate(0, 40px); }
          75% { transform: translate(-20px, 20px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes wander2 {
          0% { transform: translate(0, 0); }
          33% { transform: translate(-30px, -30px); }
          66% { transform: translate(30px, -30px); }
          100% { transform: translate(0, 0); }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .text-gradient {
          background: linear-gradient(to right, #3b82f6, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .bg-pattern {
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.15) 2px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(59, 130, 246, 0.15) 2px, transparent 0);
          background-size: 100px 100px;
        }
      `}</style>

            <div
                className={`flex min-h-screen flex-col bg-white text-black transition-opacity duration-500 ${
                    isPageLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Dynamic Hero Section */}
                <ProgramHero ref={heroRef} activeTab={activeTab} />

                {/* Main Content with Two Column Layout */}
                <section
                    ref={mainContentRef}
                    className="container mx-auto px-6 md:px-12 lg:px-16 py-12 opacity-0"
                >
                    {/* Tabs - Always visible at the top */}
                    <div className="flex justify-start mb-8">
                        <div className="flex gap-4 bg-transparent">
                            <button
                                onClick={() => setActiveTab("courses")}
                                className={`px-7 py-2 rounded-full border text-base font-semibold transition-all duration-200 flex items-center ${
                                    activeTab === "courses"
                                        ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                                        : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                                }`}
                            >
                                Courses
                                {activeTab === "courses" && (
                                    <span className="ml-2 w-2 h-2 bg-white rounded-full inline-block"></span>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab("events")}
                                className={`px-7 py-2 rounded-full border text-base font-semibold transition-all duration-200 ${
                                    activeTab === "events"
                                        ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                                        : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                                }`}
                            >
                                Event & Workshop
                                {activeTab === "events" && (
                                    <span className="ml-2 w-2 h-2 bg-white rounded-full inline-block"></span>
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab("bootcamp")}
                                className={`px-7 py-2 rounded-full border text-base font-semibold transition-all duration-200 ${
                                    activeTab === "bootcamp"
                                        ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                                        : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
                                }`}
                            >
                                Bootcamp
                                {activeTab === "bootcamp" && (
                                    <span className="ml-2 w-2 h-2 bg-white rounded-full inline-block"></span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column - Filters */}
                        <div
                            className={`${
                                showMobileFilters ? "block" : "hidden"
                            } lg:block lg:w-1/4 space-y-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm self-start sticky top-24`}
                        >
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                                <h3 className="font-semibold text-gray-800 text-lg">
                                    Filters
                                </h3>
                                <button
                                    onClick={clearAllFilters}
                                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    Clear All
                                </button>
                            </div>

                            {/* Category Filter */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-gray-700">
                                    Categories
                                </h3>
                                <div className="space-y-1 max-h-48 overflow-y-auto hide-scrollbar">
                                    {(activeTab === "courses"
                                        ? courseCategories
                                        : eventTypes
                                    ).map((category) => (
                                        <button
                                            key={category}
                                            onClick={() =>
                                                setSelectedCategory(category)
                                            }
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex justify-between items-center ${
                                                selectedCategory === category
                                                    ? "bg-blue-50 text-blue-600 font-medium"
                                                    : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                        >
                                            <span>
                                                {category === "all"
                                                    ? `All ${
                                                          activeTab ===
                                                          "courses"
                                                              ? "Categories"
                                                              : "Types"
                                                      }`
                                                    : category}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="space-y-2">
                                <h3 className="font-medium text-gray-700">
                                    Price
                                </h3>
                                <div className="space-y-1">
                                    <button
                                        onClick={() => setPriceSort("none")}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex justify-between items-center ${
                                            priceSort === "none"
                                                ? "bg-blue-50 text-blue-600 font-medium"
                                                : "hover:bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        <span>All Prices</span>
                                    </button>
                                    <button
                                        onClick={() => setPriceSort("asc")}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex justify-between items-center ${
                                            priceSort === "asc"
                                                ? "bg-blue-50 text-blue-600 font-medium"
                                                : "hover:bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        <span>Price: Low to High</span>
                                    </button>
                                    <button
                                        onClick={() => setPriceSort("desc")}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex justify-between items-center ${
                                            priceSort === "desc"
                                                ? "bg-blue-50 text-blue-600 font-medium"
                                                : "hover:bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        <span>Price: High to Low</span>
                                    </button>
                                </div>
                            </div>

                            {/* Rating Filter - Only for Courses */}
                            {activeTab === "courses" && (
                                <div className="space-y-2">
                                    <h3 className="font-medium text-gray-700">
                                        Rating
                                    </h3>
                                    <div className="space-y-1">
                                        <button
                                            onClick={() =>
                                                setRatingFilter(null)
                                            }
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex justify-between items-center ${
                                                ratingFilter === null
                                                    ? "bg-blue-50 text-blue-600 font-medium"
                                                    : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                        >
                                            <span>All Ratings</span>
                                        </button>
                                        {[4, 3, 2, 1].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() =>
                                                    setRatingFilter(rating)
                                                }
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex justify-between items-center ${
                                                    ratingFilter === rating
                                                        ? "bg-blue-50 text-blue-600 font-medium"
                                                        : "hover:bg-gray-100 text-gray-700"
                                                }`}
                                            >
                                                <div className="flex items-center">
                                                    <span>{rating}+ </span>
                                                    <div className="flex ml-2">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className={`w-4 h-4 ${
                                                                        i <
                                                                        rating
                                                                            ? "text-yellow-400"
                                                                            : "text-gray-300"
                                                                    }`}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Content */}
                        <div className="lg:w-3/4">
                            {/* Mobile Filter Toggle Button */}
                            <div className="lg:hidden flex justify-between items-center mb-4">
                                <button
                                    onClick={() =>
                                        setShowMobileFilters(!showMobileFilters)
                                    }
                                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <SlidersHorizontal size={18} />
                                    <span>Filters</span>
                                    {showMobileFilters ? (
                                        <ChevronDown size={18} />
                                    ) : (
                                        <ChevronRight size={18} />
                                    )}
                                </button>

                                <div className="text-sm text-gray-600">
                                    {filteredItems.length}{" "}
                                    {activeTab === "courses"
                                        ? "courses"
                                        : "events"}
                                </div>
                            </div>

                            {/* Large Search Bar - Full Width Above Gallery */}
                            <div className="mb-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder={`Search for ${activeTab}...`}
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="w-full px-5 py-4 pl-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Search
                                            size={20}
                                            className="text-gray-400"
                                        />
                                    </div>
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                                        >
                                            <X size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Results Count and Sort - Desktop */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-gray-600">
                                    Showing {filteredItems.length}{" "}
                                    {activeTab === "courses"
                                        ? "courses"
                                        : "events"}
                                </div>

                                {/* Sort Dropdown for Desktop - Alternative to sidebar filters */}
                                <div className="relative inline-block">
                                    <select
                                        value={priceSort}
                                        onChange={(e) =>
                                            setPriceSort(
                                                e.target.value as
                                                    | "none"
                                                    | "asc"
                                                    | "desc"
                                            )
                                        }
                                        className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                    >
                                        <option value="none">
                                            Sort by: Featured
                                        </option>
                                        <option value="asc">
                                            Price: Low to High
                                        </option>
                                        <option value="desc">
                                            Price: High to Low
                                        </option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            </div>

                            {/* Grid of Items */}
                            {paginatedItems.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {paginatedItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-full transition-all duration-300 transform hover:-translate-y-1"
                                            style={{
                                                animationDelay: `${
                                                    index * 50
                                                }ms`,
                                            }}
                                        >
                                            {activeTab === "courses" ? (
                                                <CourseCard
                                                    course={item as Course}
                                                />
                                            ) : (
                                                <EventCard
                                                    event={item as Event}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-16 text-center bg-gray-50 rounded-xl">
                                    <div className="text-5xl mb-4 animate-bounce">
                                        🔍
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        No results found
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Try adjusting your search or filter to
                                        find what you're looking for.
                                    </p>
                                    <button
                                        onClick={clearAllFilters}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            )}

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
                                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300"
                                            aria-label="Previous page"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>

                                        {/* Show limited page numbers with ellipsis for many pages */}
                                        {Array.from(
                                            { length: totalPages },
                                            (_, i) => i + 1
                                        ).map((page) => {
                                            // Always show first page, last page, current page, and pages around current
                                            const shouldShowPage =
                                                page === 1 ||
                                                page === totalPages ||
                                                (page >= currentPage - 1 &&
                                                    page <= currentPage + 1);

                                            // Show ellipsis instead of some page numbers
                                            if (!shouldShowPage) {
                                                // Show ellipsis only once between groups of visible pages
                                                if (
                                                    page === 2 ||
                                                    page === totalPages - 1
                                                ) {
                                                    return (
                                                        <span
                                                            key={`ellipsis-${page}`}
                                                            className="w-10 h-10 flex items-center justify-center"
                                                        >
                                                            ...
                                                        </span>
                                                    );
                                                }
                                                return null;
                                            }

                                            return (
                                                <button
                                                    key={page}
                                                    onClick={() =>
                                                        setCurrentPage(page)
                                                    }
                                                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                                                        currentPage === page
                                                            ? "bg-blue-600 text-white transform scale-110 shadow-md"
                                                            : "border border-gray-300 hover:bg-gray-100"
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        })}

                                        <button
                                            onClick={() =>
                                                setCurrentPage(
                                                    Math.min(
                                                        totalPages,
                                                        currentPage + 1
                                                    )
                                                )
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }
                                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300"
                                            aria-label="Next page"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <ProgramCTA ref={ctaRef} />
            </div>
        </AppLayout>
    );
}
