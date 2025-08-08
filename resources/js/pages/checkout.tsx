import AppLayout from "@/layouts/app-layout";
import { Head, usePage } from "@inertiajs/react";
import type { Course, Event } from "@/types";
import { Wallet } from "lucide-react";

export default function CheckoutPage() {
    // Ambil course atau event dari props
    const { course, event } = usePage<{ course?: Course; event?: Event }>().props;
    const data = course || event;

    return (
        <AppLayout>
            <Head title="Checkout" />
            <div className="w-full mx-auto py-12 px-4">
                <h1 className="text-xl md:text-4xl font-bold mb-2 text-center">Checkout</h1>
                <p className="text-gray-800 text-lg text-center mx-auto max-w-xl mb-10">
                    Yes! Kamu hampir sampai. Yuk, selesaikan pendaftaran dan mulai belajar skill digital bareng kami.
                </p>
                <div className="bg-white max-w-7xl mx-auto rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-10 items-start">
                    <img
                        src={data?.image || "/images/placeholders/course-card.png"}
                        alt={data?.title}
                        className="w-[600px] h-[400px] object-cover rounded-xl"
                    />
                    <div className="flex-1 w-full">
                        <div className="flex items-center gap-6 mb-2 md:mb-8">
                            <Wallet className="w-8 h-8" />
                            <span className="font-semibold text-lg md:text-2xl">Total Biaya</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-800 text-lg">{data?.title}</span>
                            <span className="text-lg">
                                Rp. {data?.price?.toLocaleString("id-ID")}
                            </span>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-semibold text-lg">Total</span>
                            <span className="font-bold text-lg">
                                Rp. {data?.price?.toLocaleString("id-ID")}
                            </span>
                        </div>
                        <button className="w-full px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
                            {course ? "Beli Kelas" : "Gabung Event"}
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}