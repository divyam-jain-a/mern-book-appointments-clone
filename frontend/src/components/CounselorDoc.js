import React from "react";
import DocLayout from "./DocLayout";
import "../style/DoctorDisplay.css";
import img from "../img/Untitled-design-2021-06-09T102813.008.png";

function CounselorDoc(props) {
  const doctorsList = [
    {
      key: "doc00",
      img: img,
      docname: "Dr. Payal Sharma",
      degree: "MBBS, MD, cTMS",
      experience: "10 years",
      speciality: "Nothing",
      fees: "Rs.1000",
    },

    {
      key: "doc001",
      img: img,
      docname: "Dr. Rajendra Raj",
      degree: "MBBS, MD",
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
    props.onbookingss(psychoDocAppointment);
  };

  return (
    <>
      <div className="doctor-panel">
        <p>
          These are the following <b>Doctors for counselling</b>
        </p>
        <DocLayout onBooking={addingDoctype} doctor={doctorsList} />
      </div>
    </>
  );
}

export default CounselorDoc;
