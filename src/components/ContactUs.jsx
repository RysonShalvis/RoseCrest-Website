import { useRef, useState } from "react";
import "../scss/_contact-us.scss";
import emailjs from "@emailjs/browser";

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
        "service_p7qqdj9",
        "template_vw6ncbt",
        form.current,
        "YixTBvDKz7M53m1G3"
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-us">
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-container">
          <label>First Name</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="user_first_name"
            value={contact.firstName}
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
          <label>Email</label>
          <input
            onChange={handleOnChange}
            type="email"
            name="user_email"
            value={contact.email}
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
          <label>Message</label>
          <textarea
            onChange={handleOnChange}
            name="message"
            value={contact.message}
          />
        </div>

        <input type="submit" value="Send" />
      </form>
      {messageSent && <p>Your message has been sent successfully!</p>}
    </div>
  );
};
