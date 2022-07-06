import "./component.scss";
import logo1 from "../../../pictures/medal-1.png";
import logo2 from "../../../pictures/medal-2.png";
import globe from "../../../pictures/globe.png";
import trophy from "../../../pictures/trophy.png";

const ComponentD = () => {
  return (
    <>
      <div className="component-d">
        <div className="row content">
          <div className="col-3 content-1">
            <img src={logo1} alt="" />
            <br />
            <br /> <h4>1 Million+</h4>
            <p>
              Quantity delivered across Home Furnishing and Furniture, Apparels
              and Accessories
            </p>
          </div>
          <div className="col-3 content-2">
            {" "}
            <img src={logo2} alt="" />
            <br />
            <br />
            <h4>200+</h4>
            <p>Yahova Traders certified suppliers onboard sourcing Globally</p>
          </div>
          <div className="col-3 content-3">
            {" "}
            <img src={globe} alt="" />
            <br />
            <br />
            <h4>11 Countries</h4>
            <p>Currently supplying to 11 Countries</p>
          </div>
          <div className="col-3 content-4">
            {" "}
            <img src={trophy} alt="" />
            <br />
            <br />
            <h4>Awards</h4>
            <p>
              INFLECTION AWARD Cross border B2B Supply chain in home and fashion
              - startup
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentD;
