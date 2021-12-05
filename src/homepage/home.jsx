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
    }, 1000);

    return () => {
      clearInterval(setInt);
    };
  });
  return (
    <div className="home-wrapper">
      <Introduction />
      <Summaries />

      <StaffSection arrow={arrow ? "arrow" : "arrow move"} />
      <ContactForm />
    </div>
  );
}
