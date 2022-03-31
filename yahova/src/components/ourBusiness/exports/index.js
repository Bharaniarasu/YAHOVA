import Banner from "../../pictures/exports.jpg";
import ComponentA from "./component-a";
import ComponentB from "./component-b";
import "./index.css";
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
