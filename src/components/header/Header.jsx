// header.js
import React, { useCallback, useState } from "react";
import { useLanguage } from "../language/language";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isPassiveWindow, setIsPassiveWindow] = useState(false);

  const clickOn = useCallback(() => {
    setIsPassiveWindow(!isPassiveWindow);
  });
  console.log("r");

  return (
    <header>
      <div className="container">
        <div className="header_box">
          <figure className="figure_logo">
            <Link to="/">
              <img src="img/logo.png" />
            </Link>
          </figure>

          <div className="menu_list">
            <ul className="header_ul">
              <li>
                <Link to="#" className="header_ul_menu_a">
                  {languages[currentLanguage].howToUse}
                </Link>
              </li>
              <li>
                <Link to="#" className="header_ul_menu_a">
                  {languages[currentLanguage].myRecords}
                </Link>
              </li>
              <li>
                <Link to="#" className="header_ul_menu_a">
                  {languages[currentLanguage].makeAppointment}
                </Link>
              </li>
              <li>
                <Link to="#" className="header_ul_menu_a">
                  <img src="img/vector.png" />
                </Link>
              </li>
            </ul>
          </div>

          <ul className="header_doctor_ul" onClick={clickOn}>
            <li className="header_doctor_letter">
              <Link to="#" className="header_doctor_a">
                A
              </Link>
            </li>
            <li className="header_doctor_name">
              <Link to="#" className="header_doctor_a">
                {languages[currentLanguage].doctorName}
              </Link>
            </li>
            <li className="header_doctor_aroow">
              <Link kto="#" className="header_doctor_a">
                &#11167;
              </Link>
            </li>
          </ul>

          <div
            className="profile"
            style={{ display: isPassiveWindow ? "block" : "none" }}
          >
            <ul className="prfile_ul">
              <li className="prfile_li">
                <Link className="prfile_a" to="#">
                  {languages[currentLanguage].profile}
                </Link>
              </li>
              <li className="prfile_li">
                <Link className="prfile_a" to="#">
                  {languages[currentLanguage].topUpBalance}
                </Link>
              </li>
              <li className="prfile_li">
                <Link className="prfile_a" to="#">
                  {languages[currentLanguage].faq}
                </Link>
              </li>
              <li className="prfile_li">
                <Link className="prfile_a" to="#">
                  {languages[currentLanguage].GoOut}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="language">
          <ul className="language_ul">
            <li
              className={
                currentLanguage === "RU" ? "language_li active" : "language_li"
              }
            >
              <Link to="#" className="language_a" onClick={changeLanguage}>
                RU
              </Link>
            </li>
            <li
              className={
                currentLanguage === "EN" ? "language_li active" : "language_li"
              }
            >
              <Link to="#" className="language_a" onClick={changeLanguage}>
                EN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
