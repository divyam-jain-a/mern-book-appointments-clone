import React, { useState } from "react";
import "../style/AppointmentForm.css";

function AppointmentForm(props) {
  const [pname, setPname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const nameChangeHandler = (event) => setPname(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);
  const timeChangeHandler = (event) => setTime(event.target.value);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const inputs = {
      name: pname,
      date: date,
      time: time,
    };

    props.booked(inputs);
    setPname("");
    setDate("");
    setTime("");
  };

  return (
    <>
      <br />
      <form className="form-appointment" onSubmit={onSubmitHandler}>
        <p className="heading-form">Appointment Form</p>
        <br />
        <div className="all-form-elements">
          <div className="form-patient">
            Patient's Name <br />
            <input
              className="input-boxx"
              placeholder="Name"
              required
              type="text"
              onChange={nameChangeHandler}
              value={pname}
            />
          </div>
          <br />
          <div className="input-box-date">
            Date <br />
            <input
              required
              type="date"
              min="2022-08-05"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
          <br />
          <div className="input-box-time">
            Time <br />
            <select required value={time} onChange={timeChangeHandler}>
              <option selected hidden>
                Timings
              </option>
              <option value="12:00 pm">12:00 pm</option>
              <option value="12:30 pm">12:30 pm</option>
              <option value="1:00 pm">1:00 pm</option>
              <option value="1:30 pm">1:30 pm</option>
              <option value="2:00 pm">2:00 pm</option>
              <option value="4:00 pm">4:00 pm</option>
              <option value="4:30 pm">4:30 pm</option>
              <option value="5:00 pm">5:00 pm</option>
              <option value="5:30 pm">5:30 pm</option>
            </select>
          </div>
        </div>
        <button className="form-btn1" onClick={props.cancel} type="cancel">
          Cancel
        </button>
        <button className="form-btn2" type="submit">
          Book
        </button>
      </form>
    </>
  );
}

export default AppointmentForm;
