export default function InfoCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-[#F5F5F5] p-8">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4 uppercase">
                {title}
            </h3>

            <p className="text-[#35393F] text-sm leading-6">
                {description}
            </p>
        </div>
    );
}
