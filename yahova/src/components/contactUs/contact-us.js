// import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import service from "../services/service";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [mailId, setMailId] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const mailIdChangeHandler = (event) => {
    setMailId(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitData = () => {
    const data = {
      name: name,
      mailId: mailId,
      phone: phone,
      subject: subject,
      message: message,
    };
    // alert("data " + JSON.stringify(data));
    console.log("data " + JSON.stringify(data));
    service.createData(data).then((res) => {
      alert("We receive your message . Our team will contact you ASAP !");
      console.log(data);
    });
  };

  useEffect(() => {
    service.getData().then((res) => {
      console.log("GetResponse    " + JSON.stringify(res));
    });
  });
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <h1 className="text-center">Contact Us </h1>
        <br />
        <p className="text-center">
          Email us with any questions inquiries or call +91 9876543210 . <br />
          We would be happy to answer your questions and set up a meeting with
          you.{" "}
        </p>
      </div>
      <div className=" row">
        <div className="card col-md-5 offset-md-6">
          <div className="card-body">
            <form onSubmit="">
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={nameChangeHandler}
                ></input>
              </div>
              <div className="form-group">
                <label>Mail ID</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your valid Mail ID"
                  value={mailId}
                  onChange={mailIdChangeHandler}
                ></input>
              </div>{" "}
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your valid Phone number"
                  value={phone}
                  onChange={phoneChangeHandler}
                ></input>
              </div>{" "}
              <div className="form-group">
                <label>Subject</label>
                <input
                  className="form-control"
                  placeholder="Subject"
                  value={subject}
                  onChange={subjectChangeHandler}
                ></input>
              </div>{" "}
              <div className="form-group">
                <label>Message</label>
                <textarea
                  type=""
                  className="form-control"
                  placeholder="Enter your Messager here..."
                  value={message}
                  onChange={messageChangeHandler}
                ></textarea>
              </div>
              <button
                className="btn btn-info"
                onClick={submitData}
                style={{ marginTop: "30px" }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
