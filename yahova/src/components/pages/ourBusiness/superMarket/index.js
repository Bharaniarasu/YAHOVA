import Banner from "../../../pictures/super-market.jpg";
import ComponentA from "./component-a";
import ComponentB from "./component-b";
import ComponentC from "./component-c";
import "./index.css";
const SuperMarket = () => {
  return (
    <>
      <div className="super-market">
        <img src={Banner} alt="" className="super-market-banner" />
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </>
  );
};
export default SuperMarket;
