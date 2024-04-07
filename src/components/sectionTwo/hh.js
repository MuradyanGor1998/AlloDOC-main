import React, { useCallback } from "react";
import { useLanguage } from "../language/language";

function SectionTwoArticle({ doctorData }) {
  const { currentLanguage, buttons } = useLanguage();

  const renderItems = useCallback(() => {
    const images = ["/img/calendar.png", "/img/group.png", "/img/group1.png"];
    const dates = ["03 Марта 2021", "16:00", "Видео связь"];

    return images.map((image, index) => (
      <figure key={index} className="sectionTwoFigrue">
        <img src={image} alt={`Image ${index}`} />
        <figcaption className="sectionTwoFigcaption">{dates[index]}</figcaption>
      </figure>
    ));
  }, []);
  
  return (
    <article className="sectionTwoArticle">
      <div className="sectionTwoArticleTop">
        <div className="sectionTwoArticleTopLeft">{renderItems()} </div>

        <div className="sectionTwoArticleTopRight">
          <button className="sectionTwoArticleButton">
            {buttons[currentLanguage].planned}
          </button>
        </div>
      </div>
      <div className="sectionTwoArticleCenter">
        <div className="sectionTwoArticleCenterRiht">
          <figure className="sectionTwoArticleCenterRihtFig">
            <img src={doctorData.img} alt={doctorData.name} />
            <figcaption className="sectionTwoArticleCenterRihtFigcaption">
              <p>{doctorData.name}</p>
              <p>{doctorData.prof}</p>
              <p>{doctorData.staj}</p>
            </figcaption>
          </figure>
        </div>
        <div className="sectionTwoArticleCenterLeft">
          <button className="sectionTwoArticleCenterLeftButtonOne">
            {buttons[currentLanguage].entry}
          </button>
          <br />
          <button className="sectionTwoArticleCenterLeftButtonTwo">
            {doctorData.link}
          </button>
        </div>
      </div>
    </article>
  );
}

export default SectionTwoArticle;
//<Link to={`/doctor/1`} className="link">{languages[currentLanguage].doctor} 1{id}</Link>
//<Link to={`/doctor/2`} className="link">{languages[currentLanguage].doctor} 2{id}</Link>
//<Link to={`/doctor/3`} className="link">{languages[currentLanguage].doctor} 3{id}</Link>
