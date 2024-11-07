"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/shared.png";

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
                <span>عن الشركة</span>
                <h2>
                  إبدا الان موقعك الشخصى او مدونتك 
                </h2>
                <p>
                شركةENSEGYPT هي شركة متخصصة في تقديم خدمات شاملة لتطوير وإدارة المواقع الإلكترونية والتطبيقات عبر الإنترنت. تهدف هذه الشركات إلى تلبية احتياجات الأفراد والشركات في إنشاء حضور رقمي قوي على شبكة الإنترنت، من خلال توفير خدمات استضافة المواقع التي تضمن سرعة وأمان الوصول إلى المحتوى، بالإضافة إلى تصميم مواقع متجاوبة وجذابة تتناسب مع احتياجات المستخدمين وتجربة الاستخدام.

كما تقدم هذه الشركات خدمات البرمجة المخصصة، حيث يقوم فريق من المطورين بإنشاء حلول تقنية مبتكرة لتلبية متطلبات العملاء الفريدة، سواء كانت مواقع إلكترونية تفاعلية، تطبيقات ويب، أو منصات تجارة إلكترونية. بفضل هذه التخصصات، تسهم شركة استضافة وتصميم وبرمجة في تمكين الأعمال من التوسع الرقمي وزيادة الوصول إلى جمهور أوسع، مع ضمان استدامة الأداء على المدى الطويل.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        شركة مسجلة 
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        سيرفرات سريعة 
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        فريق تصميم متكامل
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        دعم فني
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        بيئة عمل متميزة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                       خدمة عملاء
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
