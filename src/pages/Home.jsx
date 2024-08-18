import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import FAQSection from "../components/FAQ/FAQSection";
import ServiceGrid from "@/components/ServicesComponent";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Intro /> */}
      <ServiceGrid />
      <FAQSection />
      <Cta />
    </>
  );
};

export default Home;
