import Banner from "../../../pictures/company-1.jpg";
import "../index.scss";
import ComponentA from "./component-a";

const CompanyProfile = () => {
  return (
    <>
      <div className="company-profile">
        <img src={Banner} alt="" className="company-profile-banner" />
        <ComponentA />
      </div>
    </>
  );
};
export default CompanyProfile;
