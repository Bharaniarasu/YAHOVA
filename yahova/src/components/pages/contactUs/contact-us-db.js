import { useEffect, useState } from "react";
import service from "../../../services/service";
import { Link } from "react-router-dom";
import "./index.scss";

const ContactUsDb = () => {
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
    if (event.target.value.length > 10) {
      return false;
    } else {
      setPhone(event.target.value);
    }
  };
  const subjectChangeHandler = (event) => {
    if (event.target.value.length > 100) {
      return false;
    } else {
      setSubject(event.target.value);
    }
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      mailId: mailId,
      phone: phone,
      subject: subject,
      message: message,
    };
    console.log("data " + JSON.stringify(data));
    service.createData(data).then((res) => {
      alert("We received your query . Our team will contact you ASAP !");
      console.log(data);
    });

    setName("");
    setMailId("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  useEffect(() => {
    service.getData().then((res) => {});
  });
  return (
    <>
      <div className="contact-us-db">
        <div className="contact-us-db-head">
          <h1 className="text-center">Contact Us </h1>
          <br />
          <p className="text-center">
            Email us with any questions inquiries or call +91 9876543210 .{" "}
            <br />
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
                    max="12"
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
                <Link to="/contact-us">
                  <button
                    className="btn btn-info button"
                    onClick={submitData}
                    style={{ marginTop: "30px" }}
                  >
                    SUBMIT
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUsDb;
