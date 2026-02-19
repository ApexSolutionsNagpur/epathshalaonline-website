"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-[#262626] h-[54px] flex items-center justify-between px-6 shadow-md fixed top-0 z-50">

            <div className="flex-1 mx-4 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                    <span className="text-white text-lg font-semibold mx-4">Admission Open 2026-27</span>
                </div>
            </div>

            {/* <Link
                href="#"
                className="bg-[#82b440] hover:bg-[#6f9a35] text-white px-4 py-1.5 rounded text-sm font-medium transition duration-200"
            >
                Enquire Now
            </Link> */}

        </header>
    );
}
