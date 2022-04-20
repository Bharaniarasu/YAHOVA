import { Link } from "react-router-dom";
import ImgData from "./data";
import { useEffect } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ImgSlider = (props) => {
  useEffect(() => {
    const navbar = document.querySelector(".banner-content");
  }, []);
  // AOS.init();

  AOS.refreshHard();

  const slider = ImgData.map((data, index) => {
    return (
      <div
        key={index}
        className={
          index === props.slideIndex ? "slides slides-fade" : "slides-none"
        }
      >
        {/* <Link to={data.link}> */}
        <img src={data.src} alt={data.caption} />
        {/* </Link> */}
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
