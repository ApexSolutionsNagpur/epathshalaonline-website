import HeroSection from "./component/HeroSection";
import OurCoachSection from "./component/OurCoachSection";
import WhoWeAreSection from "./component/WhoWeAre";
import SectionContainer from "@/components/SectionContainer";
import WhyJoinSectionScreen from "./component/WhyJoinSection";
import GetStartedSectionScreen from "./component/GetStartedSection";

export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <SectionContainer>
                <WhoWeAreSection />
                <OurCoachSection /> 
                <WhyJoinSectionScreen />
            </SectionContainer>
                <GetStartedSectionScreen />
        </>
    )}