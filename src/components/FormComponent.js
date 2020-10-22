import React from "react";
import { render } from "@testing-library/react";

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };

  //change function accepts an input text event listener
  //and changes the state of listener accordingly.

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <form>
        <br />
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="userName"
          placeholder="Username"
          value={this.state.userName}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email address"
          value={this.state.email}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.email}
          onChange={(e) => this.change(e)}
        />
        <br />
        <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;