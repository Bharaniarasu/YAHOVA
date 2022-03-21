import Banner from "./banner";
import "./index.css";
// import { Button, Container, Row, Col } from "bootstrap";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-2 row">
        <div className="col-5 first">
          <img
            className="profile"
            src="https://cquipsplus.ca/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
          />
          <h3>Content-1</h3>
          <p>
            Bootstrap supports the latest, stable releases of all major browsers
            and platforms. Alternative browsers which use the latest version of
            WebKit, Blink, or Gecko, whether directly or via the platform’s web
            view API, are not explicitly supported. However, Bootstrap should
            (in most cases) display and function correctly in these browsers as
            well. More specific support information is provided below.
          </p>
        </div>
        <div className="col-5 second">
          <img
            className="profile"
            src="https://cquipsplus.ca/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
          />

          <h3>Content-2</h3>
          <p>
            These validation warnings don’t matter in practice since the
            non-hacky portion of our CSS does fully validate and the hacky
            portions don’t interfere with the proper functioning of the
            non-hacky portion, hence why we deliberately ignore these particular
            warnings.
          </p>
        </div>
      </div>
      <div className="col-12 alert-primary div-2"></div>
    </div>
  );

  // <h1>Home</h1>;
};
export default Home;
