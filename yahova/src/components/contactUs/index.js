import { Link } from "react-router-dom";
import Banner from "../pictures/contact-1.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* <h1 class="bi bi-envelope"></h1> */}
      <div className="row contact-links">
        <div className=" offset-3 col-2 contact-logo">
          {" "}
          <Link to="/contact-us/phone">
            <button>
              {" "}
              <i class="fa fa-phone"></i>
            </button>
          </Link>
        </div>
        <div className="col-2 contact-logo">
          {" "}
          <Link to="/contact-us/envelope">
            <button>
              <i class="fa fa-envelope"></i>
            </button>
          </Link>
        </div>
        <div className="col-2 contact-logo">
          {" "}
          <Link to="/contact-us/at">
            <button>
              {" "}
              <i class="fa fa-at"></i>
            </button>
          </Link>
        </div>
      </div>
      <img src={Banner} className="contact-banner" />
    </div>
  );
  // <h1> ContactUs</h1>;
};
export default ContactUs;
