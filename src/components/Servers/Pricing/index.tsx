"use client";

import React from "react";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

const PricingStyleOne: React.FC = () => {
  const openTabSection = (evt: React.MouseEvent<HTMLLIElement>, tabName: string) => {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element>;
    let tablinks: HTMLCollectionOf<Element>;

    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].setAttribute("style", "display: none;");
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    const tabElement = document.getElementById(tabName);
    if (tabElement) {
      tabElement.setAttribute("style", "display: block;");
    }
    evt.currentTarget.className += "current";
  };

  return (
    <div className="pricing-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>السيرفرات الخاصة</span>
          <h2>عروض خاصة مميزة</h2>
          <p>
         يمكنك الان الحصول على سيرغرك الخاص والبداء بالعمل على شركتك الصغيرة من خلال خطط السيرفرات الخاصة لدينا 
          </p>
        </div>

        <div className="tab quote-list-tab">
          {/* Tabs */}
          <ul className="tabs">
            <li className="current" onClick={(e) => openTabSection(e, "tab1")}>
              <span>شهري</span>
            </li>

            <li onClick={(e) => openTabSection(e, "tab2")}>
              <span>٣ شهور</span>
            </li>
          </ul>

          <div className="tab_content">
            <div id="tab1" className="tabs_item">
              <Monthly />
            </div>

            <div id="tab2" className="tabs_item">
              <Yearly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStyleOne;
