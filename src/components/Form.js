import React, { Component } from "react";
import Country from "./Country";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
    };
    if (typeof this.props.handleFormData === "function") {
      this.props.handleFormData(formData);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  placeholder="+628**********"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  <Country />
                </label>
              </div>
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
