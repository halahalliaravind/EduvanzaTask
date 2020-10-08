import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "../components/Button";
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import SelectProfession from "../components/SelectProfession";
import TextArea from "../components/TextArea";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        age: "",
        dob: "",
        profession: "",
        locality: "",
        participant: "",
        address: "",
      },

      professionOption: ["Student", "Employee"],
      // skillOptions: ["Programming", "Development", "Design", "Testing"],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleDob = this.handleDob.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
    this.handlePartcipant = this.handlePartcipant.bind(this);
    this.handleLocality = this.handleLocality.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({ newUser: { ...prevState.newUser, name: value } }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({ newUser: { ...prevState.newUser, age: value } }),
      () => console.log(this.state.newUser)
    );
  }

  handleDob(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({ newUser: { ...prevState.newUser, dob: value } }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => ({ newUser: { ...prevState.newUser, [name]: value } }),
      () => console.log(this.state.newUser)
    );
  }

  handleProfession(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          profession: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleLocality(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          locality: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  }
  handlePartcipant(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          participant: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleAddress(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          address: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();

    let userData = this.state.newUser;

    fetch("https://eduvanza.free.beeceptor.com/userregister", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response
        .json()
        .then((data) => {
          alert("Successful Registered");
          console.log(data);
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        profession: "",
        skills: [],
        address: "",
      },
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              inputType={"text"}
              name={"name"}
              value={this.state.newUser.name}
              placeholder={"Enter your name"}
              handleChange={this.handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              inputType={"number"}
              name={"age"}
              value={this.state.newUser.age}
              placeholder={"Enter your age"}
              handleChange={this.handleAge}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              id={"date"}
              name={"Date of Birth"}
              inputType={"date"}
              value={this.state.newUser.dob}
              handleChange={this.handleDob}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectProfession
              value={this.state.newUser.profession}
              handleChange={this.handleProfession}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              inputType={"text"}
              name={"Location"}
              value={this.state.newUser.locality}
              placeholder={"Enter your location"}
              handleChange={this.handleLocality}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              inputType={"number"}
              name={"No of Persons"}
              value={this.state.newUser.participant}
              placeholder={"Enter No of participant"}
              handleChange={this.handlePartcipant}
            />
          </Grid>
        </Grid>
        <Grid container>
          <TextArea
            id={"address"}
            label={"Address"}
            value={this.state.newUser.address}
            name={"info"}
            handleChange={this.handleAddress}
            placeholder={"Enter your communication address"}
          />
        </Grid>
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          color="primary"
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: " 20px 50px 10px",
  padding: "6px 40px",
  background: "blue",
  color: "white",
};

export default FormContainer;
