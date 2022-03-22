import ImgSlider from "./imgSlider";
import { useState, useEffect, useRef } from "react";
import Dots from "./dots";
import "./index.css";
import ImgData from "./data";
const Banner = () => {
  let count = 0;
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
      3000
    );
    // return () => {
    //   resetTimeout();
    // };
  }, [slideIndex]);

  console.log("index  " + slideIndex);
  console.log("arrow  " + arrow);

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
        {/* <Dots /> */}
      </div>
    </div>
  );
};

export default Banner;
