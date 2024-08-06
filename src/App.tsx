import React from "react";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Offer from "./pages/Offer";
import TrainingHours from "./pages/TrainingHours";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import Layout from '@/components/Layout/Layout';

function App() {
  useDocTitle("Fight & Fitness");

  return (
    <Router>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/omoss" element={<AboutUs/>}/>
            <Route path="/tilbud/" element={<Offer/>}/>{" "}
            <Route path="/treningstider/" element={<TrainingHours/>}/>
            <Route path="/medlemskap/" element={<Membership/>}/>
            <Route path="/kontakt/" element={<ContactUs/>}/>
          </Routes>
        </ScrollToTop>
      </Layout>
    </Router>
  );
}

export default App;