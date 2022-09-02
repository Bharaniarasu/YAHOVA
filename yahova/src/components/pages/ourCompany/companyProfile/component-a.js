import "../index.scss";

const ComponentA = () => {
  return (
    <>
      <div className="company-profile-comp-a">
        <div className="company-profile-data" data-aos="zoom-in">
          <div className="row ">
            <div className=" col-4 offset-3">Company Name</div>
            <div className=" col-4  offset-0">
              ABCD TRADERS PRIVATE LIMITED
            </div>
          </div>
          <div className="row ">
            <div className=" col-4 offset-3 ">CIN</div>
            <div className="col-4 offset-0">1234567890987654</div>
          </div>{" "}
          <div className="row ">
            <div className=" col-4 offset-3 ">Address</div>
            <div className=" col-4 offset-0 ">
              <p>
                No.8/466,
                <br /> Gandhi Street ,<br /> Vijaya Nagaram,
                <br /> Nungambakkam,
                <br /> Chennai 600 001
              </p>
            </div>
          </div>{" "}
          <div className="row ">
            <div className=" col-4 offset-3 ">Mobile</div>
            <div className=" col-4 offset-0 ">+91 987654321</div>
          </div>{" "}
          <div className="row ">
            <div className=" col-4 offset-3 ">Mail-ID</div>
            <div className=" col-4 offset-0 ">
              abcdtraders@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentA;
