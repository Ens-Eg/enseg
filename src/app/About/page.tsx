import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/About/About";
import WhyChooseUs from "../../components/About/WhyChooseUs";
import MakeYourBusiness from "../../components/About/MakeYourBusiness";
import Testimonials from "../../components/Common/Testimonials";
import PartnerSlider from "../../components/Common/PartnerSlider";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="عن الشركة"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="ENSEGYPT"
      />

      <About />

      <WhyChooseUs />

      <MakeYourBusiness />

      <Testimonials />

      <PartnerSlider />

      <Footer />
    </>
  );
}
