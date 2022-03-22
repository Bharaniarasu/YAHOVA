import Navbar from "./navbar";
import "./navMenu.css";
import { Link } from "react-router-dom";
import Logo from "../pictures/yt-logo.png";
import Head from "../pictures/yt-head.jpg";
import HeadMini from "../pictures/yt-head-mini.jpg";

const NavMenu = () => {
  return (
    <div className="nav-head ">
      <Link to="/" className="nav-head-link ">
        <img className="nav-logo " src={Logo} />
      </Link>
      <div className="nav-head-title">
        {" "}
        <h1>
          YAHOVA <span className="nav-head-traders">TRADERS</span>{" "}
          <span class="nav-head-span">PRIVATE LIMITED</span>
        </h1>
        {/* <img src={Head} className="head" />
        <img src={HeadMini} className="head-mini" />{" "} */}
        <p>
          No.8/466, Gandhi Street , Vijaya Nagaram, Medavakkam, Chennai 600 100
        </p>
      </div>
      {/* <Navbar /> */}
    </div>
  );
};
export default NavMenu;
