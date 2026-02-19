import Image from "next/image";

export default function FacilityCard({
    image,
    title,
    description,
    overlay = false,
    defaultActive = false,
}: {
    image: string;
    title: string;
    description: string;
    overlay?: boolean;
    defaultActive?: boolean;
}) {
    return (
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden group">

            {/* Image */}
            <Image
                src={image}
                alt={title || "facility"}
                fill
                className="object-cover "
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
        </div>
    );
}
