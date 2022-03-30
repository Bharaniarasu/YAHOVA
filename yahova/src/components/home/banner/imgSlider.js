import { Link } from "react-router-dom";
import ImgData from "./data";
const ImgSlider = (props) => {
  const slider = ImgData.map((data, index) => {
    return (
      <div
        key={index}
        className={
          index === props.slideIndex ? "slides slides-fade" : "slides-none"
        }
      >
        <Link to={data.link}>
          <img src={data.src} alt={data.caption} />
        </Link>
        {/* <div className="slides-text">{data.caption}</div> */}
      </div>
    );
  });

  return slider;
};
export default ImgSlider;
