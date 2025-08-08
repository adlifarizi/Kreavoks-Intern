"use client";

// External packages
import { useState, useEffect, useRef } from "react";
import { Head, usePage, useForm } from "@inertiajs/react";
import CountUp from "react-countup";

// Layouts
import AppLayout from "@/layouts/app-layout";

// Types
import type {
    Event,
    ServicePackage,
    Testimonial,
    SharedData,
    Mentor,
} from "@/types";

// Components
import HeroLabels from "@/components/HeroLabels";

// Sections
import CollaborationSection from "@/components/sections/home/CollaborationSection";
import YouTubeSection from "@/components/sections/home/YoutubeSection";
import ServiceSection from "@/components/sections/home/ServiceSection";
import PromoSection from "@/components/sections/home/PromoSection";
import RekomendasiSection from "@/components/sections/home/RekomendasiSection";
import WhyKreavoksSection from "@/components/sections/home/WhyKreavoksSection";
import ServicePackageSection from "@/components/sections/home/ServicePackageSection";
import ConsultationSection from "@/components/sections/home/ConsultationSection";
import ListMentorSection from "@/components/sections/home/ListMentorSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import CTAMentorSection from "@/components/sections/home/CTAMentorSection";

export default function Home() {
    const { auth } = usePage<SharedData>().props;
    const { events } = usePage<SharedData & { events: Event[] }>().props;
    const { servicePackages } = usePage<
        SharedData & {
            servicePackages: Record<
                "Website" | "Mobile App" | "Design",
                ServicePackage[]
            >;
        }
    >().props;
    const { testimonials } = usePage<
        SharedData & { testimonials: Testimonial[] }
    >().props;
    const { mentors } = usePage<SharedData & { mentors: Mentor[] }>().props;
    const { post } = useForm();

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    // Refs for scroll animations
    const heroRef = useRef<HTMLDivElement>(null);
    const companiesRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const serviceRef = useRef<HTMLDivElement>(null);
    const promoRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<HTMLDivElement>(null);
    const packagesRef = useRef<HTMLDivElement>(null);
    const whyRef = useRef<HTMLDivElement>(null);
    const consultationRef = useRef<HTMLDivElement>(null);
    const listMentorRef = useRef<HTMLDivElement>(null);
    const testimonialRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const logout = () => {
        post("/logout");
    };

    const [animate, setAnimate] = useState(false);

    // Page load animation
    useEffect(() => {
        setIsPageLoaded(true);

        // Set up intersection observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");

                        // ✅ Khusus untuk section mentor
                        if (entry.target === listMentorRef.current) {
                            setAnimate(true);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe elements
        const refs = [
            heroRef,
            companiesRef,
            videoRef,
            serviceRef,
            promoRef,
            eventsRef,
            packagesRef,
            whyRef,
            consultationRef,
            listMentorRef,
            testimonialRef,
            ctaRef,
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
            <Head title="Home" />
            <div
                className={`flex min-h-screen flex-col bg-white text-black transition-opacity duration-500 ${
                    isPageLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Section 1: Hero */}
                <section
                    ref={heroRef}
                    className="relative mb-8 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-0"
                >
                    {/* 1) Lapisan fading overlay full-width */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white/50 pointer-events-none"></div>
                    {/* 2) Wrapper container untuk membatasi lebar konten */}
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center gap-8 relative z-10">
                        {/* Left Content */}
                        <div className="px-6 md:px-12 lg:px-16 py-12 flex flex-col items-start gap-4">
                            <p className="text-blue-500 text-md md:text-base">
                                <span className="font-bold">No.1</span> Agensi
                                Digitalisasi dan Pemberdayaan Skill
                            </p>
                            <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-black leading-tight transition-transform duration-700 hover:scale-105">
                                Masa Depan{" "}
                                <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                                    Digital
                                </span>{" "}
                                Dimulai dari{" "}
                                <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                                    Sini.
                                </span>
                            </h1>
                            <p className="text-gray-600 max-w-xl">
                                Bersama kami, ubah ide Anda menjadi solusi
                                kreatif yang relevan. Dari{" "}
                                <span className="font-medium">
                                    pembuatan software
                                </span>
                                , <span className="font-medium">desain UI</span>{" "}
                                hingga{" "}
                                <span className="font-medium">
                                    pelatihan skill digital
                                </span>
                                , kami siap membantu Anda untuk masa depan
                                teknologi.
                            </p>
                            <div className="flex items-center gap-8 mt-4">
                                <button className="flex items-center gap-2 px-6 py-2 text-blue-500 font-semibold bg-blue-50 border border-blue-500 rounded-full hover:scale-105 transition duration-300 hover:shadow-md active:scale-95">
                                    Ayo Mulai{" "}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                                <button className="flex items-center gap-2 text-blue-500 font-semibold hover:scale-105 transition duration-300 active:scale-95">
                                    <i className="fa-solid fa-phone"></i>
                                    <span className="underline">
                                        Hubungi Kami
                                    </span>
                                </button>
                            </div>

                            {/* Counter */}
                            <div className="py-6 mt-6 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white sm:border-none border border-blue-200 shadow-lg sm:shadow-none rounded-2xl gap-4 sm:gap-0">
                                <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:border-none border-b border-blue-100 pb-4 sm:pb-0 sm:mb-0 w-full sm:w-auto">
                                    <p className="font-semibold text-blue-500 text-xl md:text-2xl">
                                        <CountUp end={100} duration={3} />+
                                    </p>
                                    <p className="font-normal text-sm md:text-base">
                                        Project Selesai
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:border-none border-b border-blue-100 pb-4 sm:pb-0 sm:mb-0 w-full sm:w-auto">
                                    <p className="font-semibold text-blue-500 text-xl md:text-2xl">
                                        <CountUp end={200} duration={3} />+
                                    </p>
                                    <p className="font-normal text-sm md:text-base">
                                        Program Belajar
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center sm:text-left sm:items-start w-full sm:w-auto">
                                    <p className="font-semibold text-blue-500 text-xl md:text-2xl">
                                        <CountUp
                                            end={2.8}
                                            duration={3}
                                            decimals={1}
                                            suffix="k"
                                        />
                                        +
                                    </p>
                                    <p className="font-normal text-sm md:text-base">
                                        Pengguna Aktif
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content: gambar full-width di dalam container */}
                        <div className="relative px-6 md:px-12 lg:px-16 flex items-center justify-center group">
                            {/* Background image absolute - no animation */}
                            <img
                                src="/images/backgrounds/HeroBg.png"
                                alt="Background"
                                className="absolute -top-30 md:-top-48 right-10 w-full md:max-w-[800px] h-auto group-hover:scale-95 transition-transform duration-500"
                            />
                            {/* Hero foreground image */}
                            <img
                                src="/images/hero-people.png"
                                alt="Hero"
                                className="relative w-full md:max-w-[600px] h-auto -left-6 animate-float group-hover:scale-105 transition-transform duration-500"
                            />
                            <HeroLabels />
                        </div>
                    </div>
                </section>

                {/* Section 2: Collaboration in Unity */}
                <CollaborationSection ref={companiesRef} />

                {/* Section 3: Youtube Introduction */}
                <YouTubeSection
                    ref={videoRef}
                    videoId="g4XCwjCpVIs"
                    title="Introduction Video"
                />

                {/* Section 4: Service */}
                <ServiceSection ref={serviceRef} />

                {/* Section 5: Promo */}
                <PromoSection ref={promoRef} events={events} />

                {/* Section 6: Rekomendasi */}
                <RekomendasiSection ref={eventsRef} events={events} />

                {/* Section 7: Service Packages */}
                <section ref={packagesRef} className="py-10">
                    <div className="mx-auto">
                        <ServicePackageSection
                            servicePackages={servicePackages}
                        />
                    </div>
                </section>

                {/* Section 8: Kenapa Kreavoks */}
                <WhyKreavoksSection ref={whyRef} />

                {/* Section 9: CTA Konsultasi */}
                <ConsultationSection ref={consultationRef} />

                {/* Section 10: List Mentor */}
                <ListMentorSection
                    ref={listMentorRef}
                    animate={animate}
                    mentors={mentors}
                />

                {/* Section 11: Testimonial */}
                <TestimonialSection
                    ref={testimonialRef}
                    testimonials={testimonials}
                />

                {/* Section 12: CTA Mentor */}
                <CTAMentorSection ref={ctaRef} />
            </div>
        </AppLayout>
    );
}
