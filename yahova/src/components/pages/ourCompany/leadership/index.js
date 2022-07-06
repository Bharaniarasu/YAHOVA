import Banner from "../../../pictures/meeting.jpg";
import "../index.scss";
import ComponentA from "./component-a";
import ComponentB from "./component-b";
import ComponentC from "./component-c";

const Leadership = () => {
  return (
    <>
      <div className="leadership">
        <img src={Banner} alt="" className="leadership-banner" />
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </>
  );
};
export default Leadership;
