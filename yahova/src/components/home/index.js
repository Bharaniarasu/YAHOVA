// import Banner from "../pictures/globe.jpg";
// import "./index.css";
// import Banner2 from "../pictures/clock.jpg";
// import Banner3 from "../pictures/business.jpg";
// import Banner4 from "../pictures/contact.jpg";
import Banner from "./banner";
import "./index.css";
// const pic = [Banner2, Banner3, Banner4];
// let count = 0;
// const Start = () => {
//   setInterval(2000, Forward);
// };
// const Forward = () => {
//   count += 1;
//   return pic[count];
// };

const Home = () => {
  return (
    <div className="home">
      <Banner />
    </div>
  );

  // <h1>Home</h1>;
};
export default Home;
