import { Link } from "react-router-dom";
import ImgData from "./data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
          <AliceCarousel>
            <img src={data.src} alt={data.caption} />
          </AliceCarousel>
        </Link>

        {/* <div className="slides-text">{data.caption}</div> */}
      </div>
    );
  });

  return slider;
};
export default ImgSlider;
