import { useRef, useState } from "react";
import "../scss/_contact-us.scss";
import emailjs from "@emailjs/browser";
import image from "../media/st-george-3.jpg";
import Button from "./Button";

export const Apply = () => {
  const form = useRef();
  const [contact, setContact] = useState({
    applicationDate: "",
    moveInDate: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationshp: "",
    patientFirstName: "",
    patientLastName: "",
    patientDOB: "",
    patientSex: "",
    patientMaritalStatus: "",
    patientEmail: "",
    patientAddress: "",
    healthConditions: "",
    doctorName: "",
    doctorNumber: "",
    aDL: "",
    helpMedication: "",
    approved: "",
    income: "",
    helpPay: "",
    foodRestrictions: "",
    otherFacility: "",
    findUs: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const handleOnChange = (event) => {
    if (event.target.name === "apply_date")
      setContact({ ...contact, applicationDate: event.target.value });
    if (event.target.name === "movein_date")
      setContact({ ...contact, moveInDate: event.target.value });
    if (event.target.name === "user_first_name")
      setContact({ ...contact, firstName: event.target.value });
    if (event.target.name === "user_last_name")
      setContact({ ...contact, lastName: event.target.value });
    if (event.target.name === "user_email")
      setContact({ ...contact, email: event.target.value });
    if (event.target.name === "user_phone")
      setContact({ ...contact, phone: event.target.value });
    if (event.target.name === "apply_relationship")
      setContact({ ...contact, relationshp: event.target.value });
    if (event.target.name === "client_first_name")
      setContact({ ...contact, patientFirstName: event.target.value });
    if (event.target.name === "client_last_name")
      setContact({ ...contact, patientLastName: event.target.value });
    if (event.target.name === "client_dob")
      setContact({ ...contact, patientDOB: event.target.value });
    if (event.target.name === "client_sex")
      setContact({ ...contact, patientSex: event.target.value });
    if (event.target.name === "marital_status")
      setContact({ ...contact, patientMaritalStatus: event.target.value });
    if (event.target.name === "client_email")
      setContact({ ...contact, patientEmail: event.target.value });
    if (event.target.name === "client_address")
      setContact({ ...contact, patientAddress: event.target.value });
    if (event.target.name === "client_conditions")
      setContact({ ...contact, healthConditions: event.target.value });
    if (event.target.name === "doctor_name")
      setContact({ ...contact, doctorName: event.target.value });
    if (event.target.name === "doctor_number")
      setContact({ ...contact, doctorNumber: event.target.value });
    if (event.target.name === "client_adl")
      setContact({ ...contact, aDL: event.target.value });
    if (event.target.name === "client_medication_help")
      setContact({ ...contact, helpMedication: event.target.value });
    if (event.target.name === "waiver_approved")
      setContact({ ...contact, approved: event.target.value });
    if (event.target.name === "client_income")
      setContact({ ...contact, income: event.target.value });
    if (event.target.name === "client_help_pay")
      setContact({ ...contact, helpPay: event.target.value });
    if (event.target.name === "food_restrictions")
      setContact({ ...contact, foodRestrictions: event.target.value });
    if (event.target.name === "client_facility")
      setContact({ ...contact, otherFacility: event.target.value });
    if (event.target.name === "client_find_us")
      setContact({ ...contact, findUs: event.target.value });
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
            applicationDate: "",
            moveInDate: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            relationshp: "",
            patientFirstName: "",
            patientLastName: "",
            patientDOB: "",
            patientSex: "",
            patientMaritalStatus: "",
            patientEmail: "",
            patientAddress: "",
            healthConditions: "",
            doctorName: "",
            doctorNumber: "",
            aDL: "",
            helpMedication: "",
            approved: "",
            income: "",
            helpPay: "",
            foodRestrictions: "",
            otherFacility: "",
            findUs: "",
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
        <div className="input-container">
          <label>Date applying</label>
          <input
            onChange={handleOnChange}
            type="date"
            name="apply_date"
            value={contact.applicationDate}
            required
          />
        </div>

        <div className="input-container">
          <label>Preferred Move in Date</label>
          <input
            onChange={handleOnChange}
            type="date"
            name="movein_date"
            value={contact.moveInDate}
            required
          />
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

        <div className="input-container">
          <label>Relationship to Client *</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="apply_relationship"
            value={contact.relationshp}
            required
          />
        </div>

        <div className="input-container">
          <label> Client First Name *</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_first_name"
            value={contact.patientFirstName}
            required
          />
        </div>

        <div className="input-container">
          <label>Client Last Name *</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_last_name"
            value={contact.patientLastName}
            required
          />
        </div>

        <div className="input-container">
          <label>Client Date of Birth</label>
          <input
            onChange={handleOnChange}
            type="date"
            name="client_dob"
            value={contact.patientDOB}
            required
          />
        </div>

        <div className="input-container">
          <label>Sex</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_sex"
            value={contact.patientSex}
            required
          />
        </div>

        <div className="input-container">
          <label>Client Marital Status</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="marital_status"
            value={contact.patientMaritalStatus}
            required
          />
        </div>

        <div className="input-container">
          <label>Client Email</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_email"
            value={contact.patientEmail}
            required
          />
        </div>

        <div className="input-container">
          <label>Client Current Address</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_address"
            value={contact.patientAddress}
            required
          />
        </div>

        <div className="input-container">
          <label>Client Health Conditions</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_conditions"
            value={contact.healthConditions}
            required
          />
        </div>

        <div className="input-container">
          <label>Doctors Name</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="doctor_name"
            value={contact.doctorName}
            required
          />
        </div>

        <div className="input-container">
          <label>Doctors Phone Number</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="doctor_number"
            value={contact.doctorNumber}
            required
          />
        </div>

        <div className="input-container">
          <label>
            ADLs that need help with (Activities of Daily Living): leave brief
            description for each one Bathing, eating, dressing, ability to move,
            Continence, Toileting
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_adl"
            value={contact.aDL}
            required
          />
        </div>

        <div className="input-container">
          <label>Do you/they need help managing medications?</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_medication_help"
            value={contact.helpMedication}
            required
          />
        </div>

        <div className="input-container">
          <label>
            Are you/they approved for Medicaid&apos;s New Choices Wavier
            Program?
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="waiver_approved"
            value={contact.approved}
            required
          />
        </div>

        <div className="input-container">
          <label>Sources of Income and Amounts:</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_income"
            value={contact.income}
            required
          />
        </div>

        <div className="input-container">
          <label>Will someone else be helping them pay? If so, Who?</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_help_pay"
            value={contact.helpPay}
            required
          />
        </div>

        <div className="input-container">
          <label>
            Does the Client have any Food restrictions? If so, what?
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="food_restrictions"
            value={contact.foodRestrictions}
            required
          />
        </div>

        <div className="input-container">
          <label>
            Where you/they at another facility? If so, what did you like about
            it? What did you dislike about it?
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_facility"
            value={contact.otherFacility}
            required
          />
        </div>

        <div className="input-container">
          <label>How did you hear about us?</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_find_us"
            value={contact.findUs}
            required
          />
        </div>

        <div className="input-container message">
          <label>
            Anything else you would like to share that would make you/them a
            good candidate for residency for our home?
          </label>
          <textarea
            onChange={handleOnChange}
            name="message"
            value={contact.message}
            required
          />
        </div>
        <Button isSubmit value="Submit Application" />
        {messageSent && (
          <p className="message-sent">
            Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};
