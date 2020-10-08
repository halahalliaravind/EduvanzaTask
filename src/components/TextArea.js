import React from "react";
import TextField from "@material-ui/core/TextField";

const TextArea = (props) => (
  <div className="form-group">
    <TextField
      id={props.id}
      label={props.label}
      name={props.name}
      multiline
      rowsMax={4}
      value={props.value}
      onChange={props.handleChange}
    />
  </div>
);

export default TextArea;
