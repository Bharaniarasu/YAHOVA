import "./ourCompany.css";

import { Link } from "react-router-dom";
const OurCompany = () => {
  return (
    <ul className="dropdown-company">
      <li>
        <Link to="/our-company/about-us" className="dropdown-company-link">
          About Us
        </Link>
      </li>{" "}
      <li>
        {" "}
        <Link to="/our-company/leadership" className="dropdown-company-link">
          Leadership{" "}
        </Link>
      </li>
      <li>
        {" "}
        <Link
          to="/our-company/company-profile"
          className="dropdown-company-link"
        >
          Company Profile{" "}
        </Link>
      </li>
    </ul>
  );
};
export default OurCompany;
