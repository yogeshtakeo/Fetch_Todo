import React, { useState } from "react";
import "./styles.css";

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate(formValues);

    const errors = validate(formValues);

    if (Object.keys(errors).length === 0) {
      alert("Form is valid!");
    } else {
      setErrors(errors);
    }
  };

  const validate = (formData) => {
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="container">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div>
        <label htmlFor="email">
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Enter Email Address"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:&nbsp;&nbsp; </label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Password: &nbsp; </label>
        <input
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleChange}
          placeholder="Enter Password Again"
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
