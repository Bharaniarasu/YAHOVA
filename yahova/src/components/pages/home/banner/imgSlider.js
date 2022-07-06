import ImgData from "./data";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ImgSlider = (props) => {
  useEffect(() => {}, []);

  AOS.refreshHard();

  const slider = ImgData.map((data, index) => {
    return (
      <div
        key={index}
        className={
          index === props.slideIndex ? "slides slides-fade" : "slides-none"
        }
      >
        <img src={data.src} alt={data.caption} />
        <div
          className="banner-content"
          data-aos="fade-left"
          data-aos-duration="20
          00"
          data-aos-delay="500"
          data-aos-once="false"
        >
          <h1>{data.header}</h1>
          <p>{data.data}</p>
        </div>
      </div>
    );
  });

  return slider;
};
export default ImgSlider;
