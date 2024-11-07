"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import detailsImg from "../../../public/images/ManagmentSoftwares/Main.jpg";
import detailsImg2 from "../../../public/images/ManagmentSoftwares/sup.png";

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

                <h3>برمجة تطبيقات الادارة</h3>
                <p>
                تعتبر تطبيقات الإدارة أدوات حيوية لتحسين كفاءة العمليات داخل الشركات. تساعد هذه التطبيقات في تنظيم وإدارة مختلف جوانب العمل، مثل الموارد البشرية، والمخزون، والمحاسبة. من خلال أتمتة المهام الروتينية، تتيح تطبيقات الإدارة للموظفين التركيز على الأعمال الاستراتيجية بدلاً من المهام الإدارية، مما يسهم في تحسين الإنتاجية وتقليل الأخطاء. بالإضافة إلى ذلك، توفر هذه التطبيقات رؤى تحليلية تساعد الإدارة على اتخاذ قرارات مدروسة تعتمد على بيانات دقيقة
                
                </p>
                <p>
                تتضمن تطبيقات الإدارة مجموعة من المكونات الأساسية التي تساهم في تحسين الأداء. تشمل هذه المكونات إدارة علاقات العملاء (CRM) التي تساعد في تعزيز التفاعل مع العملاء وفهم احتياجاتهم، ونظم تخطيط موارد المؤسسة (ERP) التي تعمل على دمج البيانات عبر مختلف الأقسام. كما يمكن أن تتضمن التطبيقات أدوات لتحليل البيانات، وتطبيقات للمشاريع، وأنظمة إدارة المخزون، مما يسهل التنسيق بين الفرق المختلفة ويعزز من التعاون. استخدام تقنيات حديثة مثل السحابة والحوسبة المحمولة يزيد من مرونة هذه الأنظمة، مما يتيح الوصول إليها من أي مكان وفي أي وقت
                </p>


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
                            إدارة علاقات العملاء (CRM)
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            نظم تخطيط موارد المؤسسة (ERP)
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            إدارة الموارد البشرية (HRM)
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            إدارة المخزون وسلسلة الإمداد
                          </li><li>
                          <i className="bx bx-check"></i>
                          تحليل البيانات والتقارير
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
