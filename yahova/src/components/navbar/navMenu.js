import "./navMenu.css";
import { Link } from "react-router-dom";
import Logo from "../pictures/yt-logo.png";

const NavMenu = () => {
  return (
    <div className="nav-head ">
      <Link to="/" className="nav-head-link ">
        <img className="nav-logo " alt="" src={Logo} />
      </Link>
      <div className="nav-head-title">
        {" "}
        <h1>
          {" "}
          YAHOVA <span className="nav-head-traders">TRADERS</span>{" "}
          <span class="nav-head-span">PRIVATE LIMITED</span>
        </h1>
        {/* <p>
          No.8/466, Gandhi Street , Vijaya Nagaram, Medavakkam, Chennai 600 100
        </p> */}
      </div>
    </div>
  );
};
export default NavMenu;
