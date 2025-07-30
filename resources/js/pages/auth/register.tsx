import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<
        Required<RegisterForm>
    >({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post("register", {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div>
            <Head title="Register" />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden">
                    {/* Right: Illustration */}
                    <div className="hidden md:flex flex-1 items-center justify-center p-2 relative">
                        {/* Blue Card with Pattern */}
                        <div className="bg-blue-500 rounded-2xl w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                            {/* Pattern background */}
                            <img
                                src="/images/register-pattern.svg"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                            {/* White translucent box */}
                            <div className="bg-white/30 backdrop-blur-xs border-1 border-white/50 rounded-2xl w-full h-full flex flex-col items-center justify-end p-8 relative z-10">
                                {/* Text */}
                                <div className="absolute top-8 left-8 right-8 flex items-start text-left">
                                    <h3 className="text-white text-2xl font-semibold leading-snug mb-2">
                                        Daftar Mudah, Belajar Cepat <br />
                                        Buat Akun dan Mulai Tingkatkan Skillmu Hari Ini
                                    </h3>
                                </div>
                                {/* Illustration image */}
                                <img
                                    src="/images/mentor-cta-people.png"
                                    alt="Register Illustration"
                                    className="w-80 -mb-8 object-cover rounded-xl self-end"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Right: Form */}
                    <div className="flex-1 flex flex-col justify-center px-8 py-12">
                        <div className="mb-8">
                            <img
                                src="/images/logo-color.svg"
                                alt="Kreavoks"
                                className="h-5 mb-8"
                            />
                            <h2 className="text-3xl font-bold mb-2">
                                Ayo Tingkatkan<br />Belajarmu!
                            </h2>
                            <p className="text-sm text-gray-500">
                                Buat akunmu dan terus pantau perkembangan
                                belajarmu.
                            </p>
                        </div>
                        <form onSubmit={submit} className="space-y-6">
                            {/* Google Sign In Button */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 border border-blue-500 text-blue-500 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
                            >
                                <img
                                    src="/images/google-icon.svg"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                Sign In with Google
                            </button>
                            <div className="flex items-center my-4">
                                <div className="flex-grow h-px bg-gray-300" />
                                <span className="mx-2 text-gray-400 text-sm">
                                    or
                                </span>
                                <div className="flex-grow h-px bg-gray-300" />
                            </div>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    autoFocus
                                    autoComplete="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Kreavoks"
                                    className="mt-1 w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="kreavoks@email.com"
                                    className="mt-1 w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Password"
                                    className="mt-1 w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition"
                                disabled={processing}
                            >
                                Create Account
                            </button>
                        </form>
                        <p className="text-center text-gray-700 mt-8">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-blue-500 hover:underline"
                            >
                                Sign In here.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
