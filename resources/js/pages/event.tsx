import { Head, router, usePage } from "@inertiajs/react";
import type { Event } from "@/types";
import AppLayout from "@/layouts/app-layout";
import { MapPin, Calendar, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import RecommendedSection from "@/components/sections/detail-program/RecommendedSection";

export default function EventPage() {
    const { event, events } = usePage<{ event: Event; events: Event[] }>()
        .props;

    // State untuk modal dan form
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // State untuk deskripsi panjang
    const [showMore, setShowMore] = useState(false);
    const words = (event.description ?? "").split(" ");
    const isLong = words.length > 100;
    const shortDesc = words.slice(0, 100).join(" ") + (isLong ? "..." : "");

    function formatBatchDate(start: string, end: string) {
        const monthNames = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
        const startDate = new Date(start);
        const endDate = new Date(end);

        if (
            startDate.getFullYear() === endDate.getFullYear() &&
            startDate.getMonth() === endDate.getMonth()
        ) {
            // Contoh: 10-11 April 2025
            return `${startDate.getDate()}-${endDate.getDate()} ${
                monthNames[startDate.getMonth()]
            } ${startDate.getFullYear()}`;
        } else {
            // Contoh: 30 April - 2 Mei 2025
            return `${startDate.getDate()} ${
                monthNames[startDate.getMonth()]
            } ${startDate.getFullYear()} - ${endDate.getDate()} ${
                monthNames[endDate.getMonth()]
            } ${endDate.getFullYear()}`;
        }
    }

    return (
        <AppLayout>
            <Head title={event.title ?? "Event Detail"} />
            <div className="flex items-center justify-center py-12 md:py-20 transition-opacity duration-500">
                <div className="w-full mx-auto px-2 md:px-10 lg:px-20 flex flex-col xl:flex-row gap-8">
                    {/* Left: Event Image */}
                    <div className="w-full xl:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={
                                event.image ||
                                "/images/placeholders/event-card.png"
                            }
                            alt={event.title}
                            className="w-full h-[220px] md:h-[320px] lg:h-[400px] xl:h-[500px] object-cover rounded-2xl transition-transform duration-500"
                        />
                    </div>
                    {/* Right: Event Info */}
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">
                            {event.title}
                        </h1>
                        <div className="flex items-center gap-2 text-gray-800 text-base mb-2">
                            <MapPin className="w-5 h-5" />
                            <span>
                                {event.mode === "online"
                                    ? "Zoom Meeting"
                                    : event.mode}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <img
                                src={
                                    event.speaker?.avatar ||
                                    "/images/placeholders/avatar.png"
                                }
                                alt={event.speaker?.name}
                                className="w-12 h-12 rounded-full object-cover border"
                            />
                            <div>
                                <div className="font-semibold">
                                    {event.speaker?.name}
                                </div>
                                <div className="text-gray-500 text-sm">
                                    {event.speaker?.role}
                                </div>
                            </div>
                        </div>
                        {/* Batches */}
                        {event.batches && (
                            <div className="flex gap-4 mt-4">
                                {event.batches.map((batch, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-xl p-4 flex-1 bg-white shadow-xl hover:scale-105 transition-transform duration-500"
                                    >
                                        <div className="font-semibold text-blue-500 text-lg md:text-2xl mb-1">
                                            {batch.name}
                                        </div>
                                        <div className="font-semibold text-gray-700 mb-2">
                                            Rp.{" "}
                                            {batch.price.toLocaleString(
                                                "id-ID"
                                            )}
                                        </div>
                                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 text-sm text-gray-600 mb-2">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4" />
                                                <span className="ml-1">
                                                    {formatBatchDate(
                                                        batch.start_date,
                                                        batch.end_date
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex items-center lg:ml-2">
                                                <Clock className="w-4 h-4" />
                                                <span className="ml-1">
                                                    {batch.time}
                                                </span>
                                            </div>
                                        </div>
                                        {batch.status && (
                                            <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-orange-500 text-orange-100">
                                                {batch.status === "limited"
                                                    ? "Limited"
                                                    : batch.status}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Gabung Sekarang Button */}
                        <button
                            className="mt-6 px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-600 transition cursor-pointer"
                            onClick={() => setShowModal(true)}
                        >
                            Gabung Sekarang
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Popover */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">
                            Pendaftaran Event
                        </h2>
                        <div className="mb-4 text-lg font-medium">
                            {event.title}
                        </div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Redirect ke halaman checkout event
                                router.visit(
                                    `/program/detail-event/${event.slug}/checkout`
                                );
                                setShowModal(false);
                            }}
                        >
                            <div className="mb-3">
                                <label className="font-bold block mb-1">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Nama Peserta"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="font-bold block mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="namapeserta@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    className="flex-1 border border-blue-500 text-blue-500 font-semibold rounded-lg py-2 hover:bg-blue-50 transition cursor-pointer"
                                    onClick={() => setShowModal(false)}
                                >
                                    Tutup
                                </button>
                                <button
                                    type="submit"
                                    className="flex-2 bg-blue-500 text-white font-semibold rounded-lg py-2 hover:bg-blue-600 transition cursor-pointer"
                                >
                                    Lanjutkan Pembayaran
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Info Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
                {/* Benefit */}
                {event.benefit && event.benefit.length > 0 && (
                    <div className="mb-6 md:mb-8">
                        <h2 className="font-semibold text-xl mb-4">Benefit</h2>
                        <div className="flex flex-wrap gap-3">
                            {event.benefit.map((b: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:text-white font-medium bg-white hover:bg-blue-500 transition"
                                >
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Description */}
                {event.description && (
                    <div className="flex flex-col gap-2 mb-12 text-base md:text-lg">
                        <div className="text-gray-800">
                            {showMore || !isLong
                                ? event.description
                                : shortDesc}
                        </div>
                        {isLong && (
                            <div className="flex justify-center">
                                <button
                                    className="text-blue-500 font-semibold flex items-center gap-1"
                                    onClick={() => setShowMore((v) => !v)}
                                >
                                    {showMore ? "Show less" : "Show more"}{" "}
                                    <ChevronDown
                                        className={
                                            showMore
                                                ? "rotate-180 transition"
                                                : ""
                                        }
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* What you'll learn */}
                {event.learn && event.learn.length > 0 && (
                    <div className="mb-6 md:mb-8">
                        <h2 className="font-semibold text-xl mb-4">
                            What you’ll learn
                        </h2>
                        <ul className="space-y-4">
                            {event.learn.map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-blue-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Recommended Courses Section */}
            <RecommendedSection
                items={events}
                currentSlug={event.slug}
                type="event"
                title="Recommended Events"
            />
        </AppLayout>
    );
}
