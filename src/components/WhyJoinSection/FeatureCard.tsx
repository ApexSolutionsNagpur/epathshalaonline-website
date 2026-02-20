export default function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-[#f3f3f3] p-6 flex items-center gap-5 hover:shadow-md transition duration-300">
            <div className="w-24 h-16 bg-blue-600 flex items-center justify-center">
                {icon}
            </div>

            <div>
                <h3 className="text-lg font-extrabold text-[#0f172a] uppercase mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                    {description}
                </p>
            </div>
        </div>
    );
}
