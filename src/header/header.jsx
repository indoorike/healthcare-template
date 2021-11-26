import logo from "../images/chiropractic.png";
import burger from "../images/burger.png";
import styles from "./header.css";
export default function Header({ showMenu, changeMenu }) {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="chiropractic logo" />
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
          <li>Home</li>
          <li>Treatments</li>
          <li>Meet the Staff</li>
        </ul>
      </div>
    </header>
  );
}
