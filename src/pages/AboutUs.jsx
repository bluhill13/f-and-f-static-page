import MissionSection from "../components/AboutUs/MissionSection.jsx";
import TeamSection from "../components/AboutUs/TeamSection.jsx";
import HistorySection from "../components/AboutUs/HistorySection.jsx";
import Cta from "../components/Cta";

const AboutUs = () => {
  return (
    <div>
      <MissionSection />
      <div className="h-24 w-24 rounded-full bg-white"></div>
      <TeamSection />
      <HistorySection />
      <Cta />
    </div>
  );
};

export default AboutUs;
