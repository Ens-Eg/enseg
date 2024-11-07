"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>بريد الكتروني</h3>
                <p>
                  <a href="mailto:info@ensegypt.com">info@ensegypt.com</a>
                </p>
                <p>
                  <a href="mailto:sales@ensegypt.com">sales@ensegypt.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>هاتف</h3>
                <p>
                 <a href="tel:01553841793">
                  01553841793</a> phone / whatsapp. + 2
                </p>
                <p><a href="tel:01553841793">
                566027954</a> phone / whatsapp. + 971
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>مقرنا</h3>
                <p>١١ شارع النصر , مدينة نصر , القاهرة</p>
                <p>٢٥ شارع بن الفارض , طنطا</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3>الدعم الفني المباشر</h3>
                <p>يمكنك التحدث مباشرة مع احد ممثلى خدمة العملاء</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
