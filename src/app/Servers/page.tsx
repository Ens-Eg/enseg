import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/Servers/About";
import WhyChooseUs from "../../components/AboutTwo/WhyChooseUs";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import Testimonials from "../../components/Common/Testimonials";
import PartnerSlider from "../../components/Common/PartnerSlider";
import Footer from "../../components/Layouts/Footer";
import PricingStyleOne from "../../components/Servers/Pricing";
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="السيرفرات الخاصة"
        homePageUrl="/"
        homePageText="الصفحة الرئيسية"
        activePageText="السيرفرات الخاصة"
      />

      <About />

      <PricingStyleOne />
      <MakeYourBusiness />
   
      <Testimonials />

      <PartnerSlider />

      <Footer />
    </>
  );
}
