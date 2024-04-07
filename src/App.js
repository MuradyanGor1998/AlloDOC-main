// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/language/language.js";

import "./App.css";
import ScreenOne from "./screen/screenOne/ScreenOne";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Doctor from "./components/doctor/Doctor.js";
import Body from "./body.jsx";

function App() {
  return (
    <React.StrictMode>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ScreenOne />} />
          <Route path="/doctor/:id" element={<Doctor />} />
        </Routes>
        <Body />
        <Footer />
      </LanguageProvider>
    </React.StrictMode>
  );
}

export default App;
