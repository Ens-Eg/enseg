"use client";

import React from "react";
import Image from "next/image";

import teamShape from "../../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "/images/Mobilegames/1.png",
    link:"https://play.google.com/store/apps/details?id=com.kotoeg.fruitconnect",
    name: "Fruit Connect",
    designation: "تطوير وبرمجة العاب",
    aosDelay: "100",


  },
  {
    image: "/images/Mobilegames/2.png",
    link:"https://play.google.com/store/apps/details?id=com.ens.kotoshooter",
    name: "لعبة صائد الفقعات",
    designation: "تطوير وبرمجة العاب",
    aosDelay: "200",

 
  },
  {
    image: "/images/Mobilegames/3.png",
    link:"https://play.google.com/store/apps/developer?id=KOTOMENA",
    name: "سباق السيارات",
    designation: "تطوير وبرمجة العاب",
    aosDelay: "300",


  },
  {
    image: "/images/Mobilegames/4.png",
    link:"https://play.google.com/store/apps/details?id=com.ens.kotocar",
    name: "لعبة المتاهه",
    designation: "تطوير وبرمجة العاب",
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
            <h2>من اعمالنا ببرمجة الالعاب</h2>
            <p>
             فيما يلى بعض من اعمالنا فى مجال برمجة الالعاب الالكترونية
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData &&
              teamData.slice(0, 5).map((value, i) => (
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
