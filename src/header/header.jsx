import logo from "../images/chiropractic.png";
import burger from "../images/burger.png";
import { Link } from "react-router-dom";
import styles from "./header.css";
export default function Header({ showMenu, changeMenu }) {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="chiropractic logo" />
        </Link>
        <p>
          Your Logo
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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/treatments">
            <li>Treatments</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/staff">
            <li>Meet the Staff</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
