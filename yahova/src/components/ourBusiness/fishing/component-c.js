import "./index.scss";
import Fish from "../../pictures/fish-logo.png";
const ComponentC = () => {
  return (
    <>
      <div className="fishing-component-c">
        <div className="row content">
          <div className="col-4 content-1">
            <img src={Fish} alt="fishing" />
          </div>
          <div className="col-8 content-2">
            <h2>Fish Hatcheries</h2>
            <br />
            <br />
            <p>
              Ullamco enim do pariatur in. Ad dolor aute deserunt esse aute. Non
              sit ullamco eu ullamco irure labore dolor. Velit duis aliquip ea
              magna fugiat minim anim non mollit. Culpa aute dolor elit labore
              reprehenderit magna.
            </p>
            <br />
            <p>
              Ullamco enim do pariatur in. Ad dolor aute deserunt esse aute. Non
              sit ullamco eu ullamco irure labore dolor. Velit duis aliquip ea
              magna fugiat minim anim non mollit. Culpa aute dolor elit labore
              reprehenderit magna.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentC;
