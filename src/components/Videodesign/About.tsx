"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/Videodesign/main.png";

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
                <span>تصميم الفيديو</span>
                <h2>
                جزءًا أساسيًا من استراتيجيات التسويق الحديثة
                </h2>
                <p>
                تصميم عروض الفيديو الإعلانية يعد جزءًا أساسيًا من استراتيجيات التسويق الحديثة. يتطلب هذا التصميم الجمع بين الإبداع والمحتوى الجذاب لإيصال الرسالة بفاعلية. يبدأ الأمر بتحديد الهدف من الإعلان والجمهور المستهدف، مما يساعد في توجيه الرسالة بطريقة مناسبة. بعد ذلك، يأتي دور القصة: يجب أن تكون القصة بسيطة ومؤثرة، مع استخدام عناصر بصرية وصوتية تسهم في جذب الانتباه.

استخدام الرسوم المتحركة أو مقاطع الفيديو الحية يمكن أن يعزز من جاذبية الإعلان. كما أن اختيار الموسيقى المناسبة يضيف بعدًا عاطفيًا يُساعد في التأثير على المشاهدين. من المهم أيضًا مراعاة طول الفيديو؛ فالفيديوهات القصيرة غالبًا ما تكون أكثر فعالية في عصر الانتباه المحدود</p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        جذب الانتباه
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        التواصل
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        شرح معقدات ببساطة
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        زيادة التفاعل
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تحسين محركات البحث
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        قابلية المشاركة
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/contact" className="default-btn">
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
