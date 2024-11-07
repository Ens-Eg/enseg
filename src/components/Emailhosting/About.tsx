"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/email.png";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image src={aboutImg} alt="Image" width={375} height={440} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>استضافة البريد الالكتروني</span>
                <h2>
                 احجز بريدك الالكتروني بأسم نشاطك
                </h2>
                <p>
                نقدم لك خدمة استضافة حسابات بريد الكتروني للشركات رسمية باسم نشاطك التجارى للموظفين حيث نقدم لك الخدمة متكاملة شاملة حجز اسم النطاق (الدومين) على امتداد اسم نشاطك التجارى companyname.com وتفعيل حسابات على اقوي السيرفرات السحابية فائقة السرعات ومقرها الولايات المتحدة الامريكية   </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        لوحة تحكم
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        سيرفرات سحابية

                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        دعم فنى
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        سرعات فائقة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        نسخ احتياطى

                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تكلفة معقولة
                      </li>
                    </ul>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
