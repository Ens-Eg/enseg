"use client";

import React from "react";
import Image from "next/image";

import teamShape from "../../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "/images/Webdesign/vida.png",
    link:"http://vidaworkstation.com",
    name: "فيدا ورك ستيشن",
    designation: "برمجة الموقع كامل",
    aosDelay: "100",


  },
  {
    image: "/images/Webdesign/afarem.png",
    link:"http://afaremfood.com/",
    name: "شركة عفارم",
    designation: "برمجة الموقع كامل",
    aosDelay: "200",

 
  },
  {
    image: "/images/Webdesign/gamezad.png",
    link:"http://gamezad.com",
    name: "جيم زاد",
    designation: "برمجة الموقع كامل",
    aosDelay: "300",


  },
];

const TeamTwo: React.FC = () => {
  return (
    <>
      <div className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>من اعمالنا</span>
            <h2>من اعمالنا ببرمجة المواقع</h2>
            <p>
             فيما يلى بعض من اعمالنا فى مجال برمجة المواقع الالكترونية
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData &&
              teamData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                     <Image
                        src={value.image}
                        alt="Image"
                        width={140}
                        height={140}
                      />

                      <div className="team-img">
                        <Image
                          src={teamShape}
                          alt="Image"
                          width={208}
                          height={198}
                        />
                      </div>
                    </div>

                    <div className="team-content">
                    <a href={value.link}><h3>{value.name}</h3></a>
                      <span>{value.designation}</span>

                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTwo;
