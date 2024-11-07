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
                <span>الاستضافة المشتركة</span>
                <h2>
                  إبدا الان موفعك الشخصى او مدونتك 
                </h2>
                <p>
                تقدم شركتنا خدمة استضافة المواقع المشتركة المصممة خصيصًا لتلبية احتياجات الأفراد والمدونين. تتميز خدماتنا بسرعة الأداء وموثوقية عالية، مما يضمن تجربة مستخدم سلسة لموقعك. نقدم خطط استضافة مرنة وبأسعار تنافسية. كما نوفر دعمًا فنيًا متواصلًا على مدار الساعة، مما يساعدك في حل أي مشكلة قد تواجهها بسرعة. بفضل واجهة الاستخدام السهلة وأدوات إدارة المواقع المتطورة، يمكنك تخصيص موقعك وإدارته بكفاءة، مما يجعل من السهل عليك التركيز على محتواك وجمهورك. انضم إلينا اليوم وابدأ رحلتك الرقمية مع استضافة موثوقة واحترافية
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        لوحة تحكم Cpanel
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        WordPress مدمج
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        سيرفرات سريعة
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
                        نطاق مجاني
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        حماية متطورة 
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
