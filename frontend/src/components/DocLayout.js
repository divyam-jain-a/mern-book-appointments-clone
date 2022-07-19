import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";
// import AppointmentForm from "./AppointmentForm";
import "../style/DocLayout.css";

function DocLayout(props) {
  const [form, setForm] = useState(false);
  const bookAppointmentHandler = (event) => {
    const matchDoc = props.doctor.filter((d) => d.key === event);
    if (matchDoc.length > 0) {
      setForm(true);
    }
  };

  const onBookAppointment = (mydata) => {
    const bookingsWithId = {
      ...mydata,
      id: Math.random().toString(),
    };

    props.onBooking(bookingsWithId);
  };

  const cancelForm = () => {
    setForm(false);
  };
  return (
    <div className="doctors-box">
      {props.doctor.map((doc) => (
        <div className="doc-one" key={doc.key}>
          <img src={doc.img} alt="" />
          <div className="doc-name">{doc.docname}</div>
          <div className="doc-degree">{doc.degree}</div>
          <div className="doc-experience">Experience: {doc.experience}</div>
          <div className="doc-speciality">Speciality: {doc.speciality}</div>
          <div className="doc-fees">{doc.fees}</div>
          <button onClick={() => bookAppointmentHandler(doc.key)}>
            Book 1-on-1 Session
          </button>
          <br />
          <br />
        </div>
      ))}
      <div>
        {form && (
          <AppointmentForm cancel={cancelForm} booked={onBookAppointment} />
        )}
      </div>
    </div>
  );
}

export default DocLayout;
