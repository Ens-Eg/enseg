"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "../../../public/images/blog/blog1.png";
import blogImg2 from "../../../public/images/blog/blog2.png";
import blogImg3 from "../../../public/images/blog/blog3.png";

const News: React.FC = () => {
  return (
    <>
      <div className="news-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>أخبارنا </span>
            <h2>جديد الاخبار الخاصة بنا </h2>
            <p>
             فى هذا القسم نعرض جديد الاخبار والتطورات الخاصة بالشركة والخاصة بالخدمات
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details1">
                    <Image
                      src={blogImg1}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>20 Feb</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Ens
                      </Link>
                    </li>
                    
                  </ul>

                  <Link href="/news/news-details1">
                    <h3>إستخدام Blender فى انشاء بيئة الالعاب</h3>
                  </Link>

                  <p>
                  استخدام Blender في إنشاء بيئة الألعاب هو خيار شائع بين مطوري الألعاب بفضل قدراته القوية ومجانيته. إليك بعض الجوانب الرئيسية لاستخدام Blender في هذا المجال
                  </p>

                  <Link href="/news/news-details1" className="read-more">
                   إقراء المذيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details2">
                    <Image
                      src={blogImg2}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>21 Jan</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> Ens
                      </Link>
                    </li>
                   
                  </ul>

                  <Link href="/news/news-details2">
                    <h3>مميزات محرك العاب unity</h3>
                  </Link>

                  <p>
                  محرك الألعاب Unity يتميز بعدة جوانب تجعل منه خيارًا مفضلًا لدى مطوري الألعاب بفضل هذه المميزات، يُعتبر Unity خيارًا قويًا للمطورين من جميع المستويات، من المبتدئين إلى المحترفين
                  </p>

                  <Link href="/news/news-details2" className="read-more">
                    إقراء المذيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details3">
                    <Image
                      src={blogImg3}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>22 Sep</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="/#">
                        <i className="flaticon-user"></i> Ens
                      </Link>
                    </li>
                   
                  </ul>

                  <Link href="/news/news-details3">
                    <h3>لماذا نستخدم next </h3>
                  </Link>

                  <p>
                  يتيح Next.js التقديم من جانب الخادم، مما يحسن سرعة التحميل وتجربة المستخدم، ويُعتبر مفيدًا لتحسين محركات البحث (SEO)
                  </p>

                  <Link href="/news/news-details" className="read-more">
                    إقراء المذيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
