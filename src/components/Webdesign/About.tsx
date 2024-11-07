"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/Webdesign/main.png";

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
                <span>تصميم المواقع</span>
                <h2>
                نستخدم أحدث التقنيات لتقديم مواقع سريعة الاستجابة
                </h2>
                <p>
                نقدم في شركتنا خدمة تصميم المواقع الشخصية والشركات التي تجمع بين الإبداع والاحترافية، لتلبية احتياجاتك الرقمية بشكل كامل. سواء كنت مدونًا ترغب في عرض أفكارك ومشاريعك، أو شركة تسعى لتعزيز وجودك الرقمي، نحن هنا لمساعدتك. فريقنا من المصممين والمطورين يعمل على إنشاء مواقع فريدة وجذابة تتناسب مع هوية علامتك التجارية، مع التركيز على تجربة المستخدم وسهولة التصفح.

نستخدم أحدث التقنيات لتقديم مواقع سريعة الاستجابة ومتوافقة مع جميع الأجهزة، مما يضمن وصول زوارك إليك بسهولة. بالإضافة إلى ذلك، نقدم خدمات تحسين محركات البحث (SEO) لضمان ظهور موقعك في نتائج البحث. انضم إلينا اليوم وابدأ رحلتك الرقمية مع تصميم موقع يميزك عن المنافسين!
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        تصميم مخصص
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تجربة مستخدم محسّنة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        استجابة متعددة الأجهزة
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        تحسين محركات البحث (SEO)
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        دعم فني وصيانة مستمرة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تكنولوجيا متقدمة
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
