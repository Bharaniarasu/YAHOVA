import "./component.scss";
import Img2 from "../../../pictures/—Pngtree—indoor plant potted plants png_2858933.png";
const ComponentA = () => {
  return (
    <>
      <div className="component-a">
        <div className="row content">
          <div className="col-8">
            <h2>Header</h2>
            <br />

            <p>
              Sunt aliquip esse non ad laborum id voluptate. Ad est eiusmod amet
              duis tempor ex labore magna magna non mollit qui eiusmod laborum.
              Amet commodo qui consequat ut laboris sint veniam ipsum
              reprehenderit. Nostrud officia sint eiusmod sunt laborum ut minim
              deserunt Lorem aute ex. Lorem id aute pariatur esse.
            </p>
            <br />
            <p>
              Sunt aliquip esse non ad laborum id voluptate. Ad est eiusmod amet
              duis tempor ex labore magna magna non mollit qui eiusmod laborum.
              Amet commodo qui consequat ut laboris sint veniam ipsum
              reprehenderit. Nostrud officia sint eiusmod sunt laborum ut minim
              deserunt Lorem aute ex. Lorem id aute pariatur esse.
            </p>
          </div>
          <div className="col-4 content-img">
            <img src={Img2} alt="" />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentA;
