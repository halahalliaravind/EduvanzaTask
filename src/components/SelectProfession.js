import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const SelectProfession = (props) => {
  return (
    <div className="form-group">
      <Select
        value={props.value}
        onChange={props.handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="" disabled>
          Select Professions
        </MenuItem>
        <MenuItem value={"Student"}>Student</MenuItem>
        <MenuItem value={"Employee"}>Employee</MenuItem>
      </Select>
    </div>
  );
};

export default SelectProfession;
