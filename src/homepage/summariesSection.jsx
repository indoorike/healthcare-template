import Fade from "react-reveal/Fade";
import family from "../images/family.png";
import medic from "../images/medic.png";
import clock from "../images/clock.png";
import Summary from "./summary";
export default function Summaries() {
  return (
    <section className="summaries" style={{ width: "95%", margin: "auto" }}>
      <Fade bottom>
        <Summary
          image={family}
          title="Family-First Business"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{
            borderBottom: "3px solid rgb(92, 190, 247)",
            paddingBottom: "15px",
          }}
        />
      </Fade>
      <Fade bottom>
        <Summary
          image={medic}
          title="Specialized Care"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{
            borderBottom: "3px solid rgb(92, 190, 247)",
            paddingBottom: "15px",
          }}
        />
      </Fade>
      <Fade bottom>
        <Summary
          id="clock"
          image={clock}
          title="Around The Clock Service"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{
            borderBottom: "3px solid rgb(92, 190, 247)",
            paddingBottom: "15px",
          }}
        />
      </Fade>
    </section>
  );
}
