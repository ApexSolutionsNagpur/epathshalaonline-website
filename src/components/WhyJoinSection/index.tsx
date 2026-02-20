import Image from "next/image";
import FeatureCard from "./FeatureCard";
import { ReactNode } from "react";

interface Feature {
    title: string;
    description: string;
    icon: ReactNode;
}

interface WhyJoinSectionProps {
    tagline?: string;
    title?: string;
    description?: string;
    image?: string;
    features: Feature[];
}

export default function WhyJoinSection({
    tagline = "Why Join Us",
    title = "Turning Setbacks Into \nAcademic Comebacks",
    description = "At ePathshala, we believe every challenge deserves guidance. Our structured system ensures that no student falls behind, providing the right support at the right time.",
    image = "/images/heroImages.jpg",
    features,
}: WhyJoinSectionProps) {
    const titleParts = title.split("\n");

    return (
        <section>
            <div className="grid md:grid-cols-2 gap-10 items-end my-14">
                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        {tagline}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
                        {titleParts.map((part, i) => (
                            <span key={i}>
                                {part}
                                {i < titleParts.length - 1 && <br />}
                            </span>
                        ))}
                    </h2>
                </div>

                <div>
                    <p className="text-gray-600 leading-7">{description}</p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-[1.5fr_2.5fr] gap-6">
                {/* Left Image */}
                <div className="relative w-full h-[200px] md:h-[300px]">
                    <Image
                        src={image}
                        alt="Team"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Features */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {features.map((item, index) => (
                        <FeatureCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
