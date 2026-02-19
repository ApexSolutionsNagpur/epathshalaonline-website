import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ image, title, description }: { image: string, title: string, description: string }) {
    return (
        <div className="bg-[#f5f5f5]">
            {/* Image */}
            <div className="relative w-full h-60">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 uppercase">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                    {description}
                </p>

                <Link
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
}
