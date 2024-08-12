import MissionSection from "../components/AboutUs/MissionSection.jsx";
import TeamSection from "../components/AboutUs/TeamSection.jsx";
import HistorySection from "../components/AboutUs/HistorySection.jsx";
import Cta from "../components/Cta";
import Timeline from "@/components/AboutUs/TimeLine.jsx";

const AboutUs = () => {
  return (
    <>
      <MissionSection />
      <div className="border-t border-gray-300 my-8"></div>
      <Timeline />
      <div className="border-t border-gray-300 my-8"></div>
      <Cta />
    </>
  );
};

export default AboutUs;
