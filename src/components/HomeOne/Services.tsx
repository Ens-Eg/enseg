"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../../public/images/shape/services-shape/6.png";

const servicesData = [
  {
    iconName: "flaticon-choice",
    title: "إستضافة المواقع",
    shortText:
      "نقدم خدمة تصميم المواقع لتلبية احتياجات عملائنا من خلال إنشاء مواقع إلكترونية مخصصة",
    viewDetails: "/Shardhosting/",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-choice",
    title: "البريد الالكتروني",
    shortText:
      "تيح لك إنشاء وإدارة حسابات بريد إلكتروني مخصصة باستخدام نطاقك الخاص، مما يوفر لك بريدًا احترافيًا",
    viewDetails: "/Emailhosting/",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-choice",
    title: "تصميم المواقع",
    shortText:
      "تشمل هذه الخدمة تصميم واجهات مستخدم جذابة، وتطوير وظائف متقدمة، وضمان تجربة مستخدم سلسة",
    viewDetails: "/Webdesign/",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-choice",
    title: "تصميم الفيديو",
    shortText:
      "خدمات تصميم إعلانات الفيديو توفر حلولًا إبداعية لإنشاء محتوى مرئي يجذب الانتباه ويعزز الرسائل التسويقية",
    viewDetails: "/Videodesign/",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-choice",
    title: "برمجيات الويب",
    shortText:
      "خدمات برمجيات الويب تشمل مجموعة واسعة من الحلول التقنية التي تساعد الشركات على تحسين عملياتها",
    viewDetails: "/Webapp/",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-choice",
    title: "برمجيات الموبايل",
    shortText:
      "خدمات برمجيات الموبايل تشمل تصميم وتطوير تطبيقات مخصصة تعمل على أنظمة التشغيل المختلفة",
    viewDetails: "/Mobileapp/",
    aosDelay: "600",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>الخدمات</span>
            <h2>نوفر لك افضل الحلول</h2>
            <p>
            تتضمن خدمات الويب توفير حلول متكاملة مثل تصميم المواقع وتطوير التطبيقات، مما يضمن تلبية احتياجات المستخدمين بأفضل طريقة ممكنة            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="single-offer">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default Services;
