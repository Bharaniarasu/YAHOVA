import "./index.css";
import Call from "../pictures/call.jpg";
import { Link } from "react-router-dom";
const Content = () => {
  const Mail = (e) => {
    window.location.href = "mailto:bharaniarasu.t@gmail.com";
    e.preventDefault();
  };
  return (
    <>
      <div className="content">
        <div>
          <img src={Call} className="content-banner" />
        </div>
        <div className="content-banner-text">
          <h1>Get in Touch</h1>
          <p>
            Want to get in touch? we'd love to hear from you.Here's how you can
            teach us...
          </p>
        </div>
        <div className="content-data row">
          <div className="content-data-left col-3">
            <i className="fa fa-phone"></i>
            <h1>Talk to Experts</h1>
            <p>
              Interested in Importing and Exporting? Just pick up the phone to
              chat with a member of our team
            </p>
            <h3>+91 9876543210</h3>
          </div>
          <div className="content-data-right col-3">
            <i className="fa fa-envelope"></i>
            <h1>Contact Customer Support</h1>
            <p>
              Sometimes you need a little help from your friends. Don't worry...
              we're here for you.
            </p>

            <button onClick={Mail}>Contact Support</button>
          </div>
        </div>
        <div className="content-address-bar">
          <div className="mail">
            <h3>CONTACT</h3>
            <p>yahovatraderpvtltd@gmail.com</p>
          </div>
          <div className="address">
            <h3>ADDRESS</h3>
            <p>
              No.8/466,
              <br /> Gandhi Street ,<br /> Vijaya Nagaram,
              <br /> Medavakkam,
              <br /> Chennai 600 100
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
