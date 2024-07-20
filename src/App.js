import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import "react-circular-progressbar/dist/styles.css";
import Menu from "./Components/Navbar/Menu";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";
import ExperiencePage from "./Pages/ExperiencePage";

function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Navbar show={setActive} />
      {active ? (
        <Menu setActive={setActive} active={active} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} /> */}
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
