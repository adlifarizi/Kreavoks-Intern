import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";
import { User, FileCheck, Star } from "lucide-react";

export default function OTP() {
    const { data, setData, post, processing, errors } = useForm({
        otp: ["", "", "", "", "", ""],
    });

    const inputsRef = Array.from({ length: 6 }, () =>
        useRef<HTMLInputElement>(null)
    );

    const handleChange = (idx: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...data.otp];
            newOtp[idx] = value;
            setData("otp", newOtp);
            if (value && idx < 5) {
                inputsRef[idx + 1].current?.focus();
            }
        }
    };

    const handleKeyDown = (
        idx: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Backspace" && !data.otp[idx] && idx > 0) {
            inputsRef[idx - 1].current?.focus();
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post("/otp");
    };

    return (
        <div>
            <Head title="Email Verification" />
            <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
                {/* Logo */}
                <img
                    src="/images/logo-color.svg"
                    alt="Kreavoks"
                    className="h-6 mb-8 mt-4"
                />

                {/* Stepper */}
                <div className="flex items-center justify-center mb-10 w-full max-w-lg mx-auto">
                    {/* Step 1 */}
                    <div className="flex items-center">
                        <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                            <User className="text-blue-500 w-5 h-5" />
                        </div>
                    </div>
                    {/* Line 1 */}
                    <div className="flex items-center w-60 px-2">
                        <div className="w-full h-0.5 bg-blue-500" />
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-center">
                        <div className="bg-blue-50 rounded-full p-2 flex items-center justify-center">
                            <FileCheck className="text-blue-500 w-5 h-5" />
                        </div>
                    </div>
                    {/* Line 2 */}
                    <div className="flex items-center w-60 px-2">
                        <div className="w-full h-0.5 bg-gray-500" />
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-center">
                        <div className="bg-white rounded-full p-2 flex items-center justify-center border border-gray-500">
                            <Star className="text-gray-500 w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Title & Subtitle */}
                <h1 className="text-2xl md:text-4xl font-semibold text-center mb-4">
                    Verifikasi Email Kamu
                </h1>
                <p className="text-gray-500 text-sm text-center mb-10">
                    Kami telah mengirimkan kode 6 digit ke emailmu.
                    <br />
                    Masukkan kodenya di bawah untuk melanjutkan.
                </p>

                {/* OTP Input */}
                <form
                    onSubmit={submit}
                    className="flex flex-col items-center w-full max-w-md"
                >
                    <div className="flex gap-4 justify-center mb-8">
                        {data.otp.map((val: string, idx: number) => (
                            <input
                                key={idx}
                                ref={inputsRef[idx]}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={val}
                                onChange={(e) =>
                                    handleChange(idx, e.target.value)
                                }
                                onKeyDown={(e) => handleKeyDown(idx, e)}
                                className="w-14 h-20 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-gray-200 text-gray-500 font-semibold mb-4"
                        disabled={
                            data.otp.some((v: string) => v === "") || processing
                        }
                    >
                        Konfirmasi
                    </button>
                    <p className="text-center text-gray-700 mb-10">
                        Belum menerima kode?{" "}
                        <Link
                            href="/register/otp"
                            className="text-blue-500 hover:underline"
                        >
                            Kirim ulang.
                        </Link>
                    </p>
                    <div className="flex justify-between w-full">
                        <Link
                            href="/register"
                            className="px-6 py-2 rounded-full bg-blue-50 text-blue-500"
                        >
                            Kembali
                        </Link>
                        <Link
                            href="/register/user-preferences"
                            className="px-6 py-2 rounded-full bg-blue-500 text-white"
                        >
                            Lanjut
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
