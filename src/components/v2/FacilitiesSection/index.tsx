import FacilityCard from "./components/FacilityCard";

export default function FacilitiesSection() {
    return (
        <section className="px-4 md:px-24 mb-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center my-14 text-center">

                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Skill Development
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
                        <span className="text-[#1E5AA8]">One School. </span>
                        Multiple Growth Pathways.
                    </h2>
                    <div className="w-24 h-1 bg-[#FFC107] mx-auto mt-6 rounded-full"></div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Stadium with Overlay */}
                <FacilityCard
                    image="/images/ai_robotics.png"
                    title="STEM & Robotics"
                    description="Future-ready education focusing on AI, Data Science, and hands-on scientific exploration."
                    // overlay={true}
                    // defaultActive={true}
                    href="/airoboticsshala"
                />

                <FacilityCard image="/images/sport_shala.png"
                    title="Arts & Creative Expression"
                    description="Developing aesthetic sense and creative thinking through visual arts and music."
                    // overlay={true}
                    href="/sportsshala"
                />

                <FacilityCard image="/images/dance_shala.png"
                    title="Sports & Athletics"
                    description="Structured physical education and professional training pathways for aspiring athletes."
                    // overlay={true} 
                    href="/danceshala"
                />

                <FacilityCard image="/images/art_shala.png"
                    title="Soft Skills & Communication"
                    description="Building leadership, confidence, and global communication skills for tomorrow's careers."
                    // overlay={true} 
                    href="/artshala"
                />
            </div>

        </section >
    );
}
