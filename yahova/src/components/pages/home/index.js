import Banner from "./banner/banner";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import ComponentA from "./components/component-a";
import ComponentB from "./components/component-b";
import ComponentC from "./components/component-c";
import ComponentD from "./components/component-d";
import ComponentE from "./components/component-e";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ComponentE />

      <ComponentD />
    </div>
  );
};
export default Home;
