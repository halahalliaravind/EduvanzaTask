import React from "react";
import { TextField } from "@material-ui/core";

const Input = (props) => {
  return (
    <div className="form-group">
      <TextField
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
