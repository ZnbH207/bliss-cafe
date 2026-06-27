import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaLocationDot, FaWhatsapp, FaInstagram } from "react-icons/fa6";

import { FaRegClock } from "react-icons/fa";

function Contact() {
  const [message, setMessage] = useState("");

  const sendFeedback = () => {
    if (message.trim() === "") {
      alert("Please write your feedback first.");
      return;
    }

    alert("Thank you for your feedback!");

    setMessage("");
  };

  return (
    <>
      <Header />

      <div className="title">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-item">
            <FaLocationDot />
            <span> Location:</span> Tyre, near LIU
          </div>

          <div className="contact-item">
            <FaWhatsapp />
            <span> WhatsApp:</span> +961 70 000 000
          </div>

          <div className="contact-item">
            <FaInstagram />
            <span> Instagram:</span> @blisscafe.lb
          </div>

          <div className="contact-item">
            <FaRegClock />
            <span> Working Hours:</span> All days: 8:00 AM - 11:00 PM
          </div>

          <div className="feedback">
            <h3>Send Us Your Feedback</h3>

            <textarea
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="submit-btn" onClick={sendFeedback}>
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
