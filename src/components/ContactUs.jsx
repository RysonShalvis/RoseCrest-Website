import { useRef, useState } from "react";
import "../scss/_contact-us.scss";
import emailjs from "@emailjs/browser";
import image from "../media/st-george-3.jpg";
import Button from "./Button";

export const ContactUs = () => {
  const form = useRef();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const handleOnChange = (event) => {
    if (event.target.name === "user_first_name")
      setContact({ ...contact, firstName: event.target.value });
    if (event.target.name === "user_last_name")
      setContact({ ...contact, lastName: event.target.value });
    if (event.target.name === "user_email")
      setContact({ ...contact, email: event.target.value });
    if (event.target.name === "user_phone")
      setContact({ ...contact, phone: event.target.value });
    if (event.target.name === "message")
      setContact({ ...contact, message: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v5vo21l",
        "template_cu74k7t",
        form.current,
        "6vuCfCrMgIbMDNCZ-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setContact({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
          }, "5000");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-us">
      <div className="background-image">
        <img src={image} />
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="text-container">
          <h1>
            Contact us today for a free tour and discover why we&apos;re the
            perfect choice for your loved one.
          </h1>
          <p>Rosecrest Assisted Living</p>
          <p>(435)673-7398</p>
          <p>48 W 700 S St. George, UT</p>
          <p>info@rosecresthome.com</p>
        </div>

        <div className="input-container">
          <label>First Name *</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="user_first_name"
            value={contact.firstName}
            required
          />
        </div>

        <div className="input-container">
          <label>Last Name</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="user_last_name"
            value={contact.lastName}
          />
        </div>

        <div className="input-container">
          <label>Email *</label>
          <input
            onChange={handleOnChange}
            type="email"
            name="user_email"
            value={contact.email}
            required
          />
        </div>

        <div className="input-container">
          <label>Phone Number</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="user_phone"
            value={contact.phone}
          />
        </div>

        <div className="input-container message">
          <label>Message *</label>
          <textarea
            onChange={handleOnChange}
            name="message"
            value={contact.message}
            required
          />
        </div>
        <Button isSubmit value="Submit" />
        {messageSent && (
          <p className="message-sent">
            Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};
