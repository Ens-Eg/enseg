"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/Blogsdesign/main.png";

const About: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image src={aboutImg} alt="Image" width={490} height={420} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>تصميم المدونات</span>
                <h2>
                يمكنك الانطلاق في رحلتك الرقمية بثقة
                </h2>
                <p>
                نقدم في شركتنا خدمة تصميم مدونات مخصصة باستخدام نظام ووردبريس، والذي يُعد من أبرز المنصات العالمية لإنشاء المحتوى. نعمل على تصميم مدونات تعكس هوية علامتك التجارية وتوفر تجربة مستخدم سلسة وجذابة.

فريقنا من المصممين والمطورين يضمن لك تصميم واجهات احترافية تتناسب مع محتواك، مع التركيز على سهولة التصفح وتحسين محركات البحث (SEO) لجذب المزيد من الزوار. نحرص على توفير ميزات متقدمة مثل قوالب قابلة للتخصيص، وإمكانيات إدارة المحتوى بسهولة، ودعم فني مستمر لضمان عمل مدونتك بكفاءة.

مع خدماتنا، يمكنك الانطلاق في رحلتك الرقمية بثقة، حيث نقدم لك الحلول المناسبة لاحتياجاتك، مما يجعل مدونتك منصة مثالية للتواصل مع جمهورك ومشاركة أفكارك ومشاريعك. انضم إلينا اليوم وابدأ رحلتك في عالم التدوين!                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        تصميم مخصص وجذاب
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        توافق مع جميع الأجهزة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تحسين محركات البحث (SEO)
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        سهولة في إدارة المحتوى
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        دعم فني مستمر
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        أدوات تحليلات متقدمة
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/contact" className="default-btn">
                 إطلب الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
