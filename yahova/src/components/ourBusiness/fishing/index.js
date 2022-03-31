import Banner from "../../pictures/fishing.jpg";
import ComponentA from "./component-a";
import ComponentB from "./component-b";
import ComponentC from "./component-c";

const Fishing = () => {
  return (
    <>
      <div className="fishing">
        <img src={Banner} className="fishing-banner" />
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </>
  );
};
export default Fishing;
