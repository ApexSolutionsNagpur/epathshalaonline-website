import SectionContainer from "@/components/SectionContainer";
import HeroSection from "./component/HeroSection";
import WhoWeAre from "./component/WhoWeAre";
import OurProgram from "./component/OurProgram";
import WhyJoinSection from "./component/WhyJoinSection";
import FacilitiesSection from "./component/FacilitiesSection";
import TestimonialCarousel from "./component/TestimonialCard";
import JourneySection from "./component/GetStartedSection";
import BlogSection from "./component/BlogSection";
// import LatestMatchSection from "./component/MatchSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <SectionContainer>
                <WhoWeAre />
                <OurProgram />
                <WhyJoinSection />
                <FacilitiesSection />
                {/* <LatestMatchSection /> */}
                <TestimonialCarousel />
            </SectionContainer>
            <JourneySection />
            <SectionContainer>
                <BlogSection />
            </SectionContainer>
        </>
    );
}
