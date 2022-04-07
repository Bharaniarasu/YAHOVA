import "../index.scss";
import Profile from "../../pictures/profile-man.jpg";
const ComponentC = () => {
  return (
    <>
      <div className="leadership-comp-b">
        <div className="row fullpage">
          <div className=" col-6 fullpage-first">
            <img src={Profile} className="fullpage-first-content" />
          </div>
          <div className=" col-6 fullpage-second">
            <div className="fullpage-second-content">
              <h1>Hi, I'm Alexander</h1>
              <h2>CEO and FOUNDER</h2>
              <br />
              <br />

              <p>
                A Front-End Developer is someone who creates websites and web
                applications. The Front-End Developer creates things that the
                user sees. It is a popular job, and everyone can become a
                Front-End Developer.
              </p>
              <p>
                A Front-End Developer is someone who creates websites and web
                applications. The Front-End Developer creates things that the
                user sees. It is a popular job, and everyone can become a
                Front-End Developer.
              </p>
              <p>
                A Front-End Developer is someone who creates websites and web
                applications. The Front-End Developer creates things that the
                user sees. It is a popular job, and everyone can become a
                Front-End Developer.
              </p>
              <br />
              <br />

              <a className="fullpage-second-content-button">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentC;
