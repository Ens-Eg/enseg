"use client";

import React from "react";
import Image from "next/image";

import chooseImg from "../../../public/images/choose-img.png";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-ue-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div
                className="choose-title"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <span>لماذا نحن؟</span>
                <h2>
                  ضمان اعمالك هو مسؤليتنا 
                </h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="choose-card"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <span>
                  01 <i className="flaticon-technical-support"></i>
                </span>
                <h3>حماية قصوي</h3>
                <p>
                حماية الخوادم والمواقع هي عملية أساسية لضمان سلامة البيانات وسرية المعلومات. تتضمن استخدام جدران نارية، وتشفير البيانات، وتحديث البرمجيات بانتظام لحماية الأنظمة من الهجمات                </p>
              </div>

              <div
                className="choose-card"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <span>
                  02 <i className="flaticon-shield"></i>
                </span>
                <h3>التصميم والبرمجة </h3>
                <p>
                تصميم المواقع يشمل إنشاء واجهات جذابة وسهلة الاستخدام تلبي احتياجات الزوار، مع التركيز على تجربة المستخدم. أما البرمجة، فتتعلق بتطوير الوظائف الخلفية للموقع، مثل قواعد البيانات                </p>
              </div>

              <div
                className="choose-card"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <span>
                  03 <i className="flaticon-support"></i>
                </span>
                <h3>الدعم الفني</h3>
                <p>
                الدعم الفني هو خدمة تقدمها الشركات لمساعدة العملاء في حل المشكلات التقنية المتعلقة بالمنتجات أو الخدمات. يشمل الدعم الفني تقديم المشورة، والإصلاحات، والتوجيه                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="choose-img"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <Image src={chooseImg} alt="Image" width={807} height={704} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
