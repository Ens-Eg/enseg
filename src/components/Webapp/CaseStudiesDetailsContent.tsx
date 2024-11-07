"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import detailsImg from "../../../public/images/Webapp/Main.jpg";
import detailsImg2 from "../../../public/images/Webapp/sup.png";

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

                <h3>برمجة تطبيقات الويب</h3>
                <p>
                نحن نجمع بين الإبداع والتكنولوجيا لتقديم حلول برمجية مبتكرة تلبي احتياجاتكم. نحن متخصصون في تصميم وتطوير تطبيقات الويب عالية الجودة، مع التركيز على تجربة المستخدم والأداء الفائق. فريقنا المتخصص يعمل بتقنيات حديثة لضمان تقديم منتجات فعالة وسهلة الاستخدام. سواء كنتم تبحثون عن تطبيقات مخصصة لعملكم أو منصات تفاعلية، نحن هنا لتحقيق رؤاكم وتحويل أفكاركم إلى واقع. انضموا إلينا لنبدأ رحلة التحول الرقمي معًا!
                </p>

                <p>
                نؤمن بأن التكنولوجيا هي أداة قوية لتمكين الأعمال وتحقيق الأهداف. نقدم مجموعة شاملة من خدمات تطوير تطبيقات الويب، بدءًا من التحليل والتخطيط، وصولاً إلى التصميم والتنفيذ. فريقنا المكون من مطورين ومصممين مبدعين يسعى دائمًا لتقديم حلول متكاملة تلبي متطلبات السوق الحديثة. نحن نستخدم أحدث التقنيات وأفضل الممارسات لضمان أن تكون تطبيقاتنا آمنة، سريعة، وقابلة للتوسع. دعونا نساعدكم في تعزيز وجودكم الرقمي وتحقيق النجاح الذي تطمحون إليه. تواصلوا معنا اليوم لاستكشاف كيف يمكننا العمل معًا!
                </p>

                <p>
                نضع العملاء في قلب كل ما نقوم به. نحن نفهم أن كل مشروع فريد من نوعه، ولهذا نقدم حلولاً مصممة خصيصًا لتلبية احتياجاتكم الخاصة. بفضل خبرتنا في تطوير تطبيقات الويب، نحن نساعدكم على تحقيق أهدافكم بكفاءة وفاعلية. من واجهات المستخدم الجذابة إلى أنظمة الخلفية المعقدة، نحن نضمن تكاملًا تامًا يحقق تجربة سلسة للمستخدمين. كما نحرص على تقديم الدعم المستمر بعد الإطلاق، لضمان أن تظل تطبيقاتكم في أفضل حالاتها. دعونا نكون شركاء في رحلتكم نحو الابتكار والنمو!
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
                            Php and Mysql
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            ASP.NET AND SQL Server
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            REACT AND NODEJS
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            NEXT AND NODEJS
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
