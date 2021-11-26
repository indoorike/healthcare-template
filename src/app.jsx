import Header from "./header/header";
import Home from "./homepage/home";
import Footer from "./footer/footer";
import { useState } from "react";

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
      <Home />
      <Footer />
    </>
  );
}
