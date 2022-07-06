import axios from "axios";
const CONTACTUS_BASE_URL = "http://localhost:8080/contact-us/clientData";
class Service {
  getData = () => {
    return axios.get(CONTACTUS_BASE_URL);
  };
  createData = (data) => {
    console.log("data  => " + JSON.stringify(data));
    return axios.post(CONTACTUS_BASE_URL, data);
  };
}
export default new Service();
