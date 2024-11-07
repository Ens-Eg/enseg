"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure you have AOS installed and imported

const Yearly: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle(); // Open or close the chat window
    }
  };

  return (
    <>
      <div
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        {/* Personal Website Plan */}
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>المواقع الشخصية</h3>
              <p>خطة مناسبة للمواقع الصغيرة والمدونات</p>
            </div>
            <span>
              ٣٠٠٠<sub>/جنيه</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                قرص SSD سعة 5GB
              </li>
              <li>
                <i className="bx bx-check"></i>
                معدل نقل البيانات الشهري 50GB
              </li>
              <li>
                <i className="bx bx-check"></i>
                حسابات البريد الالكتروني 5
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاني
              </li>
              <li>
                <i className="bx bx-check"></i>
                اتاحة اصدارات Wordpress
              </li>
              <li>
                <i className="bx bx-x"></i>
                تصميم قالب خاص
              </li>
              <li>
                <i className="bx bx-x"></i>
                برمجيات خاصة
              </li>
            </ul>

            <Link
              href="#"
              onClick={handleOpenChat}
              className="default-btn"
              role="button"
            >
              إشترك الان
            </Link>
          </div>
        </div>

        {/* Ecommerce Store Plan */}
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>المتاجر الالكترونية</h3>
              <p>إبدا بتسويق منتجاتك على الانترنت</p>
            </div>
            <span>
              ١٠٠٠٠<sub>/جنيه</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                قرص SSD سعة 50GB
              </li>
              <li>
                <i className="bx bx-check"></i>
                كمية نقل البيانات 500GB
              </li>
              <li>
                <i className="bx bx-check"></i>
                حسابات البريد الالكتروني 50
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاني
              </li>
              <li>
                <i className="bx bx-check"></i>
                نسخة خاصة من سكربت المتجر
              </li>
              <li>
                <i className="bx bx-check"></i>
                تصميم قالب خاص
              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم فني لمدة ٦ شهور
              </li>
            </ul>

            <Link
              href="#"
              onClick={handleOpenChat}
              className="default-btn"
              role="button"
            >
              إشترك الان
            </Link>

            <strong className="popular">عرض مميز</strong>
          </div>
        </div>

        {/* Corporate Website Plan */}
        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>مواقع الشركات</h3>
              <p>إبدا بتسويق اعمال مؤسستك على الانترنت</p>
            </div>
            <span>
              ٥٠٠٠<sub>/جنيه</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                قرص SSD سعة 100GB
              </li>
              <li>
                <i className="bx bx-check"></i>
                كمية نقل البيانات 500GB
              </li>
              <li>
                <i className="bx bx-check"></i>
                حسابات البريد الالكتروني 50
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاني
              </li>
              <li>
                <i className="bx bx-check"></i>
                برمجة خاصة لادارة الموقع
              </li>
              <li>
                <i className="bx bx-check"></i>
                تصميم قالب خاص للموقع
              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم فني لمدة ٦ شهور
              </li>
            </ul>

            <Link
              href="#"
              onClick={handleOpenChat}
              className="default-btn"
              role="button"
            >
              إشترك الان
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yearly;
