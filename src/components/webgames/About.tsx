"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/Gamedesign/main.png";

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
                <span>تصميم الالعاب</span>
                <h2>
                تصميم الألعاب الإلكترونية للويب والموبايل
                </h2>
                <p>
                نقدم في شركتنا خدمة تصميم الألعاب الإلكترونية للويب والموبايل، حيث نركز على إنشاء تجارب تفاعلية ممتعة ومبتكرة. يضم فريقنا مصممين ومطورين محترفين يتمتعون بخبرة واسعة في تصميم الألعاب من مختلف الأنواع، مما يتيح لنا تلبية احتياجات كل عميل بشكل مخصص.

نحن نهتم بكل التفاصيل، بدءًا من تصميم الشخصيات الفريدة التي تتناسب مع موضوع اللعبة، وصولاً إلى إنشاء بيئات غامرة تأسر اللاعبين. نستخدم أحدث التقنيات وأدوات التصميم لضمان جودة عالية وتجربة مستخدم سلسة، مما يجعل ألعابك تتألق على جميع المنصات.

كما نقدم استشارات شاملة حول استراتيجيات اللعبة وآليات اللعب، لضمان تفاعل اللاعبين وجذبهم بشكل فعّال. انضم إلينا اليوم ودعنا نساعدك في تحويل أفكارك إلى واقع ملموس، لتصميم ألعاب مميزة تترك أثرًا في عالم الألعاب الرقمية</p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        تصميم فريد للشخصيات
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        بيئات غامرة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        توافق مع مختلف المنصات
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        آليات لعب مبتكرة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تحسين الأداء
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        دعم فني وتحديثات مستمرة
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about" className="default-btn">
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
