import ImgSlider from "./imgSlider";
import { useState, useEffect, useRef } from "react";
import Dots from "./dots";
import "../index.css";
import ImgData from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [arrow, setArrow] = useState("right");
  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? ImgData.length - 1 : slideIndex - 1);
    setArrow("left");
  };
  const nextSlide = () => {
    setSlideIndex(slideIndex === ImgData.length - 1 ? 0 : slideIndex + 1);
    setArrow("right");
  };

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((slideIndex) =>
          arrow === "right"
            ? slideIndex === ImgData.length - 1
              ? 0
              : slideIndex + 1
            : slideIndex === 0
            ? ImgData.length - 1
            : slideIndex - 1
        ),
      10000
    );
  }, [slideIndex]);

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-container-slider">
          <ImgSlider slideIndex={slideIndex} />
          <Dots slideIndex={slideIndex} />

          <span className="prev" onClick={prevSlide}>
            &#10094;
          </span>
          <span className="next" onClick={nextSlide}>
            &#10095;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
