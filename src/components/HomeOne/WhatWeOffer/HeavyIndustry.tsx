"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import offerImg from "../../../../public/images/offer1.png";

const HeavyIndustry: React.FC = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={offerImg} alt="Image" width={370} height={390} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Heavy Industry</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              atque recusandae esse alias reprehenderit.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              doloribus molestias illo ad aperiam quo natus voluptatum, eos
              laboriosam vel deserunt?
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Opportunities
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Creating
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Industries
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    Security
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Highest
                  </li>
                  <li>
                    <i className="flaticon-checked"></i>
                    Priority
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services" className="default-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeavyIndustry;