import Summary from "../homepage/summary";
import doctor from "../images/doctor2.jpeg";
import styles from "./staff.css";
export default function Staff() {
  return (
    <div className="staff">
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
        Meet the Team
      </h1>
      <Summary
        title="Staff Member"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={doctor}
        id="fullbio"
      />
    </div>
  );
}
