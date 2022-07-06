import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import OurBusiness from "../pages/dropdown/ourBusiness";
import OurCompany from "../pages/dropdown/ourCompany";
import "./navbar.css";
import NavMenu from "./navMenu";
import Progress from "../scrollBar";
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

  const toggleIcon = () => {
    setIcon(!icon);
  };
  const closeSidebar = () => {
    setIcon(false);
  };

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

  useEffect(() => {
    listenToScrollEvent();
  }, []);
  const listenToScrollEvent = () => {
    window.addEventListener("scroll", () => {
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

        <ul className={icon ? "nav-menu active" : "nav-menu"}>
          <li
            onMouseLeave={unselectCompany}
            className="nav-links"
            onMouseEnter={selectCompany}
            onClick={closeSidebar}
          >
            {" "}
            Our Company {showCompanyDropdown && <OurCompany />}
          </li>

          <li
            onMouseLeave={unselectBusiness}
            className="nav-links"
            onMouseEnter={selectBusiness}
            onClick={closeSidebar}
          >
            Our Business
            {showBusinessDropdown && <OurBusiness />}
          </li>

          <li className="nav-links" onClick={closeSidebar}>
            <Link to="/contact-us" className="nav-links-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
