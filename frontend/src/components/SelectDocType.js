import React, { useState, useEffect } from "react";
import ConsultationDoc from "./ConsultationDoc";
import CounselorDoc from "./CounselorDoc";
import PsychoDoc from "./PsychoDoc";
import ReceiptBookings from "./ReceiptBookings";
import img from "../img/Add a heading.png";
import "../style/SelectDocType.css";
import { useNavigate } from "react-router-dom";

function SelectDocType({ userName }) {
  const [appoint, setAppoint] = useState(false);
  const [consultD, setConsultD] = useState(false);
  const [counselorD, setCounselorD] = useState(false);
  const [psychoD, setPsychoD] = useState(false);
  const [records, setRecords] = useState([]);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, []);

  const starthandler = () => {
    setAppoint(true);
    setDisplay(false);
  };

  const showAppointmentshandler = () => {
    if (display === true) {
      setDisplay(false);
    } else setDisplay(true);
  };

  const ConsultDocsHandler = () => {
    setConsultD(true);
    setCounselorD(false);
    setPsychoD(false);
  };

  const CounselorDocsHandler = () => {
    setCounselorD(true);
    setConsultD(true);
    setPsychoD(false);
  };

  const PsychoDocsHandler = () => {
    setPsychoD(true);
    setConsultD(false);
    setCounselorD(false);
  };

  const allrecords1 = (inputs) => {
    setRecords((preRecords) => {
      return [inputs, ...preRecords];
    });
  };

  const allrecords2 = (inputs) => {
    setRecords((preRecords) => {
      return [inputs, ...preRecords];
    });
  };

  const allrecords3 = (inputs) => {
    setRecords((preRecords) => {
      return [inputs, ...preRecords];
    });
  };

  const displayContent =
    records.length === 0
      ? "No Appointments Found"
      : records.map((item) => (
          <ReceiptBookings
            key={Math.random().toString()}
            patientName={item.name}
            date={item.date}
            time={item.time}
          />
        ));

  return (
    <>
      {!appoint && (
        <div className="my-box">
          <div className="main-box">
            <div className="inner-box1">
              <p className="slogan">
                Your mental health is our responsibility and that is a promise.
              </p>
              <p className="powered">
                Powered by <b>Clinicea</b>
              </p>
              <img src={img} alt="" />
            </div>
            <div className="inner-box2">
              <div>
                <p className="hello-msg">
                  Hello <b>{userName}</b>, start booking appointment if you have
                  any mental health issues by clicking the tab below.
                </p>
                <button
                  className="inner-box2-button"
                  onClick={starthandler}
                  defaultValue={appoint}
                >
                  + Book Appointment
                </button>
              </div>
              <div>
                <button
                  className="inner-box2-button"
                  onClick={showAppointmentshandler}
                >
                  Show Appointments
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {appoint && (
        <div>
          <div className="main-box2">
            <br />
            <p>
              Welcome to <b>Psymate</b> : World’s most revolutionary integrated
              mental health platform.
            </p>
            <br />
            <br />
            <br />
            <div className="in-box">
              <div className="consult-btn1">
                <img
                  src="https://ik.imagekit.io/59zmfiwsg6q/consultation_PjbVPl_Oi.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648724869313"
                  alt=""
                />
                <br />
                <br />
                <button onClick={ConsultDocsHandler}>Consultation</button>
              </div>
              <div className="consult-btn2">
                <img
                  src="https://ik.imagekit.io/59zmfiwsg6q/consultation_JV0DWvoJH.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648722603476"
                  alt=""
                />
                <br />
                <br />
                <button onClick={PsychoDocsHandler}>Psychotherapy</button>
              </div>
              <div className="consult-btn3">
                <img
                  src="https://ik.imagekit.io/59zmfiwsg6q/assessments_Me8AEwboZ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1648722603311"
                  alt=""
                />
                <br />
                <br />
                <button onClick={CounselorDocsHandler}>Counselor</button>
              </div>
              <button
                className="cancel-btn"
                onClick={() => {
                  setAppoint(false);
                  setConsultD(false);
                  setCounselorD(false);
                  setPsychoD(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {appoint &&
        ((psychoD && <PsychoDoc onbookingsss={allrecords1} />) ||
          (counselorD && <CounselorDoc onbookingss={allrecords2} />) ||
          (consultD && <ConsultationDoc onbookings={allrecords3} />))}

      {display && <div className="all-appointments">{displayContent}</div>}
    </>
  );
}

export default SelectDocType;
