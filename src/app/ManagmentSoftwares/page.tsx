import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/Webdesign/About";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import Testimonials from "../../components/Common/Testimonials";
import TeamTwo from "../../components/ManagmentSoftwares/TeamTwo";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layouts/Footer";
import WhyChooseUs from "../../components/ManagmentSoftwares/WhyChooseUs";
import CaseStudiesDetailsContent from "../../components/ManagmentSoftwares/CaseStudiesDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="خدمات البرمجة"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="تطبيقات الادارة"
      />

        <CaseStudiesDetailsContent />
      <WhyChooseUs />
   
      <MakeYourBusiness />

      <Testimonials />



      

      <Footer />
    </>
  );
}
