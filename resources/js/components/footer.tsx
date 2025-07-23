import { Link } from "@inertiajs/react";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-blue-500 text-white border-t overflow-hidden">
            {/* Main Footer Content */}
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
                {/* Brand */}
                <div>
                    <img
                        src="/images/logo-putih.svg"
                        className="h-6 mb-4"
                        alt="Logo"
                    />
                    <div className="flex gap-3 text-white text-lg mb-3">
                        <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors duration-300" size={18} />
                        <FaTwitter className="cursor-pointer hover:text-sky-500 transition-colors duration-300" size={18} />
                        <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-300" size={18} />
                        <FaYoutube className="cursor-pointer hover:text-red-500 transition-colors duration-300" size={18} />
                    </div>
                    <p className="text-sm text-white">Kreavoks Digital Agency since 2024</p>
                </div>

                {/* Address */}
                <div className="text-sm break-words">
                    <p className="font-semibold mb-3 text-white">Alamat</p>
                    <p className="text-white">Jl. Kumbang No.14</p>
                    <p className="text-white">Babakan, Kota Bogor</p>
                    <div className="flex items-center gap-2 mt-2 text-white">
                        <Mail size={16} /> <span>hello@kreavoks.my.id</span>
                    </div>
                    {/* <div className="flex items-center gap-2 mt-1 text-white">
                        <Phone size={16} /> <span>+62 00000000</span>
                    </div> */}
                </div>

                {/* Menu */}
                <div className="text-sm">
                    <p className="font-semibold mb-3 text-white">Menu</p>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/program" className="text-white hover:text-gray-300">Program</Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-300">About us</Link>
                        </li>
                    </ul>
                </div>

                {/* Link */}
                <div className="text-sm">
                    <p className="font-semibold mb-3 text-white">Link</p>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#" className="text-white hover:text-gray-300">Privacy & Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white hover:text-gray-300">Term & Service</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white hover:text-gray-300">Help Center</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white hover:text-gray-300">Testimonial</Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter
                <div className="text-sm">
                    <p className="font-semibold mb-3 text-gray-900">Subscribe For Newsletter</p>
                    <form className="flex flex-wrap items-center gap-2 bg-gray-100 px-3 py-2 rounded-full w-full max-w-full">
                        <Mail size={16} className="text-gray-800" />
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="flex-1 min-w-0 bg-transparent text-gray-400 text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-full text-sm whitespace-nowrap"
                        >
                            Submit
                        </button>
                    </form>
                </div> */}
            </div>

            {/* Footer Bottom */}
            <div className="bg-white text-blue-500 text-center p-3 text-sm">
                Copyright <span>{new Date().getFullYear()}</span> ©kreavoks official | Powered by kreavoks official
            </div>
        </footer>
    );
}
