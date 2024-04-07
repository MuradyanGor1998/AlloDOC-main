// Doctor.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../language/language";
import descriptions from "./aboutDoc";
import "./aboutDoc";

import "./doctor.css";
import "./doctor2.css";
function Doctor() {
  const { id } = useParams();
  const { currentLanguage, doctor } = useLanguage();

  return (
    <>
      <section className="section2_1">
        <div className="container">
          <div className="section2_1_box">
            <figure className="section2_1_figure">
              <img src={`${descriptions[id].img}`} />
              <figcaption className="section2_1_figcaption">
                <h3 className="section2_1_figName">{descriptions[id].name} </h3>
                <p className="section2_1_figp1">
                  {descriptions[id].profession}
                </p>
                <p className="section2_1_figp2">
                  {descriptions[id].experience}
                </p>
              </figcaption>
            </figure>
            <article className="section2_1_price">
              <p className="section2_1_price_p1">
                {descriptions[id].consultation} /{" "}
                {doctor[currentLanguage].consultation}
              </p>
              <p className="section2_1_price_p2">
                30 {doctor[currentLanguage].minutes}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section2_2">
        <div className="container">
          {/* astart bout one */}
          <figure className="section2_2_figure">
            <div className="section2_2_div">
              <img src="/img/cal.png" />
              <h2> {doctor[currentLanguage].entry}</h2>
            </div>
            <figcaption>
              <ul className="section2_2_ul">
                <li>Вторник 03 Марта</li>
              </ul>
            </figcaption>
          </figure>
          {/* astart bout two */}
          <figure className="section2_2_figure">
            <div className="section2_2_div">
              <img src="/img/prof.png" />
              <h2>{doctor[currentLanguage].education}</h2>
            </div>
            <figcaption>
              <ul className="section2_2_ul">
                <li>1992 - Российский Государственный Университет</li>
                <li>1994 - Ординатура по специальности «Педиатрия»</li>
              </ul>
            </figcaption>
          </figure>
          {/* astart bout three */}
          <figure className="section2_2_figure">
            <div className="section2_2_div">
              <img src="/img/add.png" />
              <h2>{doctor[currentLanguage].specializes}</h2>
            </div>
            <figcaption>
              <ul className="section2_2_ul">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </li>
              </ul>
            </figcaption>
          </figure>
          {/* astart bout four */}
          <figure className="section2_2_figure">
            <div className="section2_2_div">
              <img src="/img/info.png" />
              <h2>{doctor[currentLanguage].additionally}</h2>
            </div>
            <figcaption>
              <ul className="section2_2_ul">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </li>
              </ul>
            </figcaption>
          </figure>
          {/* end */}
        </div>
      </section>
    </>
  );
}

export default Doctor;
