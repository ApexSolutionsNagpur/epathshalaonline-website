import WhyJoinSection from "@/components/WhyJoinSection";
import { FaUser, FaDumbbell, FaGlobe, FaBuilding } from "react-icons/fa";

export default function WhyJoinSectionScreen() {
    return (
        <WhyJoinSection
            tagline="Why Join Us"
            title={"Turning Setbacks Into \nAcademic Comebacks"}
            description="At ePathshala, we believe every challenge deserves guidance. Our structured system ensures that no student falls behind, providing the right support at the right time."
            image="/images/heroImages.jpg"
            features={[
                {
                    title: "Individual Attention",
                    description: "Small, focused groups allowing teachers to understand each student's pace.",
                    icon: <FaUser className="text-white text-xl" />,
                },
                {
                    title: "Early Identification",
                    description: "We use continuous monitoring to identify learning gaps early.",
                    icon: <FaDumbbell className="text-white text-xl" />,
                },
                {
                    title: "Human-First",
                    description: "We speak to the student, not just the report card.",
                    icon: <FaGlobe className="text-white text-xl" />,
                },
                {
                    title: "Custom Support",
                    description: "Dedicated doubt-clearing sessions and personalized guidance.",
                    icon: <FaBuilding className="text-white text-xl" />,
                },
            ]}
        />
    );
}
