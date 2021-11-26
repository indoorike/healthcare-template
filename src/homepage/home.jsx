import styles from "./home.css";
import Introduction from "./introduction";
import Summaries from "./summariesSection";
import StaffSection from "./staffSection";
import ContactForm from "./contactSection";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    const setInt = setInterval(() => {
      setArrow(!arrow);
    }, 2000);

    return () => {
      clearInterval(setInt);
    };
  });
  return (
    <div className="home-wrapper">
      <Introduction />
      <Summaries />
      <StaffSection arrow={arrow ? "arrow" : "arrow move"} />
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
      <ContactForm />
    </div>
  );
}
