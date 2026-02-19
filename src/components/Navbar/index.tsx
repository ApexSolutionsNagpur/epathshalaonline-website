
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full bg-white ">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="flex items-center gap-3">
                    <Image src="/images/logo-Playster.png" alt="Logo" width={50} height={45} />

                    <span className="text-xl font-bold text-gray-900 tracking-wide">
                        ePathshala
                    </span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <Link href="#" className="hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="#" className="hover:text-blue-600 transition">
                        About
                    </Link>
                    <Link href="#" className="hover:text-blue-600 transition">
                        Programs
                    </Link>
                    <Link href="#" className="hover:text-blue-600 transition">
                        FAQs
                    </Link>
                    <Link href="#" className="hover:text-blue-600 transition">
                        Contact
                    </Link>
                </nav>

                <Link
                    href="#"
                    className="bg-[#2563EB] hover:bg-[#0350d2] leading-5 text-[14px] text-white px-[30px] py-[14px] font-medium transition duration-200"
                >
                    Enquire Now
                </Link>

            </div>
        </header>
    );
}
