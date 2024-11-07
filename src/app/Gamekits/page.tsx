import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/Webdesign/About";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import Testimonials from "../../components/Common/Testimonials";
import TeamTwo from "../../components/Mobileapp/TeamTwo";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layouts/Footer";
import WhyChooseUs from "../../components/Mobileapp/WhyChooseUs";
import CaseStudiesDetailsContent from "../../components/Gamekits/CaseStudiesDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="تطوير الالعاب"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="تصميم GameKits"
      />

        <CaseStudiesDetailsContent />
   
   
      <MakeYourBusiness />

      <Testimonials />



      

      <Footer />
    </>
  );
}
