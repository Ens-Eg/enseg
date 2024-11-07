import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import TermsAndConditionsContent from "../../components/TermsAndConditions/TermsAndConditionsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="سياسة الاستخدام"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="اتفاقية الاستخدام"
      />

      <TermsAndConditionsContent />

      <Footer />
    </>
  );
}
