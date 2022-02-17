import Treatments from "./treatments/treatments.jsx";
import Staff from "./staff/staff.jsx";
import AboutUs from "./about/about.jsx";
import Contact from "./contact/contact.jsx";
import Header from "./header/header";
import Home from "./homepage/home";
import Footer from "./footer/footer";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import scroll from "./images/scrolltotop.png";
import { throttle } from "underscore";
import _, { map } from "underscore";
export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", _.throttle(handleScroll, 2000));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    setTimeout(() => {
      setPageScroll(window.scrollY);
    }, 0);
  }

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  function changeMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Header
        changeMenu={changeMenu}
        showMenu={showMenu ? "menu show" : "menu"}
      />
      <input
        type="image"
        src={scroll}
        className={
          pageScroll > 0 ? "scroll-to-top scrollShow" : "scroll-to-top"
        }
        onClick={scrollToTop}
      />
      <main>
        <Routes>
          <Route path="/healthcare-template" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
