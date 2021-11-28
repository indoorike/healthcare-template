import Summary from "../homepage/summary";
import chiropractic from "../images/chiropractic-2.png";
export default function Treatments() {
  return (
    <div className="treatments">
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
        Treatments
      </h1>
      <Summary
        title="General Chiropractic"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="general-chiropractic"
        image={chiropractic}
      />

      <Summary
        title="Backpain"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="backpain-chiropractic"
        image={chiropractic}
      />

      <Summary
        title="Neckpain"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="neckpain-chirpractic"
        image={chiropractic}
      />

      <Summary
        title="Personal Injury"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="personal-injury"
        image={chiropractic}
      />

      <Summary
        title="Sports Injury"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="sports-injury"
        image={chiropractic}
      />
    </div>
  );
}
