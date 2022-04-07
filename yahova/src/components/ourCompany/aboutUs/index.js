import Banner from "../../pictures/ship-export.jpg";
import "./index.css";
import "../index.scss";

import ComponentA from "./component-a";
const AboutUs = () => {
  return (
    <>
      <div className="about">
        <img src={Banner} className="about-banner" />
        <ComponentA />
      </div>
    </>
  );
};
export default AboutUs;
