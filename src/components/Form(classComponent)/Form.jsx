import React, { Component } from "react";

import { FormUser, FormLabel } from "./Form.styled";

class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    experience: "middle",
    agree: false,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleAgreeChange = (e) => {
    this.setState({ agree: !this.state.agree });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <FormUser onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
        </FormLabel>
        <FormLabel>
          Email
          <input
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
        </FormLabel>
        <FormLabel>
          Password
          <input
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
          />
        </FormLabel>
        <FormLabel>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          Junior
        </FormLabel>
        <FormLabel>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          Middle
        </FormLabel>
        <FormLabel>
          <input
            type="radio"
            name="experience"
            onChange={this.handleChange}
            value="senior"
            checked={this.state.experience === "senior"}
          />
          Senior
        </FormLabel>
        <FormLabel>
          <input
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.handleAgreeChange}
          />
          I agree with all rules
        </FormLabel>
        <button type="submit" disabled={!this.state.agree}>
          Submit
        </button>
      </FormUser>
    );
  }
}

export default Form;
