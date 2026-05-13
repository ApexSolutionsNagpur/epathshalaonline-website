import Image from "next/image";
import Link from "next/link";

export default function FacilityCard({
    image,
    title,
    description,
    overlay = false,
    defaultActive = false,
    href,
}: {
    image: string;
    title: string;
    description: string;
    overlay?: boolean;
    defaultActive?: boolean;
    href: string;
}) {
    return (
        <Link href={href} className="relative w-full h-[300px] md:h-[350px] overflow-hidden group rounded-3xl shadow-xl hover:scale-102 hover:-translate-y-2 transition-all duration-300 ">

            {/* Image */}
            <Image
                src={image}
                alt={title || "facility"}
                fill
                className="object-fit "
            />

            {overlay && (
                <div
                    className={`
            absolute inset-0 bg-black/60 
            flex flex-col justify-end items-center 
            text-center px-6 pb-10
            transition-transform duration-500
            ${defaultActive
                            ? "translate-y-0"
                            : "translate-y-full group-hover:translate-y-0"
                        }
          `}
                >
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase mb-4">
                        {title}
                    </h3>

                    <p className="text-gray-200 text-sm max-w-md">
                        {description}
                    </p>
                </div>
            )}
        </Link>
    );
}
