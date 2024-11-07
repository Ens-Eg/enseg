"use client";

import React from "react";
import Image from "next/image";

import teamShape from "../../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "/images/Videodesign/1.png",
    link:"https://youtu.be/7lHup3tEiPE?si=XNR0FhUpUgfQ8rf8",
    name: "منيو فيدا",
    designation: "تصميم اعلان فيديو",
    aosDelay: "100",


  },
  {
    image: "/images/Videodesign/2.png",
    link:"https://youtu.be/UTwjrVdZZd4?si=pmsqnZjw_JXO-E1i",
    name: "مطعم توما",
    designation: "تصميم اعلان فيديو",
    aosDelay: "100",


  },

  {
    image: "/images/Videodesign/3.png",
    link:"https://youtu.be/Q0qhORdCGs4?si=exzMaDDZkvifL_zG",
    name: "GETIN STORES",
    designation: "تصميم اعلان فيديو",
    aosDelay: "100",


  },
  {
    image: "/images/Videodesign/4.png",
    link:"https://youtu.be/anSaPSYg2JM?si=WAwLlk5Pu9pj2VSi",
    name: "ENS EGYPT",
    designation: "تصميم اعلان فيديو",
    aosDelay: "100",


  },
  {
    image: "/images/Videodesign/5.png",
    link:"https://youtu.be/iKN4KYacnC0?si=D0ryx6YMOB9a5cIv",
    name: "ENS HOSTING",
    designation: "تصميم اعلان فيديو",
    aosDelay: "100",


  },
  {
    image: "/images/Videodesign/6.png",
    link:"https://youtu.be/EF1UzB7fLTQ?si=ChsqV-X2b33OItY7",
    name: "GAMEZAD",
    designation: "تصميم اعلان فيديو",
    aosDelay: "100",


  },

];

const TeamTwo: React.FC = () => {
  return (
    <>
      <div className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>من اعمالنا</span>
            <h2>من اعمالنا بتصميم عروض الفيديو</h2>
            <p>
             فيما يلى بعض من اعمالنا فى مجال تصميم اعلانات الفيديو
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData &&
              teamData.slice(0, 13).map((value, i) => (
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
