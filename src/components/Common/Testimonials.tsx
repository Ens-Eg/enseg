"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonialsData = [
  {
    image: "/images/clients/client1.jpg",
    name: "VidaWorkstation",
    designation: "إستضافة - تصميم - برمجة ",
    feedbackText:
      "نشكركم على الخدمة المميزة التى ساهمت بالايجاب فى تكون علامتنا التجارية",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client2.jpg",
    name: "Gamezad",
    designation: " تصميم - إستضافة - برمجة - فيديو - تطوير العاب",
    feedbackText:
      "تعامل كامل فى انشاء النشاط من انشاء البرمجة وتصميم وبرمجة الالعاب وتصميم فيديوهات الاعلانات",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client3.jpg",
    name: "شركة عفارم",
    designation: "تصميم - إستضافة ",
    feedbackText:
      "نشكركم على التعامل والتفاهم بين شركتنا وطاقم العمل الخاص بكم",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client4.jpg",
    name: "Koto App",
    designation: "تصميم - استضافة - انتاج فيديو - برمجة موبايل",
    feedbackText:
      "تم التعامل فى انشاء التطبيق ولجودة التعامل تم التعاقد على انشاء التصميمات وانتاج الفيديوهات الترويجية",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="client-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>تعليقات العملاء</span>
            <h2>من أراء العملاء فى خدماتنا</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slide"
          >
            {testimonialsData &&
              testimonialsData.slice(0, 10).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={70}
                        height={70}
                      />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
