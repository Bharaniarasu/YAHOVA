import Navbar from "./navbar";
import "./navMenu.css";
import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <div className="nav-head">
      <Link to="/" className="nav-head-link">
        {" "}
        <h1>
          YAHOVA <span className="nav-head-traders">TRADERS</span>{" "}
          <span class="nav-head-span">PRIVATE LIMITED</span>
        </h1>
      </Link>{" "}
      <p>No.123, xxx , yyy, zzz- 000 000</p>
      {/* <Navbar /> */}
    </div>
  );
};
export default NavMenu;
