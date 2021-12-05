export default function ContactForm() {
  return (
    <section className="contact-section">
      <h1
        style={{
          textAlign: "center",
          marginTop: "2.5rem",
          fontSize: "2.5rem",
          borderTop: "2px solid rgb(174, 220, 247)",
          borderBottom: "2px solid rgb(174, 220, 247)",
          padding: "20px 0px",
        }}
      >
        Send Us A Message
      </h1>
      <form className="contact-form">
        <label htmlFor="fname">First Name</label>
        <input type="text" className="contact-input" id="fname" />

        <label htmlFor="lname">Last Name</label>
        <input type="text" className="contact-input" id="lname" />

        <label htmlFor="email">Email</label>
        <input type="text" className="contact-input" id="email" />

        <label htmlFor="phone">Phone Number</label>
        <input type="text" className="contact-input" id="phone" />

        <button>Submit</button>
      </form>
    </section>
  );
}
