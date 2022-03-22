import "./ourBusiness.css";
import { Link } from "react-router-dom";
const OurBusiness = () => {
  return (
    <ul className="dropdown-business">
      <li>
        <Link to="/our-business/fishing" className="dropdown-business-link">
          Fishing <i className="fa fa-angle-right right-arrow"></i>
        </Link>
      </li>{" "}
      <li>
        <Link to="/our-business/exports" className="dropdown-business-link">
          Exports<i className="fa fa-angle-right right-arrow"></i>
        </Link>
      </li>
      <li>
        {" "}
        <Link
          to="/our-business/super-market"
          className="dropdown-business-link"
        >
          Super Market<i className="fa fa-angle-right right-arrow"></i>
        </Link>
      </li>
    </ul>
  );
};
export default OurBusiness;
