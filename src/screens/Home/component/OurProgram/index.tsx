import ProgramCard from "./components/ProgramCard";
import { FaFutbol, FaRunning, FaTrophy } from "react-icons/fa";
import { GiSoccerKick, GiWhistle, GiStrong } from "react-icons/gi";

export default function OurProgram() {
    const programs = [
        {
            title: "CBSE Academics",
            description:
                "Structured CBSE curriculum for grades 1-12 with experienced faculty and proven results.",
            icon: <GiSoccerKick className="text-white text-2xl" />,
        },
        {
            title: "Skill Development",
            description:
                "Access structured training in sports, arts, music, and foreign languages through certified partners.",
            icon: <FaFutbol className="text-white text-2xl" />,
        },
        {
            title: "STEM & Robotics",
            description:
                "Future-ready education focusing on Robotics, STEM, AI, and Data Science.",
            icon: <GiWhistle className="text-white text-2xl" />,
        },
        {
            title: "Campus Immersion",
            description:
                "Periodic periodic campus immersion programs for socialization and team-building.",
            icon: <FaRunning className="text-white text-2xl" />,
        },
        {
            title: "Disciplined Routine",
            description:
                "Developing lifelong habits through a well-defined academic routine and assignment calendar.",
            icon: <GiStrong className="text-white text-2xl" />,
        },
        {
            title: "Secure Environment",
            description:
                "Safety-first platform with teacher-moderated sessions and secure access.",
            icon: <FaTrophy className="text-white text-2xl" />,
        },
    ];

    return (
        <section >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">

                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Our Program
                    </p>

                    <h2 className="text-4xl md:text-[46px] font-extrabold text-[#0f172a] leading-tight  font-family-oswald uppercase">
                        Academics + Skills = <br />
                        Complete Growth
                    </h2>
                </div>

                <div className="mt-6 md:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition">
                        Discover More
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((item, index) => (
                    <ProgramCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>


        </section>
    );
}
