import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import OurBusiness from "../dropdown/ourBusiness";
import OurCompany from "../dropdown/ourCompany";
import ContactUs from "../dropdown/contactUs";
import "./navbar.css";
import NavMenu from "./navMenu";
import Logo from "../pictures/logo.jpeg";
import Footer from "../footer";
import Progress from "../scrollEffect";
// const { Header, Content, Footer } = Layout;
const Navbar = (props) => {
  const [icon, setIcon] = useState(false);
  const [showCompanyDropdown, setCompanyDropdown] = useState(false);
  const [showBusinessDropdown, setBusinessDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const [scrollAnime, setScrollAnime] = useState(0);
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
  // const selectContact = () => {
  //   setContactDropdown(true);
  // };
  // const unselectContact = () => {
  //   setContactDropdown(false);
  // };

  const toggleIcon = () => {
    setIcon(!icon);
  };
  const closeSidebar = () => {
    setIcon(false);
  };

  // const { children } = props;
  // console.log("---   " + children + "-- " + props);
  // console.log(children);

  const navbar = document.querySelector(".navbars");

  window.onscroll = () => {
    setScrolled(!scrolled);
    if (window.scrollY > 10) {
      navbar.classList.add("nav-active");
      setScrolled(true);
    } else {
      navbar.classList.remove("nav-active");
      setScrolled(false);
    }
  };

  // show navbar on scroll up//
  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    prevScrollPos > currentScrollPos
      ? (navbar.style.top = "0")
      : (navbar.style.top = "-100px");
    prevScrollPos = currentScrollPos;
  });
  // console.log(window.innerHeight);
  // const navbar = document.querySelector(".navbars");

  useEffect(() => {
    listenToScrollEvent();
  }, []);
  const listenToScrollEvent = () => {
    window.addEventListener("scroll", () => {
      // calculateScrollDistance();

      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };
  const calculateScrollDistance = () => {
    const scrolTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.floor((scrolTop / totalDocScrollLength) * 100);
    setScrollAnime(scrollPosition);

    console.log(getDocHeight);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.body.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  };

  return (
    <>
      <Progress scroll={scrollAnime} />
      <nav className="navbars">
        <NavMenu />

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
            className="nav-links"
            onMouseEnter={selectCompany}
            onClick={closeSidebar}
          >
            {" "}
            Our Company{" "}
            {/* <i
              className={
                showCompanyDropdown
                  ? "fa fa-angle-down right-arrow"
                  : "fa fa-angle-right right-arrow"
              }
            ></i> */}
            {showCompanyDropdown && <OurCompany />}
            {/* <OurCompany />{" "} */}
          </li>

          <li
            onMouseLeave={unselectBusiness}
            className="nav-links"
            onMouseEnter={selectBusiness}
            onClick={closeSidebar}
          >
            Our Business
            {showBusinessDropdown && <OurBusiness />}
            {/* <OurBusiness /> */}
          </li>

          <li
            // onMouseLeave={unselectContact}
            className="nav-links"
            // onMouseEnter={selectContact}
            onClick={closeSidebar}
          >
            <Link to="/contact-us" className="nav-links-link">
              Contact Us
            </Link>
            {/* {showContactDropdown && <ContactUs />} */}
            {/* <ContactUs /> */}
          </li>
        </ul>

        {/* <Content>{Children}</Content> */}
      </nav>
      {/* <div className="i">{children}</div> */}

      {/* <Footer /> */}
    </>
  );
};
export default Navbar;
