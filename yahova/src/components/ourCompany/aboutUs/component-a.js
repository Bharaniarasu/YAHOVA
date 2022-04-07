import "./index.css";
import "../index.scss";
import AOS from "aos";
const ComponentA = () => {
  AOS.init();
  return (
    <>
      <div className="comp-a">
        <div className="about-content">
          <div
            className="about-content-data"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1>About Us</h1>

            <p>
              Lorem laboris id aliqua est exercitation. Adipisicing deserunt est
              eu esse commodo. Ipsum anim pariatur duis dolor Lorem minim culpa
              esse ea. Aliquip tempor cupidatat esse ex eu fugiat veniam velit
              esse exercitation ad aliqua esse. Cupidatat tempor excepteur ipsum
              ea exercitation velit duis. Elit proident nulla adipisicing veniam
              quis deserunt deserunt dolor magna. Fugiat minim aute ullamco
              irure sit magna quis non est qui reprehenderit. Tempor mollit nisi
              veniam sit aute ipsum aliquip consectetur exercitation sunt. Do
              adipisicing dolore Lorem aute minim aliquip laborum adipisicing
              dolor nisi esse non. Voluptate elit non qui cupidatat nulla
              occaecat irure minim in mollit voluptate. Ex ad id irure
              reprehenderit. Veniam cillum elit excepteur voluptate magna duis
              deserunt laboris incididunt velit aliquip duis. Sunt proident
              laborum consectetur ex duis velit. Reprehenderit culpa adipisicing
              ut qui eiusmod ullamco. Quis aliqua sit occaecat velit
              exercitation eiusmod deserunt.Elit veniam nostrud excepteur aliqua
              proident et esse voluptate incididunt do ut. Consectetur non
              pariatur irure excepteur cillum enim incididunt cillum cillum aute
              ut laborum pariatur et. Consequat dolore velit et consequat do
              tempor eu. Ad mollit nostrud fugiat veniam. In non eiusmod ut
              officia occaecat mollit magna.Excepteur voluptate excepteur nulla
              ex qui non eu dolore in et pariatur non ex. Sint Lorem sint Lorem
              ea eiusmod ea veniam. Laboris tempor laboris aute culpa cupidatat.
              Culpa incididunt nulla est consequat. Aliqua irure duis elit et
              cillum est ut nostrud commodo labore laboris duis deserunt
              laborum.Laboris voluptate id fugiat cillum voluptate eiusmod eu.
              Minim mollit proident ea labore id qui magna deserunt consequat.
              Dolore velit ipsum aliquip officia ad ullamco quis irure qui culpa
              tempor. Qui ullamco ipsum occaecat nulla est ea. Occaecat cillum
              fugiat ea laborum in proident ut occaecat nulla.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentA;
