import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/Webdesign/About";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import Testimonials from "../../components/Common/Testimonials";
import TeamTwo from "../../components/webgames/TeamTwo";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layouts/Footer";
import WhyChooseUs from "../../components/Mobilegames/WhyChooseUs";
import CaseStudiesDetailsContent from "../../components/webgames/CaseStudiesDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="تطوير الالعاب"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="ألعاب الويب"
      />

        <CaseStudiesDetailsContent />
  
      <TeamTwo />
      <MakeYourBusiness />

      <Testimonials />



      

      <Footer />
    </>
  );
}
