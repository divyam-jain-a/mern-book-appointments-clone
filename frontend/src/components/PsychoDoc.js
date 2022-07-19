import React from "react";
import DocLayout from "./DocLayout";
import "../style/DoctorDisplay.css";
import img from "../img/Untitled-design-2021-06-09T102813.008.png";

function PsychoDoc(props) {
  const doctorsList = [
    {
      key: "doc0",
      img: img,
      docname: "Raman Jha",
      degree: "MBBS, MD",
      experience: "10 years",
      speciality: "Nothing",
      fees: "Rs.1000",
    },

    {
      key: "doc01",
      img: img,
      docname: "DK Jain",
      degree: "MBBS, MD",
      experience: "2 years",
      speciality: "Nothing",
      fees: "Rs.1000",
    },

    {
      key: "doc002",
      img: img,
      docname: "Naman Gupta",
      degree: "MBBS, MD",
      experience: "5 years",
      speciality: "Nothing",
      fees: "Rs.1000",
    },
  ];

  const addingDoctype = (data) => {
    const psychoDocAppointment = {
      ...data,
      doctor: "Doc",
    };
    props.onbookingsss(psychoDocAppointment);
  };

  return (
    <>
      <div className="doctor-panel">
        <p>
          These are the following <b>Psychotherapist</b>{" "}
        </p>
        <DocLayout onBooking={addingDoctype} doctor={doctorsList} />
      </div>
    </>
  );
}

export default PsychoDoc;
