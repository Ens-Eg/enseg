"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import mainImg from "../../../public/images/home-one/main-img1.png";
import offer from "../../../public/images/offer.png";
// Banner Shape Images
import shape1 from "../../../public/images/home-one/shape1.png";
import shape2 from "../../../public/images/home-one/shape2.png";
import shape3 from "../../../public/images/home-one/shape3.png";
import shape4 from "../../../public/images/home-one/shape4.png";

// Animate Shape Images
import animateShape1 from "../../../public/images/home-one/shape/animate1.png";
import animateShape2 from "../../../public/images/home-one/shape/animate2.png";
import animateShape3 from "../../../public/images/home-one/shape/animate3.png";

import bottomShape from "../../../public/images/home-one/bottom-shape.png";

const MainBanner: React.FC = () => {
  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle(); // Open or close the chat window
    }
  };
  return (
    <>
      <div className="main-banner-area main-banner-area-one">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                 إحصل على موقعك الان ! 
                </h1>
              
                <p
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                يمكنك الان الحصول على موقعك الخاص بتصميم يناسب نشاط موية علامتك التجارية مع دعم فني متواصل على مدار الساعة وتصميم مخصص ليتناسب مع علامتك التجارية فقط بسعر خاص
                </p>
           

                <div
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                
                <h1 className="offerz">ابتداء من ٣٠٠٠ جنية</h1>
                  <Link href="#" onClick={handleOpenChat}  className="default-btn">
                    أشترك الان
                  </Link>
                 
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <Image
                  src={mainImg}
                  alt="Image"
                  width={720}
                  height={460}
                />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                <Image
                  className="animate__animated animate__fadeInUp animate__fast"
                  src={shape1}
                  alt="Image"
                  width={1083}
                  height={54}
                />
                <Image
                  className="animate__animated animate__fadeInUp animate__fast"
                  src={shape2}
                  alt="Image"
                  width={600}
                  height={638}
                />
                <Image
                  className="animate__animated animate__fadeInRight animate__fast mostafa"
                  src={shape3}
                  alt="Image"
                  width={292}
                  height={230}
                />
                <Image
                  className="animate__animated animate__fadeInRight animate__fast"
                  src={shape4}
                  alt="Image"
                  width={200}
                  height={470}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <Image
            src={animateShape1}
            alt="Image"
            width={68}
            height={74}
          />
          <Image
            src={animateShape2}
            alt="Image"
            width={32}
            height={27}
          />
          <Image
            src={animateShape3}
            alt="Image"
            width={150}
            height={119}
          />
        </div>

        <div className="white-shape">
          <Image
            src={bottomShape}
            alt="Image"
            width={1920}
            height={308}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
