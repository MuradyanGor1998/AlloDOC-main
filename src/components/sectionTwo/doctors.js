import React from "react";
import SectionTwoArticle from "./hh";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../language/language"; 

function ParentComponent() {
  const { currentLanguage, olga ,buttons} = useLanguage();

  const { id } = useParams;

  const doctorsData = {
    doc1: {
      img: "img/docImg.png",
      name: `${olga[currentLanguage].name}`,
      prof: `${olga[currentLanguage].prof}`,
      staj: `${olga[currentLanguage].staj}`,
      link: (
        <Link to={`/doctor/1`} className="link">
          {buttons[currentLanguage].resolution} {id}
        </Link>
      ),
    },
    doc2: {
      img: "img/doc2.jpg",
      name: `${olga[currentLanguage].name}`,
      prof: `${olga[currentLanguage].prof}`,
      staj: `${olga[currentLanguage].staj}`,
      link: (
        <Link to={`/doctor/2`} className="link">
          {buttons[currentLanguage].resolution} {id}
        </Link>
      ),
    },
    doc3: {
      img: "img/doc3.jpg",
      name: `${olga[currentLanguage].name}`,
      prof: `${olga[currentLanguage].prof}`,
      staj: `${olga[currentLanguage].staj}`,
      link: (
        <Link to={`/doctor/3`} className="link">
          {buttons[currentLanguage].resolution} {id}
        </Link>
      ),
    },
  };

  return (
    <div>
      <SectionTwoArticle doctorData={doctorsData.doc1} />
      <SectionTwoArticle doctorData={doctorsData.doc2} />
      <SectionTwoArticle doctorData={doctorsData.doc3} />
    </div>
  );
}

export default ParentComponent;
