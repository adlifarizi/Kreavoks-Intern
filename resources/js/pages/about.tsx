"use client";

import { Head, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import type { SharedData } from "@/types";
import { useEffect, useRef, useState } from "react";
import HeroAboutSection from "@/components/sections/about/HeroAboutSection";
import TimelineSection from "@/components/sections/about/TimelineSection";
import MissionVisionSection from "@/components/sections/about/MissionVisionSection";
import AdvantagesSection from "@/components/sections/about/AdvantagesSection";
import TeamSection from "@/components/sections/about/TeamSection";

export default function About() {
    const { auth } = usePage<SharedData>().props;

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Refs for scroll animations
    const heroRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const missionVisionRef = useRef<HTMLDivElement>(null);
    const advantagesRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    // const ctaRef = useRef<HTMLDivElement>(null);

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
        const refs = [
            heroRef,
            storyRef,
            missionVisionRef,
            advantagesRef,
            teamRef,
            // ctaRef,
        ];

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
            <Head title="About" />
            <div
                className={`flex min-h-screen flex-col bg-white text-black transition-opacity duration-500 ${
                    isPageLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Hero Section */}
                <HeroAboutSection ref={heroRef} />

                {/* Timeline Section */}
                <TimelineSection ref={storyRef} />

                {/* Mission & Vision */}
                <MissionVisionSection ref={missionVisionRef} />

                {/* Why Kreavoks */}
                <AdvantagesSection ref={advantagesRef} />

                {/* Team Section */}
                <TeamSection ref={teamRef} />

                {/* CTA Section
                <section ref={ctaRef} className="py-16 bg-gray-50 opacity-0">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            Yellow circle accent
                            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-yellow-300/30"></div>
                            <div className="absolute left-1/2 bottom-0 w-24 h-24 rounded-full bg-blue-400/30"></div>

                            <div className="relative z-10 max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Siap Bekerja Sama dengan Kami?
                                </h2>
                                <p className="text-blue-50 mb-8 text-lg">
                                    Hubungi kami untuk mendiskusikan bagaimana
                                    Kreavoks dapat membantu bisnis atau karir
                                    digital Anda.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-6 py-3 bg-yellow-300 text-blue-800 font-semibold rounded-full hover:bg-yellow-400 cursor-pointer hover:scale-[1.02] transition duration-300">
                                        <i className="fa-solid fa-envelope mr-2"></i>{" "}
                                        Hubungi Kami
                                    </button>
                                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 cursor-pointer hover:scale-[1.02] transition duration-300">
                                        Lihat Layanan Kami
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </AppLayout>
    );
}
