export default function TestimonialCard({ quote, name, role }: { quote: string, name: string, role: string }) {
    return (
        <div className="pe-4">
            <div className="bg-[#F5F5F5] p-10">
                <div className="text-blue-600 text-6xl font-bold mb-6 leading-none">
                    “
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                    {quote}
                </p>

                <div>
                    <h4 className="font-bold text-gray-900 text-lg uppercase">
                        {name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}
