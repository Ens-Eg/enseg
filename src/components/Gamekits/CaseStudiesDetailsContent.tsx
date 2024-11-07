"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import detailsImg from "../../../public/images/GameKits/Main.jpg";
import detailsImg2 from "../../../public/images/GameKits/sup.png";

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
                نعتبر تصميم شخصيات الألعاب أحد العناصر الحيوية التي تضفي عمقًا وحياة على التجربة اللعبية. يقوم فريقنا من المصممين المبدعين بتطوير شخصيات فريدة ومميزة تعكس الهوية الثقافية والقصصية للألعاب. نحن نهتم بتفاصيل الشخصية، من الشكل والتصميم إلى التعبيرات والحركات، مما يضمن تفاعل اللاعبين مع الشخصيات بشكل عاطفي. من خلال استخدام أحدث تقنيات الرسوم المتحركة، نعمل على خلق شخصيات تتسم بالحيوية والديناميكية، مما يعزز من تجربة المستخدم ويجعل كل لحظة في اللعبة مليئة بالتشويق                </p>
                <p>
                نركز على تصميم بيئات مبتكرة تتنوع بين العوالم الخيالية والمدن المستقبلية، مع الانتباه إلى كل تفاصيل البيئة، مثل الإضاءة واللون والملمس. فريقنا يستخدم تقنيات متقدمة مثل الرسوم ثلاثية الأبعاد والتصميم الجرافيكي لتحقيق مستوى عالٍ من الواقعية والجمال البصري. نحرص على أن تكون كل بيئة مصممة بعناية لتعكس جو اللعبة وتساهم في تعزيز القصة، مما يجعل اللاعبين يشعرون وكأنهم جزء من عالم جديد تمامًا </p>


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
                            إبداع وابتكار
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            خبرة فنية عالية
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            تصميم مخصص
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            اهتمام بالتفاصيل
                          </li><li>
                          <i className="bx bx-check"></i>
                          تحسين تجربة المستخدم
                          </li>
                          <li>
                          <i className="bx bx-check"></i>
                          تقنيات متقدمة
                          </li>
                          <li>
                          <i className="bx bx-check"></i>
                          تعاون وثيق مع العملاء
                          </li>
                          <li>
                          <i className="bx bx-check"></i>
                          دعم وتحديث مستمر
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
