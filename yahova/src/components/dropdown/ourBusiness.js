import "./ourBusiness.css";
import { Link } from "react-router-dom";
const OurBusiness = () => {
  return (
    <ul className="dropdown-business">
      <li>
        <Link to="/our-business/fishing" className="dropdown-business-link">
          Fishing
        </Link>
      </li>{" "}
      <li>
        <Link to="/our-business/exports" className="dropdown-business-link">
          Exports
        </Link>
      </li>
      <li>
        {" "}
        <Link
          to="/our-business/super-market"
          className="dropdown-business-link"
        >
          Super Market
        </Link>
      </li>
    </ul>
  );
};
export default OurBusiness;
