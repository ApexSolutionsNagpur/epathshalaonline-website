import Image from "next/image";
import InfoCard from "./InfoCard";

export default function AboutSection() {
    const cards = [
        {
            title: "Our Vision",
            description:
                "To provide high-quality CBSE education that is accessible, inclusive, and tailored to every child's potential.",
        },
        {
            title: "Our Mission",
            description:
                "To empower students through structured academic support, skill development, and personal mentoring for future readiness.",
        },
    ];
    return (
        <section className=" py-20">
            <div className="">

                {/* Top Header Row */}
                <div className="grid md:grid-cols-2 gap-10 items-end mb-10">

                    {/* Left */}
                    <div>
                        <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                            20+ Years of Excellence
                        </p>

                        <h2 className="text-4xl md:text-[36px] font-extrabold font-family-oswald text-[#0F172A] leading-[55.2px]  uppercase">
                            Leading CBSE Academic <br />
                            Success for Two Decades
                        </h2>
                    </div>

                    {/* Right */}
                    <div>
                        <p className="text-[#35393F] text-base leading-7">
                            ePathshala Online CBSE School is built on a foundation of trust and proven results.
                            Our technology-enabled infrastructure and experienced faculty ensure that every
                            student receives the individual attention they deserve.
                        </p>
                    </div>
                </div>

                {/* Bottom Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Left Large Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/heroImages.jpg"
                            alt="Training"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8">

                        {/* Top Image */}
                        <div className="relative w-full h-[350px]">
                            <Image
                                src="/images/heroImages.jpg"
                                alt="Team"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {cards.map((item, index) => (
                                <InfoCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
