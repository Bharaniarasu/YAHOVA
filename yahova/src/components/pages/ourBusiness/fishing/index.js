import Banner from "../../../pictures/single-boat.jpg";
import ComponentA from "./component-a";
import ComponentB from "./component-b";
import ComponentC from "./component-c";

const Fishing = () => {
  return (
    <>
      <div className="fishing">
        <img src={Banner} alt="" className="fishing-banner" />
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </>
  );
};
export default Fishing;
