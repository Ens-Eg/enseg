import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import PrivacyPolicyContent from "../../components/PrivacyPolicy/PrivacyPolicyContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="سياسة الخصوصية"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="الخصوصية"
      />

      <PrivacyPolicyContent />

      <Footer />
    </>
  );
}
