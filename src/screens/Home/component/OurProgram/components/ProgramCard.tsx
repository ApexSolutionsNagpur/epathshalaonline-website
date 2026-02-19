export default function ProgramCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-[#F5F5F5] p-6 group hover:bg-[#E8E8E8] transition duration-300">

            {/* Icon Box */}
            <div className="w-14 h-14 bg-[#2563EB] flex items-center justify-center mb-6">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-extrabold text-[#0f172a] mb-4 uppercase">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-6">
                {description}
            </p>

            {/* Link */}
            <button className="text-[#2663CF] font-medium hover:text-[#1E3A8A] cursor-pointer">
                Learn More
            </button>
        </div>
    );
}
