import React from "react";
import "../style/ReceiptBookings.css";

function ReceiptBookings(props) {
  return (
    <>
      <div className="appointment-message">
        <p>
          <span className="material-symbols-rounded">task_alt</span>
          {props.patientName}, your appointment with the doctor is scheduled on{" "}
          {props.date} at {props.time}.
        </p>
        <br />
      </div>
    </>
  );
}

export default ReceiptBookings;
