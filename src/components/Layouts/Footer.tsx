"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/logo.png";
import shape1 from "../../../public/images/shape/footer-shape-one.png";
import shape2 from "../../../public/images/shape/footer-shape-two.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <Image src={logo} alt="logo" width={150} height={37} />
                </Link>

                <p>
                شركة EnsEgypt هي شركة مصرية مسجلة تعمل فى مجال تقديم حلول الويب والسوفت وير من خلال فريق متميز يضمن يسعي الى تحقيق اعلى معدلات النجاح للعملاء باستخدام افضل التقنيات الحديثة التى تساعد العملاء على تحقيق اعلى معدلات النجاح
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/ENSEGYPTEG" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+201553841793" target="_blank">
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h3>الخدمات</h3>
                <ul>
                  <li>
                    <Link href="/Shardhosting/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                     إستضافة المواقع
                    </Link>
                  </li>
                  <li>
                    <Link href="/Webdesign/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      تصميم المواقع
                    </Link>
                  </li>
                  <li>
                    <Link href="/Mobilegames/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      تطوير الالعاب
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      برمجة تطبيقات الويب
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      برمجة تطبيق الموبايل
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      تصميم الفيديو
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <h3>روابط هامة</h3>

                <ul>
                  <li>
                    <Link href="/about">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      أخبار الشركة
                    </Link>
                  </li>
                  <li>
                    <Link href="/Offers">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      العروض الخاصة
                    </Link>
                  </li>
                  <li>
                    <Link href="/About">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      عن الشركة
                    </Link>
                  </li>
                  <li>
                    <Link href="/Terms">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      سياسة الاستخدام
                    </Link>
                  </li>
                  <li>
                    <Link href="/Privacy">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      شروط الخدمة
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      الاتصال بنا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <h3>معلومات</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>هاتف - واتساب</span>
                    201553841793+<br></br>
                    971566027954+
                  </li>

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>بريد الكتروني</span>
                    info@ensegypt.com
                  </li>

                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>العنوان</span>
                    مصر , القاهرة , ١١ شارع النصر مدينة نصر<br></br>
                    مصر , طنطا , 25 شارع بن الفارض
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <Image src={shape1} alt="Image" width={270} height={235} />
          <Image src={shape2} alt="Image" width={270} height={235} />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Copyright &copy; {currentYear} ENS EGYPT. All Rights Reserved</p>
              </div>
            </div>

      

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
