import Banner from "../../../pictures/export-banner.jpg";
import ComponentA from "./component-a";
import ComponentB from "./component-b";
import "./index.scss";
const Exports = () => {
  return (
    <>
      <div className="exports">
        <img src={Banner} alt="" className="exports-banner" />
        <ComponentA />
        <ComponentB />
      </div>
    </>
  );
};
export default Exports;
