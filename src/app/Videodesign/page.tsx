import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/Videodesign/About";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import Testimonials from "../../components/Common/Testimonials";
import TeamTwo from "../../components/Videodesign/TeamTwo";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="تصميم الفيديو"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="تصميم الفيديو"
      />

      <About />
      <br></br>   <br></br>
      <TeamTwo />
      <MakeYourBusiness />

      <Testimonials />



      

      <Footer />
    </>
  );
}
