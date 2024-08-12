import MissionSection from "../components/AboutUs/MissionSection.jsx";
import TeamSection from "../components/AboutUs/TeamSection.jsx";
import HistorySection from "../components/AboutUs/HistorySection.jsx";
import Cta from "../components/Cta";
import Timeline from "@/components/AboutUs/TimeLine.jsx";

const AboutUs = () => {
  return (
    <>
      <MissionSection />
      <Timeline />
      <HistorySection />
      <TeamSection />
      <Cta />
    </>
  );
};

export default AboutUs;
