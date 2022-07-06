import "./index.scss";
import Call from "../../pictures/call.jpg";
import { useState } from "react";
const ContactUsData = () => {
  const Mail = (e) => {
    window.location.href = "mailto:bharaniarasu.t@gmail.com";
    e.preventDefault();
  };

  const [leftBar, setLeftBar] = useState(false);
  const [middleBar, setMiddleBar] = useState(false);
  const [rightBar, setRightBar] = useState(false);

  const handleLeftBar = () => {
    setLeftBar(!leftBar);
  };
  const handleMiddleBar = () => {
    setMiddleBar(!middleBar);
  };
  const handleRightBar = () => {
    setRightBar(!rightBar);
  };
  return (
    <>
      <div className="content">
        <div>
          <img src={Call} alt="" className="content-banner" />
        </div>
        <div
          className="content-banner-text"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>Get in Touch</h1>
          <p>
            Want to get in touch? we'd love to hear from you.Here's how you can
            teach us...
          </p>
        </div>
        <div className="hidden-data row">
          <div
            className={
              leftBar
                ? "hidden-data-left-active hidden-data-left col-3"
                : "hidden-data-left hidden-data-left col-3"
            }
            onMouseLeave={handleLeftBar}
          >
            <i className="fa fa-phone"></i>
            <h2>Talk to Experts</h2>
            <p>
              Interested in Importing and Exporting? Just pick up the phone to
              chat with a member of our team
            </p>
            <h4>+91 9876543210</h4>
          </div>
          <div
            className={
              middleBar
                ? "hidden-data-middle-active hidden-data-middle col-3"
                : "hidden-data-middle hidden-data-middle col-3"
            }
            onMouseLeave={handleMiddleBar}
          >
            <i className="fa fa-home"></i>
            <h2>Reach Us</h2>
            <h4>ADDRESS</h4>
            <p>
              No.8/466,
              <br /> Gandhi Street ,<br /> Vijaya Nagaram,
              <br /> Medavakkam,
              <br /> Chennai 600 100
            </p>
          </div>
          <div
            className={
              rightBar
                ? "hidden-data-right-active hidden-data-right col-3"
                : "hidden-data-right hidden-data-right col-3"
            }
            onMouseLeave={handleRightBar}
          >
            <i className="fa fa-envelope"></i>
            <h2>Contact Customer Support</h2>
            <p>
              Sometimes you need a little help from your friends. Don't worry...
              we're here for you.
            </p>

            <a onClick={Mail} className="button">
              Contact
            </a>
          </div>
        </div>

        <div className="content-data row">
          <div
            onMouseEnter={handleLeftBar}
            className="
                content-data-left col-3"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <i className="fa fa-phone"></i>
          </div>
          <div
            className="content-data-middle col-3"
            onMouseEnter={handleMiddleBar}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <i className="fa fa-home"></i>
          </div>
          <div
            className="content-data-right col-3"
            onMouseEnter={handleRightBar}
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <i className="fa fa-envelope"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUsData;
