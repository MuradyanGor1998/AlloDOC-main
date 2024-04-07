import React from "react";
import { useLanguage } from "../language/language";

import "./footer.css";
//${languages[currentLanguage].mm}
function Footer() {
  const { currentLanguage, languages } = useLanguage();

  const about = {
    email: { img: "img/email.png", text: "allodoc@mail.com" },
    place: {
      img: "img/place.png",
      text: `${languages[currentLanguage].place}`,
    },
    clock: {
      img: "img/clock.png",
      text: `${languages[currentLanguage].clock}`,
    },
    phone: { img: "img/phone.png", text: "8 800 555 35 35" },
  };

  const footerContact = () => {
    const aboutItems = [];
    Object.keys(about).forEach((key, index) => {
      const item = about[key];
      aboutItems.push(
        <li key={index} className="footerLi">
          <figure className="footerFigure">
            <img className="footerUlImg" src={item.img} alt={`About ${key}`} />
            <figcaption className="footerFigcap">{item.text}</figcaption>
          </figure>
        </li>
      );
    });
    return aboutItems;
  };

  //menu
  const menu = {
    use: `${languages[currentLanguage].use}`,
    faq: `${languages[currentLanguage].faq}`,
    forDoctore: `${languages[currentLanguage].forDoctore}`,
    service: `${languages[currentLanguage].service}`,
    contacts: `${languages[currentLanguage].contacts}`,
    use: `${languages[currentLanguage].use}`,
    terms: `${languages[currentLanguage].terms}`,
  };

  const footerMenu = () => {
    const menuItems = [];
    Object.keys(menu).forEach((key, index) => {
      menuItems.push(<li className="menuLi">{menu[key]}</li>);
    });
    return menuItems;
  };
  return (
    <footer className="footer">
      <div className="container">
        <section className="footerSection">
          <article className="footerArticleOne">
            <ul className="footerTitleUl">
              <li>
                <img src="img/logoFoot.png" />
              </li>
              <li>{languages[currentLanguage].footerTitle}</li>
              <li>
                <img src="img/facebook.png" />
                <img src="img/youtube.png" />
                <img src="img/instagram.png" />
              </li>
              <li>
                <img src="img/appStore.png" />
                <img src="img/googlePlay.png" />
              </li>
            </ul>
          </article>
          <article className="footerArticleTwo">
            <ul className="menuUl">{footerMenu()}</ul>
          </article>
          <article className="footerArticleThree">
            <ul className="footerUl">{footerContact()}</ul>
          </article>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
