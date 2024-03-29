import "./component.scss";

const ComponentC = () => {
  return (
    <>
      <div className="component-c">
        <div className="row content">
          <div className="col-12 content-header">
            <h1>We can help with</h1>
            <br />
          </div>
          <div className="col-3 content-1">
            <h2>
              <i class="fa fa-sliders"></i>
            </h2>
            <h5>PRODUCT CUSTOMIZATION</h5>
            <br />
            <p>
              We offer our buyers an option to customise existing products real
              time on the platform as per their requirements
            </p>
          </div>
          <div className="col-3 content-2">
            <h2>
              <i class="fa fa-dollar"></i>
            </h2>
            <h5>COST TRANSPARENCY</h5>
            <br />
            <p>
              We believe in full disclosure to the buyer and hence provide open
              costing for each and every order for complete transparency
            </p>
          </div>
          <div className="col-3 content-3">
            <h2>
              <i class="fa fa-bookmark"></i>
            </h2>

            <h5>ORDER TRANSPARENCY</h5>
            <br />
            <p>
              We provide end-to-end transparency in production process with
              achievement vs target timelines to ensure efficient and effective
              delivery of orders
            </p>
          </div>
          <div className="col-3 content-4">
            <h2>
              <i class="fa fa-truck"></i>
            </h2>

            <h5>STREAMLINING SUPPLY CHAIN</h5>
            <br />
            <p>
              We bring scattered supplies from India and all over the globe on
              one platform, “geniemode.com"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentC;
