import WhoWeAre from "@/components/WhoWeAre";

export default function WhoWeAreSection() {
    return (
        <WhoWeAre
            tagline="20+ Years of Excellence"
            title={"Leading CBSE Academic \nSuccess for Two Decades"}
            description="ePathshala Online CBSE School is built on a foundation of trust and proven results. Our technology-enabled infrastructure and experienced faculty ensure that every student receives the individual attention they deserve."
            mainImage="/images/heroImages.jpg"
            secondaryImage="/images/heroImages.jpg"
            cards={[
                {
                    title: "Our Vision",
                    description:
                        "To provide high-quality CBSE education that is accessible, inclusive, and tailored to every child's potential.",
                },
                {
                    title: "Our Mission",
                    description:
                        "To empower students through structured academic support, skill development, and personal mentoring for future readiness.",
                },
            ]}
        />
    );
}