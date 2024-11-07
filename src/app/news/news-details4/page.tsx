import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/NewsDetailsContent4";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="أهمية حماية المواقع والسيرفرات في شركات استضافة المواقع
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
