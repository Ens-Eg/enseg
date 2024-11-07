"use client";

import React from "react";
import Link from "next/link";

const NewsSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
     

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">الاكثر قراءة</h3>

          <div className="post-wrap">
            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-1.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 20, 2024</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                  أهمية التأثير الرقمي والإبداع الشخصي
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-2.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 21, 2024</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                  استخدام Blender في إنشاء بيئة الألعاب
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-3.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 22, 2024</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                  برمجة تطبيقات الويب
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/popular-posts-4.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <time>February 23, 2024</time>
                <h4 className="title usmall">
                  <Link href="/news/news-details">
                  بناء تجربة رقمية متميزة
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">أشهر الوسوم</h3>

          <div className="post-wrap">
            <div className="tagcloud">
              <Link href="#">تطوير الالعاب</Link>
              <Link href="#">تصميم المواقع</Link>
              <Link href="#">برمجة الويب</Link>
              <Link href="#">تصميم المدونات</Link>
              <Link href="#">تصميم الالعاب</Link>
              <Link href="#">تطبيقات الويب</Link>
              <Link href="#">تطبيقات الموبايل</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSidebar;
