import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-[#2563EB] text-white pt-8 pb-8 mt-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Top Logo Row */}
                <div className="flex items-center gap-4 mb-10">
                    <Image
                        src="/images/logo.png"
                        alt="Playster FC"
                        width={55}
                        height={55}
                    />
                    <h2 className="text-2xl font-bold tracking-wide">
                        PLAYSTER FC
                    </h2>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30 mb-5"></div>

                {/* Grid Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-extrabold text-xl mb-6">QUICK LINK</h3>
                        <ul className="space-y-3 text-white/90">
                            <li className="hover:text-white cursor-pointer">Home</li>
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Program</li>
                            <li className="hover:text-white cursor-pointer">Facilities</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-extrabold text-xl mb-6">SOCIAL MEDIA</h3>
                        <ul className="space-y-3 text-white/90">
                            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                                <FaFacebookF /> Facebook
                            </li>
                            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                                <FaXTwitter /> X Twitter
                            </li>
                            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                                <FaLinkedinIn /> Linkedin
                            </li>
                            <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                                <FaInstagram /> Instagram
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-extrabold text-xl mb-6">SUPPORT</h3>
                        <ul className="space-y-3 text-white/90">
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Live Chat</li>
                            <li className="hover:text-white cursor-pointer">Faq</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-extrabold text-xl mb-6">
                            SUBSCRIBE NEWSLETTER
                        </h3>

                        <p className="text-white/90 mb-6 leading-6">
                            Lorem ipsum dolor sit amet consectetur, adipiscing elit
                            iaculis ridiculus, vivamus urna mattis habitasse.
                        </p>

                        <div className="flex bg-white overflow-hidden py-2 w-[448px]" >
                            <input
                                type="email"
                                placeholder="Add email"
                                className="flex-1 px-4 py-3 text-gray-700 outline-none"
                            />

                            <button className="bg-[#2563EB] px-10 flex items-center justify-center hover:bg-[#244bb0] transition mr-6">
                                <HiArrowRight className="text-white text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-white/30 mt-6 pt-6 text-sm text-white/80">
                    2025 Copyright © Sparklethings
                </div>

            </div>
        </footer>
    );
}
