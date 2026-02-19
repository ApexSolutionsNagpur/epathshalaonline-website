import TestimonialCarousel from "./components/TestimonialCarousel";

export default function TestimonialSection() {
    return (
        <section>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between my-14">
                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Testimonials
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-xl">
                        Voices of Our Proud <br /> Team Players
                    </h2>
                </div>

                <div className="mt-6 lg:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm font-medium transition duration-300">
                        Discover More
                    </button>
                </div>
            </div>
            <TestimonialCarousel />
        </section>
    )
}