import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";

export default function HeroSection() {
    return (
        <>
            <div className="relative h-[900px] w-full mt-[54px]">
                <Image
                    src="/images/heroImages.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover object-top -z-10"
                    priority
                />
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, var(--e-global-color-4e87b42, rgba(0,0,0,0)) 0%, #000000 100%)'
                    }}
                />
                <SectionContainer className="py-[15px] h-full flex flex-col justify-between">
                    <Navbar />
                    <div className="z-10">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight text-white">
                            What if your child <br /> starts falling behind?
                        </h1>
                        <div className="w-full h-[1px] bg-white/50 my-6"></div>

                        <div className="relative  mt-auto  flex items-end justify-between w-full pb-12">

                            <p className="text-sm md:text-base text-gray-200 max-w-xl">
                                We identify gaps early through continuous assessments, concept tracking,
                                and performance alerts to turn setbacks into comebacks.
                            </p>

                            {/* Right Button */}
                            <div className="hidden md:block">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition duration-300">
                                    Book a Demo Class
                                </button>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>
        </>
    );
}