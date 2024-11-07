import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/NewsDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="استخدام Blender في إنشاء بيئة الألعاب"
        homePageUrl="/"
        homePageText="أخبار الشركة"
        activePageText="جديد الاخبار"
      />

      <NewsDetailsContent />

      <Footer />
    </>
  );
}
