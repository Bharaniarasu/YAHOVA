import ImgData from "./data";
import "../index.css";
const Dots = (props) => {
  const dots = ImgData.map((data, index) => {
    return (
      <span
        key={index}
        className={index === props.slideIndex ? "dots active" : "dots"}
      ></span>
    );
  });

  return <div>{dots}</div>;
};
export default Dots;
