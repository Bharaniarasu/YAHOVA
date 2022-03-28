import Footer from "../footer";
import Navbar from "../navbar/navbar";

const Main = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Main;
