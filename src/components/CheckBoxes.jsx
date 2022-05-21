import { useContext, useState } from "react";
import React, { useEffect } from "react";

const CheckBoxes = (props) => {
   
  return (
    <>

    <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <label class="form-check-label" for="flexRadioDefault1">
      {props.value}
    </label>
  </div>
  </>
  );
};

export default CheckBoxes;
