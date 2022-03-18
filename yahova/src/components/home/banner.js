import ImgSlider from "./imgSlider";
import { useState, useEffect } from "react";
import Dots from "./dots";
import "./index.css";
import ImgData from "./data";
const Banner = () => {
  let count = 0;
  const [slideIndex, setSlideIndex] = useState(0);
  const [arrow, setArrow] = useState("");
  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? ImgData.length - 1 : slideIndex - 1);
    setArrow("left");
  };
  const nextSlide = () => {
    setSlideIndex(slideIndex === ImgData.length - 1 ? 0 : slideIndex + 1);
    setArrow("right");
  };
  useEffect(() => {
    setInterval(() => Autoplay(), 3000);
  }, [slideIndex]);

  const Autoplay = () => {
    //alert("1234");
    while (slideIndex === 0) {
      setSlideIndex(slideIndex + 1);
    }
    while (slideIndex === ImgData.length - 1) {
      setSlideIndex(slideIndex - 1);
    }

    // if (arrow === "left") {
    //   console.log("left launched");

    //   setSlideIndex(slideIndex === 0 ? ImgData.length - 1 : slideIndex - 1);
    // } else if (arrow === "right") {
    //   console.log("right launched");
    //   setSlideIndex(slideIndex === ImgData.length - 1 ? 0 : slideIndex + 1);
    //   // setSlideIndex(slideIndex + 1);
    // }
    // if (slideIndex === 0) {
    //   setSlideIndex(slideIndex + 1);
    //   // nextSlide();
    // } else if (slideIndex === ImgData.length) {
    //   setSlideIndex(slideIndex - 1);
    // }
    // arrow === "left" ? { prevSlide } : nextSlide;
  };
  //   setInterval(nextSlide, 3000);
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
