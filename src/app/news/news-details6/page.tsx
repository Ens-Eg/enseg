import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/NewsDetailsContent6";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="برمجة تطبيقات الويب
        "
        homePageUrl="/"
        homePageText="أخبار الشركة"
        activePageText="جديد الاخبار"
      />

      <NewsDetailsContent />

      <Footer />
    </>
  );
}
