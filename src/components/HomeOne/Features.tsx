"use client";

import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "bx bx-shopping-bag",
    title: "خدمات متقدمة",
    shortText:
      " نلبى جميع احتياجاتك فى مجال تصميم وبناء الهوية الرقمية على الانترنت بتقنيات متقدمة تضمن لك التميز وبناء علامتك التجارية بشكل خاص ومميز يرتقي بهويتك الرقمية",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-engineer",
    title: "إستضافة سريعة",
    shortText:
      "نقدم خدمات استضافة المواقع الشخصية والتجارية من خلال سيرفرات باعلى المواصفات التى تضمن لك سرعة فى اداء موقعكم مع حماية لجميع بياناتك ",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-success",
    title: "نتائج مبهرة",
    shortText:
      "نضمن لك نتائج مبهرة للخدمات المقدمة من شركتنا حيث نساهم فى تكوين هويتك وعلامتك التجارية باعلى جودة وتميز يحقق لك اهدافك التى تسعي لتنفيذها",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
];

const Features: React.FC = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                   
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
