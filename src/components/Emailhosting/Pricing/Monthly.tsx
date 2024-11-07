"use client";

import React from "react";
import Link from "next/link";

const Monthly: React.FC = () => {
  return (
    <>
      <div 
        className="row justify-content-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>العرض الاول</h3>
           
            </div>
            <span>
              ٣٥٠<sub>/جنيه</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                30 حساب بريد
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم سهلة
              </li>
              <li>
                <i className="bx bx-check"></i>
                اسم نطاق - دومين
              </li>
              <li>
                <i className="bx bx-check"></i>
                سيرفرات سحابية

              </li>
              <li>
                <i className="bx bx-check"></i>
                سرعات فائقة للإرسال أو الاستقبال

              </li>
              <li>
                <i className="bx bx-check"></i>
                نسخ احتياطي

              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم فنى

              </li>
            </ul>

            <Link href="/contact" className="default-btn">
              إشترك الان
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>العرض الثاني</h3>
             
            </div>
            <span>
              ٤٠٠<sub>/جنيه</sub>
            </span>

           
            <ul>
              <li>
                <i className="bx bx-check"></i>
                40 حساب بريد
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم سهلة
              </li>
              <li>
                <i className="bx bx-check"></i>
                اسم نطاق - دومين
              </li>
              <li>
                <i className="bx bx-check"></i>
                سيرفرات سحابية

              </li>
              <li>
                <i className="bx bx-check"></i>
                سرعات فائقة للإرسال أو الاستقبال

              </li>
              <li>
                <i className="bx bx-check"></i>
                نسخ احتياطي

              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم فنى

              </li>
            </ul>

            <Link href="/contact" className="default-btn">
              إشترك الان
            </Link>

            <strong className="popular">عرض مميز</strong>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>العرض الثالث</h3>
             
            </div>
            <span>
           ٥٠٠<sub>/جنيه</sub>
            </span>

            
            <ul>
              <li>
                <i className="bx bx-check"></i>
                50 حساب بريد
              </li>
              <li>
                <i className="bx bx-check"></i>
                لوحة تحكم سهلة
              </li>
              <li>
                <i className="bx bx-check"></i>
                اسم نطاق - دومين
              </li>
              <li>
                <i className="bx bx-check"></i>
                سيرفرات سحابية

              </li>
              <li>
                <i className="bx bx-check"></i>
                سرعات فائقة للإرسال أو الاستقبال

              </li>
              <li>
                <i className="bx bx-check"></i>
                نسخ احتياطي

              </li>
              <li>
                <i className="bx bx-check"></i>
                دعم فنى

              </li>
            </ul>

            <Link href="/contact" className="default-btn">
             إشترك الان
            </Link>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Monthly;
