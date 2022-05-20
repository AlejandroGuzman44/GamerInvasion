
import { useState } from 'react';

import React, { useEffect } from 'react';




//    Cambiar nombre a checkbox       **********ojo*********

const RadioButton = (props) => {

  return (
    <div className="form-check">
        <input className="form-check-input" type="checkbox" value={props} id="flexCheckDefault" onClick = {()=> console.log(props)}/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
            {props.value}
        </label>
    </div>

  )

  }


export default RadioButton;