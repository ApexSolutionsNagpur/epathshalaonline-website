
export default function SectionContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={`max-w-[1280px] mx-auto ${className}`}>
            {children}
        </section>
    );
}