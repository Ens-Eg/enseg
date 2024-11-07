"use client";

import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";  // Import EmailJS

import contactImg from "../../../public/images/contact-img.png";

interface ContactFormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare the data to send to EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Recipient Name",  // The name of the recipient (use your desired name or leave as "Recipient")
      subject: formData.subject,
      message: formData.message,
      phone_number: formData.number,
    };

    // Use EmailJS to send the email
    emailjs
      .send(
        "service_kbok7gs",     // Replace with your service ID
        "template_vfgy8ee",     // Replace with your template ID
        templateParams,
        "URAbEccqLNEdZSjo8"          // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send message.", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="main-contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <span>الاتصال بنا</span>
            <h2>للرسائل والاستفسارات</h2>
            <p>
              يرجي التواصل معنا وسوف يتم الرد على الاستفسارات والمتابعة من قبل ممثلينا
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="contact-wrap contact-pages mb-0">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="الاسم"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="البريد الالكتروني"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="number"
                            placeholder="رقم الهاتف"
                            className="form-control"
                            value={formData.number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="عنوان الرسالة"
                            className="form-control"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            cols={30}
                            rows={6}
                            placeholder="نص الرسالة"
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn btn-two">
                          إرسال
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-img">
                <Image src={contactImg} alt="Image" width={807} height={704} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
