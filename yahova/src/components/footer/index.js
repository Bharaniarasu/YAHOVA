import "./index.css";
import Logo from "../pictures/yt-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row footer-content">
        <div className="col-4 offset-1 footer-logo">
          <img src={Logo} />
          {/* <i className="fa fa-envelope"></i> */}
        </div>
        <div className="col-2 offset-1 footer-our-company">
          <ul>
            {/* <span className="our-company-header">Our Company</span> */}
            <li>Our Company</li>
            <li>
              <Link to="our-company/about-us" className="our-company-links">
                About Us<i className="fa fa-angle-right right-arrow"></i>
              </Link>
            </li>
            <li>
              <Link to="our-company/leadership" className="our-company-links">
                LeaderShip<i className="fa fa-angle-right right-arrow"></i>
              </Link>
            </li>
            <li>
              <Link
                to="our-company/company-profile"
                className="our-company-links"
              >
                Company Profile<i className="fa fa-angle-right right-arrow"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-2 footer-our-business">
          <ul>
            {/* <span className="our-business-header">Our Business</span> */}
            <li>Our Business</li>
            <li>
              <Link to="/our-business/fishing" className="our-business-links">
                Fishing<i className="fa fa-angle-right right-arrow"></i>
              </Link>
            </li>
            <li>
              <Link to="/our-business/exports" className="our-business-links">
                Exports<i className="fa fa-angle-right right-arrow"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/our-business/super-market"
                className="our-business-links"
              >
                SuperMarket<i className="fa fa-angle-right right-arrow"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-2 footer-contact-us">
          <Link to="/contact-us" className="contact-us-links">
            Contact Us<i className="fa fa-angle-right right-arrow"></i>
          </Link>
        </div>
      </div>
      <div className="footer-copyright">123</div>

      {/* <hr /> */}
    </div>
  );
};
export default Footer;
