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
        <img src={data.src} alt={data.caption} />
        {/* <div className="slides-text">{data.caption}</div> */}
      </div>
    );
  });

  return slider;
};
export default ImgSlider;
