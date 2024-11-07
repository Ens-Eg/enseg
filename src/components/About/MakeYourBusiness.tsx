"use client";

import React from "react";
import Link from "next/link";

const MakeYourBusiness: React.FC = () => {
  return (
    <>
      <div className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>نضمن لك نجاح اعمالك على الانترنت وتكوين هوية رقمية مميزة</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>رؤيتنا</h3>
                <p>
                رؤيتنا في شركتنا هي أن نكون الرواد في تقديم حلول رقمية مبتكرة تلبي احتياجات السوق المحلي والدولي. نهدف إلى تمكين الأفراد والشركات من تعزيز وجودهم الرقمي من خلال تصميم مواقع إلكترونية احترافية وسهلة الاستخدام، مع توفير خدمات استضافة موثوقة وآمنة
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>نبذة عنا</h3>
                <p>
                 شركة ensegypt هي شركة مسجلة مصرية متخصصة فى حلول الويب وبرمجيات الموبايل والعديد من المجالات التقنية من خلال فريق من المتخصصين من مصممين ومبرمجين يعملون بحب لتقديم أفضل الخدمات المميزة للعملاء ويسعون لمواكبة التطور فى مجال الويب
                </p>
              </div>

              <div className="business-btn">
                <Link href="/news" className="default-btn">
                  أخبار الشركة
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">150</span>
                    </h2>
                    <p>عميل مميز</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">400</span>
                    </h2>
                    <p>عميل استضافة</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">3</span>
                    </h2>
                    <p>فروع خدمة</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">15</span>
                    </h2>
                    <p>عام خبرة</p>
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

export default MakeYourBusiness;
