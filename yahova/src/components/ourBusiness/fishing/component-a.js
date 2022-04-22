import "./index.scss";
import Cultivation from "../../pictures/fish cultivation.png";
import Tower from "../../pictures/fishing-tower.jpg";
import Packing from "../../pictures/fish-pack.png";

const ComponentA = () => {
  return (
    <>
      <div className="fishing-component-a">
        <div className="row content">
          <div className="col-3 content-1">
            <img src={Cultivation} />
            <div className="content-data">
              <h3>Fish Hatcheries</h3>
              <p>
                Quis aliqua magna labore nostrud magna reprehenderit velit
                aliquip sint voluptate pariatur laboris nisi veniam. Nisi esse
                minim eu cupidatat reprehenderit velit id Lorem. Aliqua occaecat
                dolore aliqua pariatur est anim aute eu sunt anim elit. Eiusmod
                commodo esse esse esse consequat.
              </p>
            </div>
          </div>
          <div className="col-3 content-2">
            <img src={Tower} />
            <div className="content-data">
              <h3>Fishing</h3>
              <p>
                Duis Lorem sit deserunt sunt veniam. Id minim id ullamco culpa.
                Laboris aliqua in reprehenderit laborum eu culpa laboris veniam
                ut. Esse Lorem ullamco exercitation reprehenderit do culpa
                incididunt nulla magna exercitation. Adipisicing Lorem non ut
                minim occaecat est.
              </p>
            </div>
          </div>
          <div className="col-3 content-3">
            <img src={Packing} />
            <div className="content-data">
              <h3>Fish Exports</h3>
              <p>
                Quis aliqua magna labore nostrud magna reprehenderit velit
                aliquip sint voluptate pariatur laboris nisi veniam. Nisi esse
                minim eu cupidatat reprehenderit velit id Lorem. Aliqua occaecat
                dolore aliqua pariatur est anim aute eu sunt anim elit. Eiusmod
                commodo esse esse esse consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentA;
