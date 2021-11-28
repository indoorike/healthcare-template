import styles from "./contact.css";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";

export default function Contact() {
  return (
    <div className="contact-page">
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
        Contact
      </h1>
      <div className="contact-container">
        <section className="contact-info">
          <img src={phone} alt="phone" />
          <p>111-111-1111</p>
        </section>
        <section className="contact-info">
          <img
            style={{ width: "100px", height: "100px" }}
            src={email}
            alt="email"
          />
          <p>youremail@gmail.com</p>
        </section>
        <section className="contact-info">
          <img
            style={{ width: "80px", height: "80px", paddingLeft: "8px" }}
            src={address}
            alt="address"
          />
          <p>111 Your Address</p>
        </section>
      </div>
    </div>
  );
}
