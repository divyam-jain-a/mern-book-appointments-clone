import React from "react";
import DocLayout from "./DocLayout";
import "../style/DoctorDisplay.css";
import img from "../img/Untitled-design-2021-06-09T102813.008.png";

function ConsultationDoc(props) {
  const doctorsList = [
    {
      key: "doc000",
      img: img,
      docname: "Raghav Kakker",
      degree: "MBBS, MD",
      experience: "10 years",
      speciality: "Nothing",
      fees: "Rs.1000",
    },

    {
      key: "doc0001",
      img: img,
      docname: "Sunil Yadav",
      degree: "MBBS",
      experience: "2 years",
      speciality: "Nothing",
      fees: "Rs.1000",
    },
  ];

  const addingDoctype = (data) => {
    const psychoDocAppointment = {
      ...data,
      doctor: "Doc",
    };
    props.onbookings(psychoDocAppointment);
  };

  return (
    <>
      <div className="doctor-panel">
        <p>
          These are the following <b>Doctors for Consultation</b>
        </p>
        <DocLayout onBooking={addingDoctype} doctor={doctorsList} />
      </div>
    </>
  );
}

export default ConsultationDoc;
