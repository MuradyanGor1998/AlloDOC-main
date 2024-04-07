// language.js
import React, { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("RU");
  const changeLanguage = () =>
    setCurrentLanguage(currentLanguage === "RU" ? "EN" : "RU");

  const languages = {
    RU: {
      howToUse: "Как пользоваться?",
      myRecords: "Мои записи",
      makeAppointment: "Записаться к врачу",
      doctorName: "Артем Свиридов",
      profile: "Мой профиль",
      topUpBalance: "Пополнить баланс",
      faq: "FAQ",
      GoOut: "Выйти",
      // sectionOne
      titleOne: (
        <h1 className="sectionOneTitle">
          <span className="specialTitle">Онлайн консультации</span> от врачей
          специалистов 24/7
        </h1>
      ),
      sectionOneP: (
        <p className="sectionOneP">
          Проконсультируйтесь <span className="specialWord">сейчас</span> или по{" "}
          <span className="specialWord">предварительной записи</span> со своего
          компьютера или c помощью нашего приложения, доступного в{" "}
          <Link to="#" className="sectionOneApps">
            App Store
          </Link>{" "}
          и{" "}
          <Link to="#" className="sectionOneApps">
            Google Play
          </Link>
        </p>
      ),
      buttonOne: "Записаться",
      buttonTwo: "Как это работает?",

      // footer
      footerTitle: (
        <h4 className="footerTitle">
          <p className="footerTitleS">
            Онлай- консульации специалистов врачей, то что предлагает данный
            сервис.
          </p>
          <p>
            В нашем веб и мобильном приложении вы найдете врачей экспертов,
            которые окажут вам персонализированную помощь онлайн 24/7
          </p>
        </h4>
      ),
      use: "Как пользоваться",
      faq: "FAQ (ответы на вопросы)",
      forDoctore: "Для врачей",
      service: "О сервисе",
      contacts: "Контакты",
      terms: "Пользовательское соглашение",
      place: "г. Москва. ул, Ленина 54, офис 51",
      clock: "Пн-Вс с 09:00 до 18:00",
      // doctor
      doctor: "Врач",
    },
    EN: {
      howToUse: "How to use?",
      myRecords: "My records",
      makeAppointment: "Make an appointment with a doctor",
      doctorName: "Artem Sviridov",
      profile: "My profile",
      topUpBalance: "Top up balance",
      faq: "FAQ",
      GoOut: "Go out",
      // sectionOne
      titleOne: (
        <h1 className="sectionOneTitle">
          <span className="specialTitle">Online consultations</span> from
          specialist doctors 24/7
        </h1>
      ),
      sectionOneP: (
        <p className="sectionOneP">
          Consult <span className="specialWord">now</span> or{" "}
          <span className="specialWord">by appointment</span> from your computer
          or with the help of our application, available in the{" "}
          <Link to="#" className="sectionOneApps">
            App Store
          </Link>{" "}
          and{" "}
          <Link to="#" className="sectionOneApps">
            Google Play
          </Link>
        </p>
      ),
      buttonOne: "Sign up",
      buttonTwo: "How it works?",
      //footer
      footerTitle: (
        <h4 className="footerTitle">
          <p className="footerTitleS">
            Online consultations with specialist doctors, what this service
            offers.
          </p>
          <p>
            In our web and mobile application you will find expert doctors, who
            will provide you with personalized assistance online 24/7
          </p>
        </h4>
      ),
      use: "How to use",
      faq: "FAQ (answers to questions)",
      forDoctore: "For doctors",
      service: "About the service",
      contacts: "Contacts",
      terms: "Terms of use",
      place: "Moscow city. st., Lenina 54, office 51",
      clock: "Mon-Sun from 09:00 to 18:00",
      // doctor
      doctor: "Doctor",
    },
  };

  const doctor = {
    RU: {
      doctor: "Врач",
      consultation: "консультация",
      minutes: "минут",
      entry: "Ближайшая запись",
      education: "Образование",
      specializes: "Специализируется на лечении",
      additionally: "Дополнительно",
    },
    EN: {
      doctor: "Doctor",
      consultation: "consultation",
      minutes: "minutes",
      entry: "Nearest entry",
      education: "Education",
      specializes: "Specializes in treatment",
      additionally: "Additionally",
    },
  };

  const olga = {
    RU: {
      name: "Ольга Никитина",
      prof: "Педиатр, Терапевт",
      staj: "Стаж 15 лет",
    },
    EN: {
      name: "Olga Nikitina",
      prof: "Pediatrician, Therapist",
      staj: "15 years of experience",
    },
  };

  const buttons = {
    RU: {
      planned: "запланировано",
      entry: "Посмотреть запись",
      resolution: "Посмотреть постановление",
    },
    EN: {
      planned: "planned",
      entry: "View entry",
      resolution: "View the resolution",
    },
  };

  return (
    <LanguageContext.Provider
      value={{ languages, doctor, olga, currentLanguage, buttons,changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
