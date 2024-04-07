import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../language/language";

import "./sectionTwo.css";
import SectionTwoArticle from "./doctors";

function SectionTwo() {
  const { id } = useParams;
  const { currentLanguage, languages } = useLanguage();

  return (
    <section className="sectionTwo">
      <div className="container">
        <div className="sectionTwoBox">
          <SectionTwoArticle />

        </div>
      </div>
    </section>
  );
}

export default SectionTwo;

//<Link to={`/doctor/1`} className="link"><h2 className="sectionTwoDoc">{languages[currentLanguage].doctor} 1{id}</h2></Link>
//<Link to={`/doctor/2`} className="link"><h2 className="sectionTwoDoc">{languages[currentLanguage].doctor} 2{id}</h2></Link>
//<Link to={`/doctor/3`} className="link"><h2 className="sectionTwoDoc">{languages[currentLanguage].doctor} 3{id}</h2></Link>
