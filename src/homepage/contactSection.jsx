export default function ContactForm() {
  return (
    <section>
      <form className="contact-form">
        <label for="fname">First Name</label>
        <input type="text" className="contact-input" id="fname" />

        <label for="lname">Last Name</label>
        <input type="text" className="contact-input" id="lname" />

        <label for="email">Email</label>
        <input type="text" className="contact-input" id="email" />

        <label for="phone">Phone Number</label>
        <input type="text" className="contact-input" id="phone" />

        <button>Submit</button>
      </form>
    </section>
  );
}
