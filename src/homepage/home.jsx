import Fade from "react-reveal/Fade";
import styles from "./home.css";
import family from "../images/family.png";
import medic from "../images/medic.png";
import doctor2 from "../images/doctor2.jpeg";
import clock from "../images/clock.png";
import Summary from "./summary";
export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="intro-wrapper">
        <div className="introduction-text">
          <h1>We've Got Your Back.</h1>
          <div className="buttons">
            <button id="our-treatments">What We Treat</button>
            <button id="contact-us">Contact Us</button>
          </div>
        </div>
      </section>
      <section className="mission-statement">
        <h2
          style={{
            marginTop: "1.5rem",
            fontSize: "2.5rem",
            textAlign: "center",
            backgroundColor: "rgb(92, 190, 247)",
          }}
        >
          Our Mission is to provide...
        </h2>
      </section>
      <section className="summaries" style={{ width: "95%", margin: "auto" }}>
        <Fade bottom>
          <Summary
            image={family}
            title="Family-First Business"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Fade>
        <Fade bottom>
          <Summary
            image={medic}
            title="Specialized Care"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Fade>
        <Fade bottom>
          <Summary
            id="clock"
            image={clock}
            title="Around The Clock Service"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Fade>
      </section>
      <Fade bottom>
        <section className="home-staff">
          <div className="doctor-bio">
            <div className="doctor-body-image">
              <img src={doctor2} alt="doctor" />
            </div>
            <div className="doctor-description">
              <h1>Meet Your Doctor</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore...
                <button id="full-bio">Full Bio</button>
                <button id="meet-our-staff">Meet Our Staff</button>
              </p>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
