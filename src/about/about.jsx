import { Link } from "react-router-dom";
import styles from "./about.css";
export default function AboutUs() {
  return (
    <div className="about-us">
      <h1
        style={{
          borderBottom: "2px solid rgb(174, 220, 247)",
          textAlign: "center",
          padding: "10px",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          fontSize: "2.5rem",
        }}
      >
        Who We Are
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          paddingTop: "1rem",
          width: "90%",
          margin: "auto",
          marginBottom: "2rem",
          lineHeight: "1.5",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link to="/staff">
        <button>Meet the Staff</button>
      </Link>
    </div>
  );
}
