import Banner from "../../pictures/exports.jpg";
import ComponentA from "./component-a";
import ComponentB from "./component-c";
import "./index.scss";
const Exports = () => {
  return (
    <>
      <div className="exports">
        <img src={Banner} className="exports-banner" />
        <ComponentA />
        <ComponentB />
      </div>
    </>
  );
};
export default Exports;
