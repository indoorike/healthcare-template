import logo from "../images/chiropractic.png";
import burger from "../images/burger.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./header.css";
export default function Header({ showMenu, changeMenu }) {
  useEffect(() => {
    console.log("added");
    document.querySelectorAll(".menu-link").forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".burger").click();
      });
    });
  }, []);

  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="chiropractic logo" />
        </Link>
        <p>
          Your Business
          <br />{" "}
          <span
            style={{
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            111-111-1111
          </span>
        </p>
      </div>

      <div className="menu-container">
        <input
          onClick={changeMenu}
          className="burger"
          type="image"
          src={burger}
        />
        <ul className={showMenu}>
          <Link className="menu-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="menu-link" to="/treatments">
            <li>Treatments</li>
          </Link>
          <Link className="menu-link" to="/aboutus">
            <li>About Us</li>
          </Link>
          <Link className="menu-link" to="/staff">
            <li>Meet the Staff</li>
          </Link>
          <Link className="menu-link" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
