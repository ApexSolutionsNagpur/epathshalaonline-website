import FacilityCard from "./components/FacilityCard";

export default function FacilitiesSection() {
    return (
        <section className="px-4 md:px-24 mb-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between my-14">

                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Skill Development
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
                        One School.
                        <br />
                        Multiple Growth Pathways.
                    </h2>
                </div>

                <div className="mt-6 md:mt-0">
                    <button className="bg-[#1E5AA8] hover:bg-[#0B3C5D] text-white px-6 py-3 font-semibold transition">
                        View All Skills
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Stadium with Overlay */}
                <FacilityCard
                    image="/images/heroImages.jpg"
                    title="STEM & Robotics"
                    description="Future-ready education focusing on AI, Data Science, and hands-on scientific exploration."
                    overlay={true}
                    defaultActive={true}
                />

                <FacilityCard image="/images/heroImages.jpg"
                    title="Arts & Creative Expression"
                    description="Developing aesthetic sense and creative thinking through visual arts and music."
                    overlay={true} />

                <FacilityCard image="/images/heroImages.jpg"
                    title="Sports & Athletics"
                    description="Structured physical education and professional training pathways for aspiring athletes."
                    overlay={true} />

                <FacilityCard image="/images/heroImages.jpg"
                    title="Soft Skills & Communication"
                    description="Building leadership, confidence, and global communication skills for tomorrow's careers."
                    overlay={true} />
            </div>

        </section >
    );
}
