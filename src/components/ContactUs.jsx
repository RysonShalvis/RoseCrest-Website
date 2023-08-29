import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const handleOnChange = (event) => {
    if (event.target.name === "user_name") setName(event.target.value);
    if (event.target.name === "user_email") setEmail(event.target.value);
    if (event.target.name === "message") setMessage(event.target.value);
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
          setName("");
          setEmail("");
          setMessage("");
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-us" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        onChange={handleOnChange}
        type="text"
        name="user_name"
        value={name}
      />
      <label>Email</label>
      <input
        onChange={handleOnChange}
        type="email"
        name="user_email"
        value={email}
      />
      <label>Message</label>
      <textarea onChange={handleOnChange} name="message" value={message} />
      <input type="submit" value="Send" />
      {messageSent &&
      <p>Your message has been sent successfully!</p>
      }
      
    </form>
  );
};
