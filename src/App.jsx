import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Offer from "./pages/Offer";
import TrainingHours from "./pages/TrainingHours";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Fight & Fitness");

  return (
    <>
      <Router>
        <Layout>
          <ScrollToTop>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/omoss" element={<AboutUs />} />
              <Route path="/tilbud/" element={<Offer />} />{" "}
              <Route path="/treningstider/" element={<TrainingHours />} />
              <Route path="/medlemskap/" element={<Membership />} />
              <Route path="/kontakt/" element={<ContactUs />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </Layout>
      </Router>
    </>
  );
}

export default App;
