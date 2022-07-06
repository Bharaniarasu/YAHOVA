import Footer from "../footer";
import Navbar from "../navbar/navbar";
import "./index.css";
import Bot from "../pictures/bot-1.png";

import { useState } from "react";
const Main = (props) => {
  const { children } = props;
  const [chatBot, setChatBot] = useState(false);
  const chatBotHandler = () => {
    setChatBot(!chatBot);
  };
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <div className="chatbot_logo">
        <img src={Bot} alt="" onClick={chatBotHandler} />
      </div>
      <div className={chatBot ? "chatbot" : "chatbot_null"}>
        <iframe
          title="ChatBot"
          allow="microphone;"
          width="330"
          height="500"
          src="https://console.dialogflow.com/api-client/demo/embedded/8cc0a7f5-b01d-4929-bfcf-6897b5203bd9"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};
export default Main;
