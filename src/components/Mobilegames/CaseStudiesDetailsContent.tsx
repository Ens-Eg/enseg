"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import detailsImg from "../../../public/images/Mobilegames/Main.jpg";
import detailsImg2 from "../../../public/images/Mobilegames/sup.png";

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

                <h3>تطوير العاب الموبايل</h3>
                <p>
                نتميز بتقديم خدمات برمجة ألعاب موبايل متكاملة تلبي احتياجات السوق الحديثة، سواء للألعاب البسيطة أو المعقدة. فريقنا من المطورين المبدعين يضمنون تقديم ألعاب مبتكرة تعمل على منصات أندرويد وiOS بكفاءة عالية. نستخدم أحدث التقنيات والأدوات البرمجية مثل Unity وUnreal Engine لضمان تصميم ألعاب رسومية مذهلة وأداء سلس. بالإضافة إلى ذلك، نولي أهمية كبيرة لتطوير واجهات مستخدم سهلة الاستخدام وملائمة لجميع الأعمار والمستويات، مما يضمن للاعبين تجربة ممتعة                </p>

                <p>
                نركز على تطوير ألعاب موبايل تتميز بالإبداع والابتكار. نحن نعلم أن نجاح اللعبة يعتمد على قدرتها في جذب انتباه اللاعبين وتوفير تجربة فريدة. لذا، نقوم بتصميم ألعاب لا تقتصر على تقديم الترفيه فقط، بل تشمل أيضًا تفاعلًا قويًا، سواء من خلال أسلوب اللعب أو القصص المشوقة. نعمل عن كثب مع عملائنا لفهم رؤيتهم وتحويل أفكارهم إلى ألعاب تفاعلية مليئة بالتحديات والمراحل الممتعة التي تبقي اللاعبين متفاعلين لأطول فترة ممكنة                </p>

                <p>
                نحن لا نتوقف عند تطوير اللعبة فقط، بل نقدم أيضًا خدمات الدعم المستمر والتحديثات الدورية لضمان استمرارية نجاح اللعبة. فريقنا يتابع تطورات السوق ويحلل بيانات اللاعبين لتقديم محتوى جديد وتحديثات تواكب احتياجات المستخدمين. سواء كانت التحديثات تتعلق بإصلاح الأخطاء أو إضافة مستويات جديدة أو تحسينات في الأداء، نحرص على أن تظل ألعاب الموبايل التي نطورها تتفوق على توقعات اللاعبين وتضمن لهم تجربة ممتعة ومتجددة                </p>

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
                           UNITY
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            UNREAL
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            CONSTRUCT 3
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            COCOS
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
