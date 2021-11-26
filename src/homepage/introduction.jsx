export default function Introduction() {
  return (
    <>
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
            borderTop: "2px solid rgb(108, 197, 248)",
            borderBottom: "2px solid rgb(108, 197, 248)",
            padding: "1rem 0rem",
          }}
        >
          Our Mission is to provide...
        </h2>
      </section>
    </>
  );
}
