import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm<
        Required<LoginForm>
    >({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post("login", {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div>
            <Head title="Login" />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden">
                    {/* Left: Form */}
                    <div className="flex-1 flex flex-col justify-center px-8 py-12">
                        <div className="mb-8">
                            <img
                                src="/images/logo-color.svg"
                                alt="Kreavoks"
                                className="h-5 mb-8"
                            />
                            <h2 className="text-3xl font-bold mb-2">
                                Hello,
                                <br />
                                Welcome Back
                            </h2>
                            <p className="text-sm text-gray-500">
                                Back for more knowledge? Let's dive in.
                            </p>
                        </div>
                        <form onSubmit={submit} className="space-y-6">
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
                                    autoFocus
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
                                    autoComplete="current-password"
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
                            <div className="flex items-center justify-between">
                                <label className="flex items-center text-sm text-gray-700">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={() =>
                                            setData("remember", !data.remember)
                                        }
                                        className="mr-2"
                                    />
                                    Remember me
                                </label>
                                <Link
                                    href="#"
                                    className="text-gray-700 text-sm hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition"
                                disabled={processing}
                            >
                                Sign In
                            </button>
                        </form>
                        <p className="text-center text-gray-700 mt-8">
                            Don't have an account?{" "}
                            <Link
                                href="/register"
                                className="text-blue-500 hover:underline"
                            >
                                Sign Up.
                            </Link>
                        </p>
                    </div>
                    {/* Right: Illustration */}
                    <div className="hidden md:flex flex-1 items-center justify-center p-2 relative">
                        {/* Blue Card with Pattern */}
                        <div className="bg-blue-500 rounded-2xl w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                            {/* Pattern background */}
                            <img
                                src="/images/login-pattern.svg"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            />
                            {/* White translucent box */}
                            <div className="bg-white/30 backdrop-blur-xs border-1 border-white/50 rounded-2xl w-full h-full flex flex-col items-center justify-end p-8 relative z-10">
                                {/* Text */}
                                <div className="absolute top-8 left-8 right-8 flex items-start text-left">
                                    <h3 className="text-white text-2xl font-semibold leading-snug mb-2">
                                        Akses Materi Terbaik Bersama Mentor Profesional Langsung dari Dashboard Anda
                                    </h3>
                                </div>
                                {/* Illustration image */}
                                <img
                                    src="/images/login-people.png"
                                    alt="Login Illustration"
                                    className="w-72 -mb-8 object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
