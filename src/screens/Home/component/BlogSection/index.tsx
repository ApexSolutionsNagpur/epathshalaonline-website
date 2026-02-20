import BlogCard from "./components/BlogCard";

export default function BlogSection() {
    const blogs = [
        {
            image: "/images/heroImages.jpg",
            title: "Playster Youth Rising",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipiscing elit nunc sociosqu.",
        },
        {
            image: "/images/heroImages.jpg",
            title: "Victory at Home",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipiscing elit nunc sociosqu.",
        },
        {
            image: "/images/heroImages.jpg",
            title: "New Season Begins",
            description:
                "Lorem ipsum dolor sit amet consectetur, adipiscing elit nunc sociosqu.",
        },
    ];

    return (
        <section className="mb-14">

            {/* Header */}
            <div className="flex flex-col lg:flex-row  lg:justify-between items-end my-14 ">
                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Blog
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-xl">
                        Sharing Our Journey On <br />
                        And Off The Pitch
                    </h2>
                </div>

                <div className="mt-6 lg:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3  font-medium transition duration-300">
                        Discover More
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </section >
    );
}
