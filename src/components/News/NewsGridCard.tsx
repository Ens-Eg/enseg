"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "../../../public/images/blog/blog1.png";
import blogImg2 from "../../../public/images/blog/blog2.png";
import blogImg3 from "../../../public/images/blog/blog3.png";
import blogImg4 from "../../../public/images/blog/blog4.png";
import blogImg5 from "../../../public/images/blog/blog5.png";
import blogImg6 from "../../../public/images/blog/blog6.png";
import blogImg7 from "../../../public/images/blog/blog7.png";
import blogImg8 from "../../../public/images/blog/blog8.png";
import blogImg9 from "../../../public/images/blog/blog9.png";

const NewsGridCard: React.FC = () => {
  return (
    <>
      <div className="news-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
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
                    <span>20 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                   
                  </ul>

                  <Link href="/news/news-details1">
                    <h3>استخدام Blender في إنشاء بيئة الألعاب
                    </h3>
                  </Link>

                  <p>
                  Blender هو برنامج مفتوح المصدر يستخدم في العديد من مجالات التصميم ثلاثي الأبعاد، بما في ذلك الرسوم المتحركة، النمذجة، الإضاءة، التحريك، والمواد
                  </p>

                  <Link href="/news/news-details1" className="read-more">
                  إقراء المزيد<i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
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
                    <span>21 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                 
                  </ul>

                  <Link href="/news/news-details2">
                    <h3>مميزات محرك الألعاب Unity</h3>
                  </Link>

                  <p>
                  محرك الألعاب Unity هو واحد من أكثر محركات الألعاب شهرة واستخدامًا في صناعة الألعاب اليوم، ويعد الخيار المفضل للكثير من المطورين
                  </p>

                  <Link href="/news/news-details2" className="read-more">
                    إقراء المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
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
                    <span>22 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                  
                  </ul>

                  <Link href="/news/news-details3">
                    <h3>استخدام Node.js و Next.js </h3>
                  </Link>

                  <p>
                  في عصر تكنولوجيا الويب الحديث، أصبح من الضروري اختيار الأدوات والتقنيات التي تسمح ببناء تطبيقات ويب عالية الأداء، قابلة للتوسع، وسهلة الصيانة. اثنان من أبرز هذه التقنيات هما Node.js و Next.js
                  </p>

                  <Link href="/news/news-details3" className="read-more">
                  إقراء المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details4">
                    <Image
                      src={blogImg4}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>23 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                 
                  </ul>

                  <Link href="/news/news-details4">
                    <h3> حماية بياناتك بأعلى مستويات الأمان</h3>
                  </Link>

                  <p>
                  في عصر تكنولوجيا المعلومات الحديث، أصبحت البيانات والمعلومات أكثر عرضة للتهديدات والهجمات الإلكترونية التي تستهدف الأنظمة والخوادم
                  </p>

                  <Link href="/news/news-details4" className="read-more">
                  إقراء المزيد<i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details5">
                    <Image
                      src={blogImg5}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>24 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                  
                  </ul>

                  <Link href="/news/news-details5">
                    <h3> بناء تجربة رقمية متميزة</h3>
                  </Link>

                  <p>
                  في عصر الإنترنت، أصبح تصميم المواقع أحد العناصر الأساسية التي تحدد نجاح أي نشاط تجاري أو شخصي على الإنترنت. تتطلب المنافسة القوية في سوق الإنترنت
                  </p>

                  <Link href="/news/news-details5" className="read-more">
                  إقراء المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details6">
                    <Image
                      src={blogImg6}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>25 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                   
                  </ul>

                  <Link href="/news/news-details6">
                    <h3> برمجة تطبيقات الويب</h3>
                  </Link>

                  <p>
                  في عالم تطوير البرمجيات، يعتبر التواصل الفعال مع العملاء من الركائز الأساسية التي تساهم في نجاح أي مشروع، خصوصًا عندما يتعلق الأمر بـ برمجة تطبيقات الويب
                  </p>

                  <Link href="/news/news-details6" className="read-more">
                  إقراء المزيد<i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details7">
                    <Image
                      src={blogImg7}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>25 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                
                  </ul>

                  <Link href="/news/news-details7">
                    <h3>
                    تعزيز التجربة الرقمية وإعادة تعريف الترفيه
                    </h3>
                  </Link>

                  <p>
                  في عالم صناعة الألعاب الرقمية، يظل الابتكار هو المحرك الرئيسي وراء نجاح العديد من الألعاب وتحقيقها للانتشار الواسع. فعلى الرغم من أن التكنولوجيا تتطور بسرعة
                  </p>

                  <Link href="/news/news-details7" className="read-more">
                  إقراء المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details8">
                    <Image
                      src={blogImg8}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>27 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
                 
                  </ul>

                  <Link href="/news/news-details8">
                    <h3> أهمية التأثير الرقمي والإبداع الشخصي</h3>
                  </Link>

                  <p>
                  في عالم الإنترنت الحديث، أصبح تصميم المدونات من الأدوات الفعّالة التي تساعد الأفراد والشركات على التعبير عن أفكارهم، ومشاركة محتوى قيم
                  </p>

                  <Link href="/news/news-details8" className="read-more">
                  إقراء المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/news-details9">
                    <Image
                      src={blogImg9}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>28 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> ENS
                      </Link>
                    </li>
              
                  </ul>

                  <Link href="/news/news-details9">
                    <h3>
                    ركيزة أساسية للنجاح والموثوقية
                    </h3>
                  </Link>

                  <p>
                  في عالم الإنترنت الرقمي المتسارع، أصبحت شركات تصميم واستضافة المواقع من العناصر الأساسية لنجاح الأعمال التجارية على الإنترنت
                  </p>

                  <Link href="/news/news-details9" className="read-more">
                  إقراء المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsGridCard;
