import React from 'react'
import Form from 'react-bootstrap';

export default function RadioButtons(props) {
    
  return (



    <>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
       {props.value}
      </label>
    </div>
    </>
)}
