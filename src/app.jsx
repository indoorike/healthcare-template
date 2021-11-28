import Treatments from "./treatments/treatments.jsx";
import Staff from "./staff/staff.jsx";
import AboutUs from "./about/about.jsx";
import Header from "./header/header";
import Home from "./homepage/home";
import Footer from "./footer/footer";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  function changeMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Header
        changeMenu={changeMenu}
        showMenu={showMenu ? "menu show" : "menu"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}
