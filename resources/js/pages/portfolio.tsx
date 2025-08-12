"use client";

import { useState, useEffect, useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import type { Portfolio, SharedData } from "@/types";
import CategoryFilterPortfolio from "@/components/sections/portfolio/CategoryFilterPortfolio";
import HeroSection from "@/components/sections/portfolio/HeroSection";
import CtaSection from "@/components/sections/portfolio/CTASection";
import Searchbar from "@/components/sections/portfolio/Searchbar";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";

export default function Portfolio() {
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
            <Head title="Portfolio" />
            <div
                className={`flex min-h-screen flex-col bg-white text-black transition-opacity duration-500 ${
                    isPageLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Hero Section */}
                <HeroSection ref={heroRef} />

                {/* Filter & Searchbar */}
                <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-4 mt-6 mb-2">
                    <CategoryFilterPortfolio
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                        className="flex-1"
                    />
                    <div className="w-full md:w-96">
                        <Searchbar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <section
                    ref={mainContentRef}
                    className="container mx-auto px-6 md:px-12 lg:px-16 py-12 opacity-0"
                >
                    {/* Portfolio Grid */}
                    <PortfolioGrid
                        paginatedItems={paginatedItems}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </section>

                {/* CTA Section */}
                <CtaSection ref={ctaRef} />
            </div>
        </AppLayout>
    );
}
