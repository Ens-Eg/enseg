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
              <p>يمكن اضافة لوحة تحكم CPANEL/PLESK</p>
            </div>
            <span>
              ٣٠٠<sub>/جنيه</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                المعالج : 2 كور (Intel)
              </li>
              <li>
                <i className="bx bx-check"></i>
                الرامات : 2 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                SSD الهارد : 40 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                سرعة النت : 1 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                الترافيك : 100 تيرا شهريا
              </li>
              <li>
                <i className="bx bx-check"></i>
                نظام التشغيل : LINUX
              </li>
              <li>
                <i className="bx bx-x"></i>
              لوحة تحكم CPANEL
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
              <p>يمكن اضافة لوحة تحكم CPANEL/PLESK</p>
            </div>
            <span>
              ٣٩٠<sub>/جنيه</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                المعالج : 2 كور (Intel)
              </li>
              <li>
                <i className="bx bx-check"></i>
                الرامات : 4 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                SSD الهارد : 40 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                سرعة النت : 1 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                الترافيك : 100 تيرا شهريا
              </li>
              <li>
                <i className="bx bx-check"></i>
                نظام التشغيل : LINUX
              </li>
              <li>
                <i className="bx bx-x"></i>
              لوحة تحكم CPANEL
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
              <p>يمكن اضافة لوحة تحكم CPANEL/PLESK</p>
            </div>
            <span>
           ٥٠٠<sub>/جنيه</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                المعالج : 4 كور (intel)
              </li>
              <li>
                <i className="bx bx-check"></i>
                الرامات : 8 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                SSD الهارد : 80 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                سرعة النت : 1 جيجا
              </li>
              <li>
                <i className="bx bx-check"></i>
                الترافيك : 100 تيرا شهريا
              </li>
              <li>
                <i className="bx bx-check"></i>
                نظام التشغيل : LINUX
              </li>
              <li>
                <i className="bx bx-x"></i>
              لوحة تحكم CPANEL
              </li>
            </ul>

            <Link href="/contact" className="default-btn">
             إشترك الان
            </Link>
          </div>
        </div>
        <p>لاضافة لوحة تحكم Cpanel ٢٥٠ جنية شهريا</p>
      </div>
    </>
  );
};

export default Monthly;
