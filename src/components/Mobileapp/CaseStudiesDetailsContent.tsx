"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import detailsImg from "../../../public/images/Mobileapp/Main.jpg";
import detailsImg2 from "../../../public/images/Mobileapp/sup.png";

const CaseStudiesDetailsContent: React.FC = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-details-wrap">
                <div className="service-img">
                  <Image
                    src={detailsImg}
                    alt="Image"
                    width={900}
                    height={500}
                  />
                </div>

                <h3>برمجة تطبيقات الموبايل</h3>
                <p>
                نقدم خدمات متكاملة في برمجة تطبيقات الموبايل تهدف إلى تلبية احتياجات عملائنا المتنوعة. نحن نطور تطبيقات مبتكرة لكل من أنظمة iOS وAndroid، مما يضمن وصولكم إلى أكبر شريحة ممكنة من المستخدمين. يركز فريقنا على تصميم واجهات مستخدم بديهية وجذابة، مما يعزز تجربة المستخدم ويزيد من معدل التفاعل. سواء كنتم تبحثون عن تطبيقات للتجارة الإلكترونية، أو الحلول المؤسسية، أو التطبيقات الاجتماعية، نحن هنا لتوفير حلول مخصصة تعزز من وجودكم الرقمي                
                </p>
                <p>
                نلتزم بتقديم تطبيقات موبايل عالية الجودة من خلال استخدام أحدث التقنيات وأفضل الممارسات في مجال البرمجة. يتميز فريقنا بالخبرة والاحترافية، حيث يتبنى منهجيات تطوير مرنة تضمن تلبية متطلباتكم بشكل دقيق وفي الوقت المحدد. نركز على ضمان أمان التطبيقات وموثوقيتها، ونقدم دعمًا فنيًا مستمرًا بعد الإطلاق لضمان نجاح تطبيقاتكم. بفضل شغفنا بالابتكار، نعمل باستمرار على تحديث مهاراتنا وتبني تقنيات جديدة، مما يجعلنا شركاء موثوقين في رحلة تطوير تطبيقات الموبايل الخاصة بكم                </p>


                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <Image
                          src={detailsImg2}
                          alt="Image"
                          width={570}
                          height={400}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="car-service-list">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            تطوير تطبيقات iOS
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            تطوير تطبيقات Android
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            تصميم واجهات المستخدم (UI/UX)
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            أمان التطبيقات
                          </li><li>
                          <i className="bx bx-check"></i>
                          دعم وصيانة التطبيقات
                          </li>
                        </ul>
                    
                      </div>
                    </div>
                  </div>   
                </div> <Link href="/contact" className="default-btn">
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

export default CaseStudiesDetailsContent;
