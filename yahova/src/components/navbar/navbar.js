import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import OurBusiness from "../dropdown/ourBusiness";
import OurCompany from "../dropdown/ourCompany";
import ContactUs from "../dropdown/contactUs";
import "./navbar.css";
import NavMenu from "./navMenu";
// const { Header, Content, Footer } = Layout;
const Navbar = (props) => {
  const [icon, setIcon] = useState(false);
  const [showCompanyDropdown, setCompanyDropdown] = useState(false);
  const [showBusinessDropdown, setBusinessDropdown] = useState(false);
  const [showContactDropdown, setContactDropdown] = useState(false);

  const selectCompany = () => {
    setCompanyDropdown(true);
  };
  const unselectCompany = () => {
    setCompanyDropdown(false);
  };
  const selectBusiness = () => {
    setBusinessDropdown(true);
  };
  const unselectBusiness = () => {
    setBusinessDropdown(false);
  };
  const selectContact = () => {
    setContactDropdown(true);
  };
  const unselectContact = () => {
    setContactDropdown(false);
  };

  const toggleIcon = () => {
    setIcon(!icon);
  };
  const closeSidebar = () => {
    setIcon(false);
  };

  const { children } = props;
  // console.log("---   " + children + "-- " + props);
  console.log(children);
  return (
    <>
      <nav className="navbar">
        <NavMenu />

        {/* <div className="nav-menu">
        <h1>YAHOVA TRADERS PRIVATE LIMITED</h1>{" "}
        <p>No.123, xxx , yyy, zzz- 000 000</p>
      </div> */}
        <div onClick={toggleIcon} className="nav-icon">
          {icon ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>
        {/* <NavMenu /> */}

        <ul className={icon ? "nav-menu active" : "nav-menu"}>
          <li
            onMouseLeave={unselectCompany}
            className="nav-link"
            onMouseEnter={selectCompany}
            onClick={closeSidebar}
          >
            {" "}
            Our Company
            {showCompanyDropdown && <OurCompany />}
            {/* <OurCompany />{" "} */}
          </li>

          <li
            onMouseLeave={unselectBusiness}
            className="nav-link"
            onMouseEnter={selectBusiness}
            onClick={closeSidebar}
          >
            Our Business
            {showBusinessDropdown && <OurBusiness />}
            {/* <OurBusiness /> */}
          </li>

          <li
            onMouseLeave={unselectContact}
            className="nav-link"
            onMouseEnter={selectContact}
            onClick={closeSidebar}
          >
            <Link to="/contact-us" className="nav-link">
              Contact Us
            </Link>
            {/* {showContactDropdown && <ContactUs />} */}
            {/* <ContactUs /> */}
          </li>
        </ul>

        {/* <Content>{Children}</Content> */}
      </nav>
      <div>{children}</div>
    </>
  );
};
export default Navbar;
