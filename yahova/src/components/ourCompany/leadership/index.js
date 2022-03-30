import Banner from "../../pictures/meeting.jpg";
import "../index.css";
import ComponentA from "./component-a";
import ComponentB from "./component-b";

const Leadership = () => {
  return (
    <>
      <div className="leadership">
        <img src={Banner} className="leadership-banner" />
        <ComponentA />
        <ComponentB />
      </div>
    </>
  );
};
export default Leadership;
