import React from 'react';
import { TextField } from '@material-ui/core';

const DatePicker = (props) => {

	return (  
  <div className="form-group">
    <TextField
      id={props.id}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange} 
      {...props} 
      />
  </div>
)
}

export default DatePicker;