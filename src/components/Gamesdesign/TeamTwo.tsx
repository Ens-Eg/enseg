"use client";

import React from "react";
import Image from "next/image";

import teamShape from "../../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "/images/Gamedesign/1.png",
    link:"https://gamezad.com/en/game/space-war-246",
    name: "حرب الفضاء",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },

  {
    image: "/images/Gamedesign/2.png",
    link:"https://gamezad.com/en/game/Pirates-Treasure-249",
    name: "كنز القراصنة",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/3.png",
    link:"https://gamezad.com/en/game/F16WAR-295",
    name: "F16 WAR",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/4.png",
    link:"https://gamezad.com/en/game/FARM-CRUSH-296",
    name: "FARM CRASH",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/5.png",
    link:"https://gamezad.com/en/game/Candy-Cat-305",
    name: "CANDY CAT SHOT",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/6.png",
    link:"https://gamezad.com/en/game/Balloons-Park-325",
    name: "BALLON DRAGON",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/7.png",
    link:"https://gamezad.com/en/game/Brick-Hit-326",
    name: "BRICK HIT",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/8.png",
    link:"https://gamezad.com/en/game/Dead-Street-458",
    name: "DEAD STREET",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/9.png",
    link:"https://gamezad.com/en/game/Dragon-Escape-460",
    name: "DRAGON ESCAPE",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },

  {
    image: "/images/Gamedesign/10.png",
    link:"https://gamezad.com/en/game/Nemo-Fish-462",
    name: "NEMO FISH",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/11.png",
    link:"https://gamezad.com/en/game/ANGRY-RUN-463",
    name: "ANGRY RUN",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/12.png",
    link:"https://gamezad.com/en/game/Frog-Bubbles-494",
    name: "FROG BUBBLES",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },

  {
    image: "/images/Gamedesign/12.png",
    link:"https://gamezad.com/en/game/Frog-Bubbles-494",
    name: "FROG BUBBLES",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/13.png",
    link:"https://gamezad.com/en/game/WAR-OF-TANKS-495",
    name: "WAR OF TANKS",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/14.png",
    link:"https://gamezad.com/en/game/SPACE-SHIP-WAR-496",
    name: "SPACESHIP WAR",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/15.png",
    link:"https://gamezad.com/en/game/Fisher-MAN-497",
    name: "FISHER MAN",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/16.png",
    link:"https://gamezad.com/en/game/Mad-Shark-499",
    name: "MAD SHARK",
    designation: "تصميم شخصيات وبيئة اللعبة ",
    aosDelay: "100",


  },
  {
    image: "/images/Gamedesign/17.png",
    link:"https://gamezad.com/en/game/Mad-Shark-499",
    name: "8 POOL",
    designation: "تصميم شخصيات وبيئة اللعبة ",
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
            <h2>من اعمالنا بتصميم الالعاب</h2>
            <p>
             فيما يلى بعض من اعمالنا فى مجال تصميم الشخصيات الخاصة بالالعاب وبيئة الجرافيكس الخاصة بها
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData &&
              teamData.slice(0, 19).map((value, i) => (
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
