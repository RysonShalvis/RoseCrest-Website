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
        "service_v5vo21l",
        "template_v08fcs5",
        form.current,
        "6vuCfCrMgIbMDNCZ-"
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
        <h1>Apply Now to Join our Wonderful In-Home Experience!</h1>
        <div className="input-container">
          <label>Date applying</label>
          <input
            onChange={handleOnChange}
            type="date"
            name="apply_date"
            value={contact.applicationDate}
          />
        </div>

        <div className="input-container">
          <label>Preferred Move in Date</label>
          <input
            onChange={handleOnChange}
            type="date"
            name="movein_date"
            value={contact.moveInDate}
          />
        </div>

        <div className="input-container">
          <label>First Name (Person filling out the application)</label>
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
          />
        </div>

        <div className="input-container">
          <label>Phone Number</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="user_phone"
            value={contact.phone}
            required
          />
        </div>

        <div className="input-container">
          <label>Relationship to Applicant *</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="apply_relationship"
            value={contact.relationshp}
          />
        </div>

        <div className="input-container">
          <label> Applicant First Name *</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_first_name"
            value={contact.patientFirstName}
          />
        </div>

        <div className="input-container">
          <label>Applicant Last Name *</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_last_name"
            value={contact.patientLastName}
          />
        </div>

        <div className="input-container">
          <label>Applicant Date of Birth</label>
          <input
            onChange={handleOnChange}
            type="date"
            name="client_dob"
            value={contact.patientDOB}
          />
        </div>

        <div className="input-container">
          <label>Applicant Sex</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_sex"
            value={contact.patientSex}
          />
        </div>

        <div className="input-container">
          <label>Applicant Marital Status</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="marital_status"
            value={contact.patientMaritalStatus}
          />
        </div>

        <div className="input-container">
          <label>Applicant Email</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_email"
            value={contact.patientEmail}
          />
        </div>

        <div className="input-container">
          <label>Applicant Current Address</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_address"
            value={contact.patientAddress}
          />
        </div>

        <div className="input-container">
          <label>Applicant Health Conditions</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_conditions"
            value={contact.healthConditions}
          />
        </div>

        <div className="input-container">
          <label>Doctors Name</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="doctor_name"
            value={contact.doctorName}
          />
        </div>

        <div className="input-container">
          <label>Doctors Phone Number</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="doctor_number"
            value={contact.doctorNumber}
          />
        </div>

        <div className="input-container">
          <label>
            ADLs that need help with (Activities of Daily Living): leave brief
            description for each one Bathing, eating, dressing, ability to move,
            Continence, Toileting
          </label>
          <textarea
            onChange={handleOnChange}
            type="text"
            name="client_adl"
            value={contact.aDL}
          />
        </div>

        <div className="input-container">
          <label>Does the Resident need help managing medications?</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_medication_help"
            value={contact.helpMedication}
          />
        </div>

        <div className="input-container">
          <label>
            Is the Applicant approved for Medicaid&apos;s New Choices Waiver
            Program?
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="waiver_approved"
            value={contact.approved}
          />
        </div>

        <div className="input-container">
          <label>Sources of Income and Amounts:</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_income"
            value={contact.income}
          />
        </div>

        <div className="input-container">
          <label>Will someone else be helping them pay? If so, Who?</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_help_pay"
            value={contact.helpPay}
          />
        </div>

        <div className="input-container">
          <label>
            Does the Applicant have any Food restrictions? If so, what?
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="food_restrictions"
            value={contact.foodRestrictions}
          />
        </div>

        <div className="input-container">
          <label>
            Was the Applicant at another facility? If so, what did you like
            about it? What did you dislike about it?
          </label>
          <textarea
            onChange={handleOnChange}
            type="text"
            name="client_facility"
            value={contact.otherFacility}
          />
        </div>

        <div className="input-container">
          <label>How did you hear about us?</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="client_find_us"
            value={contact.findUs}
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
