import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NewsGridCard from "../../components/News/NewsGridCard";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="الاخبار"
        homePageUrl="/"
        homePageText="الصفحة الرئيسية"
        activePageText="جديد الاخبار"
      />

      <NewsGridCard />

      <Footer />
    </>
  );
}
