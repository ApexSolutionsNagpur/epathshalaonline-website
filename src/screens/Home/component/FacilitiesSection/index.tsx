import FacilityCard from "./components/FacilityCard";

export default function FacilitiesSection() {
    return (
        <section>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between my-14">

                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Facilities
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
                        Where Passion Meets <br />
                        Performance
                    </h2>
                </div>

                <div className="mt-6 md:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition">
                        Discover More
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Stadium with Overlay */}
                <FacilityCard
                    image="/images/heroImages.jpg"
                    title="Football Stadium"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing, elit feugiat platea dictumst fames."
                    overlay={true}
                    defaultActive={true}
                />

                <FacilityCard image="/images/heroImages.jpg"
                    title="Football Stadium"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing, elit feugiat platea dictumst fames."
                    overlay={true} />

                <FacilityCard image="/images/heroImages.jpg"
                    title="Football Stadium"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing, elit feugiat platea dictumst fames."
                    overlay={true} />

                <FacilityCard image="/images/heroImages.jpg"
                    title="Football Stadium"
                    description="Lorem ipsum dolor sit amet consectetur adipiscing, elit feugiat platea dictumst fames."
                    overlay={true} />
            </div>

        </section >
    );
}
