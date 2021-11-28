export default function ContactForm() {
  return (
    <section>
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
