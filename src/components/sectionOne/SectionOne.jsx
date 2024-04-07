import { Link } from 'react-router-dom';
import { useLanguage } from "../language/language";


import "./sectionOne.css";

function SectionOne() {
  const { currentLanguage, languages } = useLanguage();

  return (
    <section className="sectionOne">
      <div className="container">
        <div className="sectionOneBox">
                  <div className="sectionOneLeft">
          <h1 className="sectionOneTitle">{languages[currentLanguage].titleOne}</h1>
          <p className="sectionOneP">{languages[currentLanguage].sectionOneP}</p>
          <form>
            <button className="sectionOneButton" Button><Link to={'#'} className="sectionOneButtonLink">{languages[currentLanguage].buttonOne}</Link></button>
            <button className="sectionOneButton"><Link to={'#'} className="sectionOneButtonLink">{languages[currentLanguage].buttonTwo}</Link></button>

          </form>
        </div>
        <div className="sectionOneRigth">
          <div className="bgImg"></div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
