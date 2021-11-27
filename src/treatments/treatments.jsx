import styles from "./treatments.css";
import Summary from "../homepage/summary";
export default function Treatments() {
  return (
    <div className="treatments">
      <h1 className="treatments-title">Treatments</h1>
      <Summary
        title="General Chiropractic"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="general-chiropractic"
      />

      <Summary
        title="Backpain Chiropractic"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="backpain-chiropractic"
      />

      <Summary
        title="Neckpain Chiropractic"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        id="neckpain-chirpractic"
      />
    </div>
  );
}
