"use client";

import React from "react";
import Link from "next/link";

const Yearly: React.FC = () => {
  return (
    <>
    <div 
      className="row justify-content-center"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <div className="col-lg-4 col-md-6">
        <div className="single-pricing">
          <div className="pricing-top-heading">
            <h3>العرض الاول</h3>
            <p>يمكن اضافة لوحة تحكم CPANEL/PLESK</p>
          </div>
          <span>
            ١٣٠٠٠<sub>/جنيه</sub>
          </span>

          <ul>
            <li>
              <i className="bx bx-check"></i>
              Xeon - 10 cores - 2,2 GHz
            </li>
            <li>
              <i className="bx bx-check"></i>
             Ram 32 GB  

            </li>
            <li>
              <i className="bx bx-check"></i>
              2 x SSD 960GB Mixed Use  
            </li>
            <li>
              <i className="bx bx-check"></i>
              1 x GE port UTP  

            </li>
            <li>
              <i className="bx bx-check"></i>
              Monitoring
            </li>
            <li>
              <i className="bx bx-check"></i>
              Remote Management
            </li>
            <li>
              <i className="bx bx-x"></i>
           Control Panal
            </li>
          </ul>

          <Link href="/contact" className="default-btn">
            إشترك الان
          </Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="single-pricing">
          <div className="pricing-top-heading">
            <h3>العرض الثاني</h3>
            <p>يمكن اضافة لوحة تحكم CPANEL/PLESK</p>
          </div>
          <span>
            ٢٢٠٠٠<sub>/جنيه</sub>
          </span>

          <ul>
            <li>
              <i className="bx bx-check"></i>
              Xeon - 12 cores - 2,2 GHz
            </li>
            <li>
              <i className="bx bx-check"></i>
              Ram 32 GB 
            </li>
            <li>
              <i className="bx bx-check"></i>
              2 x SSD 480GB Write Intensive  

            </li>
            <li>
              <i className="bx bx-check"></i>
              1 x GE port UTP  

            </li>
            <li>
              <i className="bx bx-check"></i>
              Monitoring

            </li>
            <li>
              <i className="bx bx-check"></i>
              Remote Management

            </li>
            <li>
              <i className="bx bx-x"></i>
              Control Panal
              </li>
          </ul>

          <Link href="/contact" className="default-btn">
            إشترك الان
          </Link>

          <strong className="popular">عرض مميز</strong>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
        <div className="single-pricing">
          <div className="pricing-top-heading">
            <h3>العرض الثالث</h3>
            <p>يمكن اضافة لوحة تحكم CPANEL/PLESK</p>
          </div>
          <span>
          ٤٥٠٠٠<sub>/جنيه</sub>
          </span>

          <ul>
            <li>
              <i className="bx bx-check"></i>
              AMD 24 cores - 2,65 GHz
            </li>
            <li>
              <i className="bx bx-check"></i>
              RAM:128 GB 
            </li>
            <li>
              <i className="bx bx-check"></i>
              2 x SSD 960GB Mixed Use 
            </li>
            <li>
              <i className="bx bx-check"></i>
              1 x GE port UTP

            </li>
            <li>
              <i className="bx bx-check"></i>
              Monitoring
            </li>
            <li>
              <i className="bx bx-check"></i>
              Remote Management

            </li>
            <li>
              <i className="bx bx-x"></i>
              Control Panal

            </li>
          </ul>

          <Link href="/contact" className="default-btn">
           إشترك الان
          </Link>
        </div>
      </div>
      <p>لاضافة لوحة تحكم Cpanel ٣٠٠٠ جنية شهريا</p>
      <p>لاضافة لوحة تحكم plesk ١٧٥٠ جنية شهريا</p>
    </div>
  </>
  );
};

export default Yearly;
