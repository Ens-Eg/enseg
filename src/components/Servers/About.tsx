"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/servers.png";

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
                <span>السيرفرات الخاصة</span>
                <h2>
                أسس شركتك الخاصة معنا
                </h2>
                <p>

تتيح لك سيرفرات ويندوز تجربة مستخدم سلسة بفضل واجهتها المعروفة ودعم البرمجيات الواسع، مما يجعلها خيارًا مثاليًا للأعمال التي تعتمد على تطبيقات خاصة بويندوز. في المقابل، تمنحك سيرفرات لينوكس أمانًا عاليًا واستقرارًا ممتازًا، مما يجعلها الخيار المفضل للمطورين والمستخدمين الذين يبحثون عن بيئة مفتوحة ومخصصة
</p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                     أداء عالي
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        أداء عالٍ
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        أمان متقدم
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
