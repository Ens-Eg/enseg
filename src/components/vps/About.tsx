"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/vps.png";

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
                <span>السيرفرات الافتراضية</span>
                <h2>
                 إبداء اعمالك الان معنا
                </h2>
                <p>
                تقدم شركتنا خدمة السيرفرات الافتراضية (VPS) التي توفر لك تحكمًا كاملاً ومرونة عالية في إدارة مواردك الرقمية. تعتبر سيرفراتنا الافتراضية خيارًا مثاليًا للأعمال التي تحتاج إلى أداء قوي وموارد مخصصة دون تكاليف السيرفرات المخصصة. مع VPS، يمكنك الاستفادة من بيئة مستقلة تمامًا، مما يمنحك القدرة على تثبيت البرمجيات وتخصيص إعدادات النظام وفقًا لاحتياجاتك. نحن نقدم دعمًا فنيًا متواصلًا لضمان تشغيل سلس وموثوق                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        تحكم كامل
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        أداء عالٍ
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        أمان محسّن
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        مرونة وقابلية التوسع
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        دعم متعدد الأنظمة
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
