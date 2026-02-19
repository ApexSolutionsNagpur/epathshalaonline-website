import Image from "next/image";
import FeatureCard from "./components/FeatureCard";
import { FaUser, FaDumbbell, FaGlobe, FaBuilding } from "react-icons/fa";

export default function WhyJoinSection() {
    const features = [
        {
            title: "Individual Attention",
            description: "Small, focused groups allowing teachers to understand each student's pace.",
            icon: <FaUser className="text-white text-xl" />,
        },
        {
            title: "Early Identification",
            description: "We use continuous monitoring to identify learning gaps early.",
            icon: <FaDumbbell className="text-white text-xl" />,
        },
        {
            title: "Human-First",
            description: "We speak to the student, not just the report card.",
            icon: <FaGlobe className="text-white text-xl" />,
        },
        {
            title: "Custom Support",
            description: "Dedicated doubt-clearing sessions and personalized guidance.",
            icon: <FaBuilding className="text-white text-xl" />,
        },
    ];

    return (
        <section >
            <div className="grid md:grid-cols-2 gap-10 items-end my-14">

                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Why Join Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
                        Turning Setbacks Into <br />
                        Academic Comebacks
                    </h2>
                </div>

                <div>
                    <p className="text-gray-600 leading-7">
                        At ePathshala, we believe every challenge deserves guidance. 
                        Our structured system ensures that no student falls behind, 
                        providing the right support at the right time.
                    </p>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-[1.5fr_2.5fr] gap-6">

                {/* Left Image */}
                <div className="relative w-full h-[200px] md:h-[300px]">
                    <Image
                        src="/images/heroImages.jpg"
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
        </section >
    );
}
