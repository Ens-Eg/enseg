import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import About from "../components/HomeOne/About";
import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
import Services from "../components/HomeOne/Services";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/HomeOne/WhatWeOffer";
import Testimonials from "../components/Common/Testimonials";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import PricingStyleOne from "@/components/HomeTwo/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />
     

      <WhyChooseUs />

      <Services />
      <PricingStyleOne />
      <MakeYourBusiness />

      

      <Testimonials />

      <News />

      <Footer />
    </>
  );
}
